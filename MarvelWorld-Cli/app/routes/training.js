import Ember from 'ember';

export default Ember.Route.extend({
	capacitation:[
		{key: "Computed Properties", value: ""},
		{key: "Observers", file: "Controllers >  Movies > View", line: 12 },
		{key: "Ember.computed.alias", file: "Controllers >  Movies > View", line: 6 },
		{key: "Ember.computed.filter", file: "Controllers >  Movies > View", line: 7 }
	],
	model:function(){
  		return this.get('capacitation');
	}
});
