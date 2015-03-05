import Ember from 'ember';

export default Ember.ArrayController.extend({
	tableColumns: [{name: 'id', label: 'id', order:1 },
				   {name:'name', label:'name', order: 2}],	
	tableData:[{id: 22, name:"test 001"}],		   
	tableConfig:{sortProperties: ['id', 'name']}
});
