import Ember from 'ember';

export default Em.Controller.extend({
	actions:{
		showAllActors: function(){			
			console.log(this.store.find('actor'));
		}
	}
});



