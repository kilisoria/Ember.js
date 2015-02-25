import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
	    openModal: function(controller, model) {
	      this.controllerFor(controller).set('model', model);
	      return this.render(controller, {
	        into: 'application',
	        outlet: 'modal'
	      });
	    },
	    closeModal: function() {
	      return this.disconnectOutlet({
	        outlet: 'modal',
	        parentView: 'application'
	      });
	    }
  	}	
});
