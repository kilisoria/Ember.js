import Ember from 'ember';
import Utilities from '../utilities';

export default Ember.ObjectController.extend({
	init:function(){
		console.log("000000000000001");
		console.log(Utilities.code);
	},
	lines: [{id: 1, name:'Movies'}, {id:2, name:'Series'},{id:3 , name:'Comics'}],
	types: [{id: 1, type:'Free'}, {id:2, type:'Payment'}, {id:3, type:'Donate'}],
	countries: [{id:"US", name:"United States"}, {id: "ENG", name: "England"}, {id:"JAP", name:"Japan"}],
	clear:function(){
		 this.set('code','');
		 this.set('name', '');
		 //this.set('country', '');
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
			console.log(this.get('code'));		
			this.store.createRecord('event',
				{
					id: 99999,//utilities.getRandomNumber(),
					code: this.get('code'),
					name: this.get('name'),
					country: this.get('country'),
					address: this.get('address'),
					place: this.get('place'),
					price: this.get('price'),
					//businessLine: this.get('businessLineSelected'),
					date: this.get('date'),
					available: this.get('available'),
					capacity: this.get('capacity'),
					//speakers	
					comments: this.get('comments'),
					//eventType: this.get('type'),					
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
	}	
});