Template.Navigation.events({

});

Template.Navigation.helpers({
  activeRouteClass: function(category) {
    return Router.current().params.name === category ? 'active' : '';
  },
});

Template.Navigation.onRendered(function (){

});