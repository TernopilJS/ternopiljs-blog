CommentsManager = CommentsManager || {};

if (Meteor.isClient) {
  Meteor.subscribe('comments-manager');
}

CommentsManager.addComment = function(commenterId, commentableId, commentableType, text, attachments) {
  var commentObj = {
    commenterId: commenterId,
    commentableId: commentableId,
    commentableType: commentableType,
    text: text
  }
  if (attachments) commentObj.attachments = attachments;
  Meteor.call('commentsManager/addComment', commentObj, function(err, res) {
    console.log(err || res);
  });
}

CommentsManager.find = function(query) {
  check(query, {
    _id: Match.Optional(String),
    commenterId: Match.Optional(String),
    commentableId: Match.Optional(String),
    commentableType: Match.Optional(String)
  });
  return Meteor.comments.find(query);
  // Meteor.call('commntManager/findComments', query, function(err, res){
  // 	if(err) {
  // 		console.log(err);
  // 		return 0;
  // 	} else {
  // 		return res;
  // 	}
  // })
}

CommentsManager.removeByIds = function(ids) {
  ids = (typeof ids === 'string') ? [ids] : ids;
  check(ids, [String])
  Meteor.call('commentsManager/removeCommentByIds', ids, function(err, res) {
    console.log(err || res);
  });
}

if (Meteor.isServer) {

  CommentsManager.config = function(query) {
    this.rules = this.rules || {};
    this.rules.isAdminCanDelete = !!query.isAdminCanDelete;
    this.rules.isAuthorCanDelete = !!query.isAuthorCanDelete;
  }

  CommentsManager.config({
    isAdminCanDelete: true,
    isAuthorCanDelete: true
  });

  Meteor.methods({
    'commentsManager/addComment': function(query) {
      check(query, {
        commenterId: String,
        commentableId: String,
        commentableType: String,
        text: String
      })

      query.createdAt = new Date();

      return Meteor.comments.insert(query, function(err, res) {
        console.log(err || res);
      })
    },
    'commentsManager/removeCommentByIds': function(ids) {
      ids = (typeof ids === 'string') ? [ids] : ids;
      check(ids, [String]);
      var user = Meteor.users.findOne(Meteor.userId());
      var isAdmin = user.roles.indexOf > -1 ? true : false;
      if (isAdmin && CommentsManager.rules.isAdminCanDelete) {
        return Meteor.comments.remove({
          _id: {
            $in: ids
          }
        });
      } else {
        return Meteor.comments.remove({
          _id: {
            $in: ids
          },
          commenterId: user._id
        });
      }
    },
    // 'commntManager/findComments': function(query) {
    //   check(query, {
    //     _id: Match.Optional(String),
    //     commenterId: Match.Optional(String),
    //     commentableId: Match.Optional(String),
    //     commentableType: Match.Optional(String)
    //   });
    //   return Meteor.comments.find(query);
    // }
  });
  
  Meteor.startup(function () {
    Meteor.publish('comments-manager', function(){
      return Meteor.comments.find();
    });
  });
  
}