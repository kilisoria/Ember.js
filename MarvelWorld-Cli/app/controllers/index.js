import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['movies/index'],
	actions:{
		loadMovies: function(){
			this.get('controllers.movies/index').send('load');
		}
	}
})