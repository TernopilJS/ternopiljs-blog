Template.Layout.events({
  'input #search-filter input': function (e, tmpl) {
    tmpl.searchQuery.set($(e.target).val().trim());
  }
});

Template.Layout.onCreated(function () {
  var self = this;
  this.searchQuery = new ReactiveVar();

  this.autorun(function () {
    self.subscribe('search', self.searchQuery.get(), limit.get());
  });
});

Template.Layout.onRendered(function () {
  function adjustIframes() {
    $('iframe').each(function(){
      var
      $this       = $(this),
      proportion  = $this.data( 'proportion' ),
      w           = $this.attr('width'),
      actual_w    = $this.width();
      
      if ( ! proportion )
      {
          proportion = $this.attr('height') / w;
          $this.data( 'proportion', proportion );
      }
    
      if ( actual_w != w )
      {
          $this.css( 'height', Math.round( actual_w * proportion ) + 'px' );
      }
    });
  }

  $(window).on('resize load', adjustIframes);
});