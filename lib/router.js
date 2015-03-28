Router.configure({
  layoutTemplate: 'Layout'
});

Router.route('home', {
  path: '/',
  template: 'Posts'
});

Router.route('categoryPage', {
  path: '/category/:name/',
  template: 'Posts',
  data: function () {
    var self = this;
    return {
      category: self.params.name
    };
  }
});