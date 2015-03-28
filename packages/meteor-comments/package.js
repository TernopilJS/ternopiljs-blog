Package.describe({
  name: 'nyablonskiy:meteor-comments',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.2');
  api.use(['mongo', 'templating', 'iron:router', 'aldeed:collection2'], ['client', 'server']);
  api.addFiles(['lib/collection.js', 'lib/common.js'], ['client', 'server']);
  api.export('CommentsManager');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('nyablonskiy:meteor-comments');
  api.addFiles('meteor-comments-tests.js');
});
