
TVS.SeriesController = Ember.ObjectController.extend({
	actions:{
		new: function(){			
			Ember.Route.transitionTo('new');
		}
	}
});

TVS.NewController = Ember.ObjectController.extend({
	newSerie: "",
	actions:{
		add: function(){
			var serie = this.get('newSerie');
			console.log(serie);
		}
	}
})