
TVS.SeriesController = Ember.ObjectController.extend({
	actions:{
		new: function(){			
			Ember.Route.transitionTo('new');
		},
		verMas: function(){
			console.log("see more!");
		},

		add: function(){
			console.log("hola");
		}
	}
});

TVS.NewController = Ember.ObjectController.extend({
	newSerie: "",
	actions:{
		add: function(){
			var aaa = this.get('newSerie');
			console.log(aaa);
			console.log("here you called to the add method");
		}
	}
})