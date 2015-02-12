import Ember from 'ember';

export default Ember.View.extend({
		click:function(){
			this.get('controller.index').send('loadMovies');
		}
});