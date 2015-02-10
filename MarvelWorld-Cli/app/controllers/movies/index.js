import Ember from 'ember';

export default Ember.ArrayController.extend({
	needs:['actors'],
	actions:{
		seeAllActors:function(){
			this.get('controllers.actors').send('showAllActors');
		}
	}
});
