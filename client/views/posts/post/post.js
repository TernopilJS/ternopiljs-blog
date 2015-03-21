Template.Post.events({
  'click .post': function (e, tmpl) {
    var context = tmpl.data;
    context.isModal = true;
    Session.set('reactivePost', context);
  }
});

Template.Post.helpers({
  isVideo: function () {
    return this.category === 'videos';
  },
  isLink: function () {
    return this.category === 'links';
  },
  isPresentation: function () {
    return this.category === 'presentations';
  },
  isNews: function () {
    return this.category === 'news';
  }
});


Template.Post.rendered = function () {
};

Template.Post.created = function () {
};
