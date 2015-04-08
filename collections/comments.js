Comments = new Mongo.Collection('comments');

Comments.allow({
  insert: function () {
    return true;
  }
});

Meteor.publish(null, function () {
  return Comments.find();
}); 