Template.Comments.helpers({
  comments: function () {
    return Comments.find();
  }
});

Template.Comments.onRendered(function () {
  /* * * CONFIGURATION VARIABLES * * */
  var disqus_shortname = 'ternopiljs';
  /* * * DON'T EDIT BELOW THIS LINE * * */
  (function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();
  Tracker.autorun(function (){
    var post = Session.get('reactivePost');
    console.log('=====POST=====', post);
    if ('undefined' !== typeof DISQUS && post._id) {
      DISQUS.reset({
        reload: true,
        config: function () {  
          this.page.identifier = post._id;  
          this.page.title = post.title || 'Title unknown';
          this.page.url = "http://ternopiljs.meteor.com/#!/" + post._id;
          console.log('disqus this', this);
        }
      });
    }
  });
});