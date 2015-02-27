import Ember from 'ember';

export default Ember.ArrayController.extend({
	sortProperties: ['title'],
    sortAscending: true,
	watches: Ember.computed.mapBy('model', 'watches'),
	maxWatches: Ember.computed.max('watches'),
	minWatches: Ember.computed.min('watches'),	
	hasMovieAward: Ember.computed.any('model', 'award'),
	name: function() {
    	var a="";
  	}.property(),
	actions:{
		seeAllActors:function(){
			this.get('controllers.actors').send('showAllActors');
		},
		load: function(){
			this.transitionToRoute('movies');
		}
	}
});
