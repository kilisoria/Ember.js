import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value){
	return value.charAt(0).toUpperCase() + value.slice(1);
});
