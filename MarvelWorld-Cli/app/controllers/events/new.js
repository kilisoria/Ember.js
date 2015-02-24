import Ember from 'ember';
import RandomNumber from '../../utils/random-number';

export default Ember.ObjectController.extend({
	lines: [{id: 1, name:'Movies'}, {id:2, name:'Series'},{id:3 , name:'Comics'}],
	types: [{id: 1, type:'Free'}, {id:2, type:'Payment'}, {id:3, type:'Donate'}],
	countries: [{id:"US", name:"United States"}, {id: "ENG", name: "England"}, {id:"JAP", name:"Japan"}],
	businessLineSelected:{},
	clear:function(){
		 this.set('code','');
		 this.set('name', '');
		 this.set('country', '');
		 this.set('address', '');
		 this.set('place', '');
		 this.set('price', '');
		 this.set('available', false);
		 this.set('capacity', '');
		 this.set('comments', '');
		 this.set('date', '');
		 //businessLine:
		 //speakers:	
		 //eventType: this.get('type')		 
	},
	actions:{
		confirm: function(){			
			this.store.createRecord('event',{
					id: RandomNumber(),
					code: this.get('model.code'),
					name: this.get('model.name'),
					country: this.get('model.country'),
					address: this.get('model.address'),
					place: this.get('model.place'),
					price: this.get('model.price'),
					//businessLine: this.get('model.businessLine'),
					date: this.get('model.date'),
					available: this.get('model.available'),
					capacity: this.get('model.capacity'),
					comments: this.get('model.comments'),
					//eventType: this.get('type')					
				});
			
			this.clear();
			this.transitionToRoute('events');	
		},
		cancel: function(){
			 this.transitionToRoute('events');
		},
		businessLineChange: function(){
			console.log(this.get('line'));	
			console.log(this.get('businessLineSelected'));
		}
	},
	validations:{
		'model.code':{
			presence: true,
			length: 2
		}
	}	
});