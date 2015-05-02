import Ember from 'ember';

export default Ember.Controller.extend({
	nameClass: "show-name",
	statusClass: "show-status",
	actions:{
		showDetail: function(model){
			console.log(model);

			Ember.get(this,'flashes').info('Ok Testing!', 1000);
		}
	}
});
