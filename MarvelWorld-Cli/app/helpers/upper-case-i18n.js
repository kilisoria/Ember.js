import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(key){
	return  Ember.I18n.t(key).toUpperCase();
});
