import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		loadShows: function(){
			this.transitionToRoute('shows');
		}
	}
});
