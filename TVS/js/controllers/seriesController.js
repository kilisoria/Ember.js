
TVS.SeriesController = Ember.ObjectController.extend({
	serieWeb: '',
	canRemoveSerie: true,
	needs:['movie_tickets'],
	actions:{
		new: function(){			
			Ember.Route.transitionTo('new');
		},
		openSerieOficialWeb: function(url){
			window.open(url,'_blank');	
		},
		remove: function(id){
			if(confirm('Are you sure to want to delete this serie of the collection?')){
				this.store.find('serie', id).then(function(serie){
					serie.deleteRecord();
					serie.get('isDeleted');
					serie.save();

				})
			}
		},
		detail: function(id){
			console.log(id);
			this.transitionToRoute('serie', {id: id});
		},		
		goMovieTicket: function(){
			// Calls to another controller.
			this.get('controllers.movie_tickets').send('goCinemarkWeb');	
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
	canRemoveSerie: false,
	actions:{
		detail: function(id){
			console.log(id);
			this.transitionToRoute('serie', {id: id});
		}
	}
});

TVS.SerieController = Ember.ObjectController.extend({
	actions:{
		ok:function(){
			this.transitionToRoute('series');
		}
	}
});