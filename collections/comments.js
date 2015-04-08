Comments = new Mongo.Collection('comments');

Comments.allow({
  insert: function () {
    return true;
  }
});

if (Meteor.isServer) {
  Meteor.publish(null, function () {
    return Comments.find();
  }); 
}
