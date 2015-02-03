TVS.Router.map(function() {

	this.route('series');

	this.resource('serie', {path:'serie/:id'});

	this.resource('new', { path: '/post/new' });

	this.route("historySeries");
	this.route("movies");
	this.route("comics");
	this.route("art");

});

