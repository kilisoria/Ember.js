import Ember from 'ember';

/*export default Ember.Handlebars.makeBoundHelper(function(key){
	return  Ember.I18n.t(key).toUpperCase();
});*/

export default Ember.Handlebars.makeBoundHelper(function(property, options){
	var params = options.hash,
    self = this;

	  // Support variable interpolation for our string
	  Object.keys(params).forEach(function (key) {
	    params[key] = Em.Handlebars.get(self, params[key], options);
	  });

	  return Em.I18n.t(property, params);
});


