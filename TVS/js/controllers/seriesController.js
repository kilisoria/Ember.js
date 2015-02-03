
TVS.SeriesController = Ember.ObjectController.extend({
	actions:{
		new: function(){			
			Ember.Route.transitionTo('new');
		}
	}
});

TVS.NewController = Ember.ObjectController.extend({
	newSerieTitle: "",
	newSerieChannel: "",
	actions:{
		add: function(){		
			var serieTitle = this.get('newSerieTitle');
			var serieChannel = this.get('newSerieChannel');

			//if(Ember.computed.notEmpty(serieTitle) && Ember.computed.notEmpty(serieChannel))
				this.store.createRecord('serie', {title: serieTitle, channel: serieChannel});

			this.transitionToRoute('series');	
			this.send('clear');	
		},
		clear: function(){
			this.set('newSerieTitle', '');
			this.set('newSerieChannel', '');
		}
	}
})