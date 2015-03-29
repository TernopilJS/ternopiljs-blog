var Form = function (obj) {
  this.title = obj.title || {
    limit: 40,
    required: true
  };
  this.url = obj.url || false;
  this.iframe = obj.iframe || false;
  this.thumbnail = obj.thumbnail || false;
  this.content = obj.content || false;
};

Template.AddPostModal.events({
  'submit form[name="add-post"]': function (e, tmpl) {
    e.preventDefault();
    var object = $(e.target).serializeObject();
    object.category = tmpl.category.get();
    object.createdAt = new Date();
    console.log(Posts.insert(object));
    $('#add-post-modal').modal('hide');
  },

  'click .category': function (e, tmpl) {
    e.preventDefault();
    e.stopImmediatePropagation();
    tmpl.category.set($(e.target).data('category'));
  }
});

Template.AddPostModal.helpers({
  form: function () {
    var category = Template.instance().category.get();
    if (category === 'links') {
      return new Form({
        url: {
          required: true
        }, 
        content: true
      });
    }
    if (category === 'news') {
      return new Form({
        content: true, 
        thumbnail: true
      });
    }
    if (category === 'videos') {
      return new Form({
        content: true, 
        thumbnail: true,
        iframe: true
      });
    }
    if (category === 'questions') {
      return new Form({
        content: true, 
        thumbnail: true,
      });
    }
    if (category === 'presentations') {
      return new Form({
        content: true, 
        thumbnail: true, 
        iframe: true
      });
    };
    return false;
  }
});

Template.AddPostModal.onCreated(function () {
  this.category = new ReactiveVar();
});

Template.AddPostModal.onRendered(function () {

});