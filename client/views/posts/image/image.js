Template.Image.events({
  'click .image': function (e, tmpl) {
    Session.set('reactiveImage', tmpl.data);
  }
});

Template.Image.helpers({
});


Template.Image.rendered = function () {
};

Template.Image.created = function () {
};
