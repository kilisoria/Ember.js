import Ember from 'ember';

export default Ember.ArrayController.extend({
    sortProperties: ['country'],
    sortAscending: false,
	actions:{
		remove: function(id){
			if(confirm('Are you sure want to remove this event?')){
				this.store.find('event',id).then(function(event){
					event.deleteRecord();
					event.get('isDeleted');
					event.save();

					this.transitionToRoute('events');
				});
			}
		}
	}
});
