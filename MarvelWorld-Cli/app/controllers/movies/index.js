import Ember from 'ember';

export default Ember.ArrayController.extend({
	needs:['actors'],
	watches: Ember.computed.mapBy('model', 'watches'),
	maxWatches: Ember.computed.max('watches'),
	minWatches: Ember.computed.min('watches'),
	hasMovieAward: Ember.computed.filter('model', function(movie){
		if(movie._data.award !== 0){
			return true;
		}
		return false;
	}),
	actions:{
		seeAllActors:function(){
			this.get('controllers.actors').send('showAllActors');
		},
		load: function(){
			this.transitionToRoute('movies');
		}
	}
});
