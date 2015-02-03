
TVS.SeriesRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('serie');
	}
});


TVS.HistorySeriesRoute = Ember.Route.extend({
	model: function(){
		return this.store.find("historySerie");
	}
});


TVS.SeriesNewRoute = Ember.Route.extend({
	model:function(){

	}
});

TVS.SerieRoute = Ember.Route.extend({
	model: function(params){
		console.log(this.store.find('serie', params.id));
		return this.store.find('serie', params.id);
	}
});