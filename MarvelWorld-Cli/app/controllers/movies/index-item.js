import Ember from 'ember';

export default Ember.Controller.extend({
	movieStateClass:function()
	{
		switch(this.get('model.stateCode'))
		{
			case "released":
			return "released";
			case "premiere":
			return "premiere";
			case "comingSoon":
			return "coming-soon";
			default:
			return "released";
		}		
	}.property('model.stateCode')
});
