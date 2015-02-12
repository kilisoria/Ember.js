import Ember from 'ember';

export default Ember.Component.extend({
	eventTitleCountryUrl: function(){
		var country = this.get('model.country');

		switch(country){
			case "ARG":
			   return '/assets/images/arg-flag.png';
			case "US":
			   return '/assets/images/us-flag.png';
			case "ENG":
			   return '/assets/images/eng-flag.png';
		   case "JAP":
			   return '/assets/images/jap-flag.png';
			default:
				return '/assets/images/us-flag.png';
		}				
		
	}.property('model.country')
});
