import Ember from 'ember';

export default Ember.ArrayController.extend({
	needs:['actors'],
	actions:{
		seeAllActors:function(actors){
			this.get('controllers.actors').send('showAllActors');
		}
	}
});
