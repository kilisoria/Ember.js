import Ember from 'ember';

export default Ember.Route.extend({
	setLanguage: function(language){
		var set = Ember.set;
			var application = this.get('container').lookup('application:main');
			set(application, 'defaultLocale', language);
			this.transitionTo('index');
	},
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
		},
		setSpainLanguage: function(){
			this.setLanguage('es');
		},
		setEnglishLanguage: function(){	
			this.setLanguage('en');
		}
	}	
});
