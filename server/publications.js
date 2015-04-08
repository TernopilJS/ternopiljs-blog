Meteor.publish('search', function (text, limit) {
  if (text) return Posts.find({$text: {$search: text}}, {limit: limit});
  return Posts.find({}, {limit: limit});
});