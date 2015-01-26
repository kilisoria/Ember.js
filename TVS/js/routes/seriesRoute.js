
TVS.SeriesRoute = Ember.Route.extend({
  model: function(){
  	  return this.store.find('serie');
  }
});


TVS.VerMasRoute = Ember.Route.extend({
  model: function(){
    return this.store.find("verMas");
  }
});


TVS.SeriesNewRoute = Ember.Route.extend({
  model:function(){

  }
});
