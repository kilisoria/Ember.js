window.TVS = Ember.Application.create({
	ready: function() {
		console.log("Ember.TEMPLATES: ", Ember.TEMPLATES);
	}
});


TVS.ApplicationAdapter = DS.FixtureAdapter.extend();