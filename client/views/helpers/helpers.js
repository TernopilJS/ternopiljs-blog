// Comments.ui.config({
//    template: 'bootstrap'
// });

UI.registerHelper('fromNow', function(date) {
  return moment(date).fromNow();
});