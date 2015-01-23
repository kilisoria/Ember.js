
TVS.SeriesController = Ember.ObjectController.extend({
	actions:{
		add: function(){			
			Ember.Route.transitionTo('new');
		},
		verMas: function(){
 			console.log("see more!");
		}
	}
});