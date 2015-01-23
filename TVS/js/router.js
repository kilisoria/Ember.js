TVS.Router.map(function() {
   this.resource("series", function(){
   	  this.route('new');   	  
   });
   

   this.route("verMas");
   this.route("movies");
   this.route("comics");
   this.route("art");
});

