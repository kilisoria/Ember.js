TVS.Router.map(function() {

	/* Series */
	this.resource('series');
	this.resource('serie', {path:'serie/:id'});
	this.resource('new', { path: '/serie/new' });
	this.route("historySeries");
	this.route("movies");
	this.route("comics");
	this.route("art");

	/* Comics */
	this.route('comics', function(){
		this.route("webs", {path: '/webs'});
		this.route("events");
	});

	/* Movies*/
	this.resource('movies');
	this.route("movieTickets");
});

