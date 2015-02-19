import Ember from 'ember';
import Model from '../../models/event';

export default Ember.Route.extend({
	model:function(){

		//return Model.create({});

		//return Model;

		return {code: "",
	   			name: "",
	   			country: "",	   		
	   			address: "",
	   			place:"",
	   			price: "",
				date: "",  
				available: "",
				capacity: "",
				comments: ""};

/*	   return this.store.createRecord('event', {
	   		code: "",
	   		name: "",
	   		country: "",	   		
	   		address: "",
	   		place:"",
	   		price: "",
			date: "",  
			available: "",
			capacity: "",
			//speakers: "",
			comments: "",
			//businessLine: "",
			//eventType: "" 
	   });*/
	},
	setupController:function(controller, model){
		controller.set('model', model);		
	}
});
