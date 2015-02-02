
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
