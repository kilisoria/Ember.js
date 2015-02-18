import Ember from 'ember';

export default Ember.Route.extend({
	capacitation:[
		{key: "Actions", file: "controllers > events > new", line: 32 },	    
	    {key: "Actions", file: "controllers > movies > index", line: 32 },	    


		{key: "Addon - Ember-cli-table", file: "templates > comics", line: 1 },	    

	    {key: "Components hsb", file: "components > event-title", line: 1 },	    
	    {key: "Components hsb", file: "components > training-data", line: 1 },
	    {key: "Components js", file: "templates > components > event-title", line: 1 },	    

	    {key: "Computed Property", file: "models > movie", line: 16 },	    
		{key: "Computed Property", file: "models > event", line: 17 },	    

	    {key: "Helpers", file: "helpers > upper-case", line: 1 },	    		
	    {key: "Helpers", file: "helpers > current-date", line: 1 },	    		
		
		{key: "Observers", file: "controllers >  movies > view", line: 12 },

		{key: "Ember.computed.alias", file: "controllers >  movies > view", line: 6 },
		{key: "Ember.computed.filter", file: "controllers >  movies > view", line: 7 },
		{key: "Ember.computed.max", file: "controllers >  movies > index", line: 6 },
		{key: "Ember.computed.min", file: "controllers >  movies > index", line: 7 },
		{key: "Ember.computed.gt", file: "controllers >  movies > index", line: 12 },
		{key: "Ember.computed.gte", file: "controllers >  movies > index", line: 13 },
		{key: "Ember.computed.lte", file: "controllers >  movies > index", line: 14 },
		{key: "Ember.computed.map", file: "controllers >  movies > index", line: 15 },
		
		{key: "sortProperties", file: "controllers >  events", line: 4 },
		{key: "sortProperties", file: "controllers >  index", line: 5 },
		{key: "sortAscending", file: "controllers >  events", line: 5 },	
		{key: "sortAscending", file: "controllers >  index", line: 6 },	


		{key: "Conditionals - Attr", file: "templates > movies > view", line: 5 },		

		{key: "Models - Complex - hasMany/ belongsTo", file: "models > event", line: 1 },		
		{key: "Models - Complex - hasMany/ belongsTo", file: "models > movie", line: 1 },		

		{key: "Mixin", file: "mixins > base", line: 1 },		

	],
	model:function(){
  		return this.get('capacitation');
	}
});
