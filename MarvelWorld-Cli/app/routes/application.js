import Ember from 'ember';

export default Em.Route.extend({
actions:{
 openModal: function(modalName, model) {
      this.controllerFor(modalName).set('model', model);
      return this.render(modalName, {
        into: 'application',
        outlet: 'modal'
      });
	}
}

});