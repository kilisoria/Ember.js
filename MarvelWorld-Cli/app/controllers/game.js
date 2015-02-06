import Ember from 'ember';

export default Ember.Controller.extend({
	needs:['games'],
	init: function(){
		this._super();
		this.get('controllers.games').set('isGameDetailVisible', true);
	}
});
