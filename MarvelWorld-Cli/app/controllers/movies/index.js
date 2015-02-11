import Ember from 'ember';

export default Ember.ArrayController.extend({
	needs:['actors'],
	watches: Ember.computed.mapBy('model', 'watches'),
	maxWatches: Ember.computed.max('watches'),
	minWatches: Ember.computed.min('watches'),
	actions:{
		seeAllActors:function(){
			this.get('controllers.actors').send('showAllActors');
		},
		load: function(){
			this.transitionToRoute('movies');
		}
	}
});
