import Ember from 'ember';


export default Ember.Handlebars.makeBoundHelper(function(container, key){
	return this.get('i18n').current[container][key];
});
