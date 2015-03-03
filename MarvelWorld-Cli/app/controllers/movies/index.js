import Ember from 'ember';
import BaseController from '../../mixins/base-controller';

export default Ember.ArrayController.extend(BaseController,{
	sortProperties: ['title'],
    sortAscending: true,
	watches: Ember.computed.mapBy('model', 'watches'),
	maxWatches: Ember.computed.max('watches'),
	minWatches: Ember.computed.min('watches'),	
	hasMovieAward: Ember.computed.any('model', 'award'),
	actions:{
		seeAllActors:function(){
			this.get('controllers.actors').send('showAllActors');
		},
		load: function(){
			this.transitionToRoute('movies');
		}
	}
});
