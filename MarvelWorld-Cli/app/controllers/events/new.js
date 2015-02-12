import Ember from 'ember';

export default Ember.Controller.extend({
	lines: [{id: 1, name:'Movies'}, {id:2, name:'Series'},{id:3 , name:'Comics'}],
	types: [{id: 1, type:'Free'}, {id:2, type:'Payment'}, {id:3, type:'Donate'}],
	actions:{
		remove: function(id){
			if(confirm('Are you sure want to remove this event?')){
				this.store.find('event',id).then(function(event){
					event.deleteRecord();
					event.get('isDeleted');
					event.save();
				});
			}
		},
		confirm: function(model){
			console.log(model);

		},
		cancel: function(){
			 this.transitionToRoute('events');
		}
	}
});