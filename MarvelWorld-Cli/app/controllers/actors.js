import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		showAllActors: function(){			
			console.log(this.store.find('actor'));
		}
	}
});



