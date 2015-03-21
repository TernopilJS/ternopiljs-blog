Template.Posts.events({
  'click .load-more-btn': function () {
    var limit = Template.instance().limit;
    limit.set(limit.get() + 10);
  }
});

Template.Posts.helpers({
  posts: function () {
    var limit = Template.instance().limit;
    return this.category ? Posts.find({category: this.category}, {limit: limit.get()}) : Posts.find({}, {limit: limit.get()});
  },
  reactivePost: function () {
    return Session.get('reactivePost');
  },
  showButton: function () {
    var limit = Template.instance().limit;
    return limit.get() < Posts.find({category: this.category}).count();
  }

});

Template.Posts.onCreated(function () {
  this.limit = new ReactiveVar(10);
  Session.setDefault('reactivePost', {});
});

Template.Posts.onRendered(function () {
});


