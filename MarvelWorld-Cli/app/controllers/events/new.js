if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

import Ember from 'ember';
/*import utilities from '../utilities';*/

export default Ember.Controller.extend({
	lines: [{id: 1, name:'Movies'}, {id:2, name:'Series'},{id:3 , name:'Comics'}],
	types: [{id: -1, type:'[select]'}, {id: 1, type:'Free'}, {id:2, type:'Payment'}, {id:3, type:'Donate'}],
	countries: [{id: -1, name:'[select]'}, {id:"US", name:"United States"}, {id: "ENG", name: "England"}, {id:"JAP", name:"Japan"}],
	businessLineSelected: {id: -1, name: ''},
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
		//businessLine:
		//date
		//speakers	
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
					//date
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