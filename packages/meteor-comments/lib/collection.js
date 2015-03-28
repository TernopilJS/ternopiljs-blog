Meteor.comments = new Mongo.Collection('commenger');

function isOwner(userID, doc) {
  return userID == doc.commenterId;
}

if (Meteor.isServer) {

  var CommentsSchemas = CommentsSchemas || {};

  CommentsSchemas.Comment = new SimpleSchema({
    commenterId: {
      type: Meteor.ObjectID
    },
    commentableId: {
      type: Meteor.ObjectID
    },
    commentableType: {
      type: String
    },
    createdAt: {
      type: Date
    },
    text: {
      type: String
    },
    attachments: {
      type: [Object],
      optional: true
    }
  });

  Meteor.comments.attachSchema(CommentsSchemas.Comment);

}