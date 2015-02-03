
TVS.SeriesController = Ember.ObjectController.extend({
	serieWeb: '',

	actions:{
		new: function(){			
			Ember.Route.transitionTo('new');
		},
		openSerieOficialWeb: function(web){
			window.open(web,'_blank');	
		},
		remove: function(id){
			this.store.find('serie', id).then(function(serie){
				serie.deleteRecord();
				serie.get('isDeleted');
				serie.save();	
			})
		},
		detail: function(id){
			console.log(id);
			this.transitionToRoute('serie', {id: id});
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

			this.store.createRecord('serie', {title: serieTitle, channel: serieChannel});

			this.transitionToRoute('series');	
			this.send('clear');	
		},
		clear: function(){
			this.set('newSerieTitle', '');
			this.set('newSerieChannel', '');
		},
		existDataEnteredToCreateSerie: function() {
			console.log(this.get('content.newSerieTitle'));
			console.log(this.get('content.serieChannel'));
			return false; 	
		}.property('newSerieTitle', 'newSerieChannel')
	}
});

TVS.HistorySeriesController = Ember.ObjectController.extend({
	actions:{
		remove: function(id){
			this.store.find('historySerie', id).then(function(serie){
				serie.deleteRecord();
				serie.get('isDeleted');
				serie.save();	
			})
		}
	}
});

TVS.SerieController = Ember.ObjectController.extend({
	actions:{

	}
});