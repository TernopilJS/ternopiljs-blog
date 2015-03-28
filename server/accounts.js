_.each(Meteor.settings.accounts, function(configs, name) {
  ServiceConfiguration.configurations.remove({ service: name });
  var service = {};
  service[name] = configs;
  ServiceConfiguration.configurations.insert(service);
});
