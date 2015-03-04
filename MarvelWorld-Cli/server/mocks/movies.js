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

var movies=[
{id:1, title: "The Avengers", brief: "The Asgardian Loki encounters the Other, the leader of an extraterrestrial race known as the Chitauri. In exchange for retrieving the Tesseract,2 a powerful energy source of unknown potential, the Other promises Loki an army with which he can subjugate Earth. Nick Fury, director of the espionage agency S.H.I.E.L.D., and his lieutenant Agent Maria Hill arrive at a remote research facility...", review: 10, profile: 1, picThumbnail: "/assets/images/advengers.jpg", favActorName: 'Robert Downey Jr.', watches: 9999999, award: 1, year: 2012},
{id:2, title: "Captain America: The First Avenger", brief: "Captain America is a fictional character, a superhero, created by American cartoonists Joe Simon and Jack Kirby. The character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics. Designed as a patriotic supersoldier who often fought the Axis powers of World War II, Captain America was Timely Comics'....", review: 10, picThumbnail: "/assets/images/captainAmerica-the-first-avenger.jpg", watches: 10000000 ,award: 0, year: 2011},
{id:3, title: "Captain America: The Winter Soldier", brief: "Captain America is a fictional character, a superhero, created by American cartoonists Joe Simon and Jack Kirby. The character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics. Designed as a patriotic supersoldier who often fought the Axis powers of World War II, Captain America was Timely Comics'....", review: 10, picThumbnail: "/assets/images/captainAmerica.jpg", watches: 10000000 ,award: 0, year: 2014},
{id:4, title: "Thor", brief: "Thor is a 2011 American superhero film based on the Marvel Comics character of the same name, produced by Marvel Studios and distributed by Paramount Pictures.[a] It is the fourth installment in the Marvel Cinematic Universe. The film was directed by Kenneth Branagh, written by Ashley Edward Miller, Zack Stentz and Don Payne, and stars Chris Hemsworth, Natalie Portman, Tom ...", review: 8, picThumbnail: "/assets/images/thor.jpg", favActorName: 'Natalie Portman', watches: 10000001,award: 0, year: 2011},
{id:5, title: "Thor: The Dark World", brief: "Thor is a 2011 American superhero film based on the Marvel Comics character of the same name, produced by Marvel Studios and distributed by Paramount Pictures.[a] It is the fourth installment in the Marvel Cinematic Universe. The film was directed by Kenneth Branagh, written by Ashley Edward Miller, Zack Stentz and Don Payne, and stars Chris Hemsworth, Natalie Portman, Tom ...", review: 8, picThumbnail: "/assets/images/thor- dark-world.jpg", favActorName: 'Natalie Portman', watches: 10000001,award: 0, year: 2013},
{id:6, title: "Hulk", brief: "The Incredible Hulk is a 2008 American superhero film featuring the Marvel Comics character the Hulk, produced by Marvel Studios and distributed by Universal Pictures. It is the second installment in the Marvel Cinematic Universe. The film was directed by Louis Leterrier, with a screenplay by Zak Penn. It stars Edward Norton, Liv Tyler, Tim Roth, Tim Blake Nelson, Ty Burrell, and...", review: 5, picThumbnail: "/assets/images/hulk.jpg", watches: 8800000,award: 0, year: 2008},
{id:7, title: "Iron Man", brief: "Iron Man is a 2008 American superhero film featuring the Marvel Comics character Iron Man, produced by Marvel Studios and distributed by Paramount Pictures.1 It is the first installment in the Marvel Cinematic Universe. The film was directed by Jon Favreau, with a screenplay by Mark Fergus and Hawk Ostby, Art Marcum and Matt Holloway. It stars Robert Downey, Jr., Terrence Howard, Jeff Bridges, Shaun Toub and Gwyneth Paltrow. In Iron Man, Tony Stark, an industrialist and master engineer, builds a...", review: 9, picThumbnail: "/assets/images/iron-man.jpg", watches: 20000000,award: 0, year: 2008},
{id:8, title: "Iron Man 2", brief: "Iron Man is a 2008 American superhero film featuring the Marvel Comics character Iron Man, produced by Marvel Studios and distributed by Paramount Pictures.1 It is the first installment in the Marvel Cinematic Universe. The film was directed by Jon Favreau, with a screenplay by Mark Fergus and Hawk Ostby, Art Marcum and Matt Holloway. It stars Robert Downey, Jr., Terrence Howard, Jeff Bridges, Shaun Toub and Gwyneth Paltrow. In Iron Man, Tony Stark, an industrialist and master engineer, builds a...", review: 9, picThumbnail: "/assets/images/iron-man-2.jpg", watches: 20000000,award: 0, year: 2010},
{id:9, title: "Iron Man 3", brief: "Iron Man is a 2008 American superhero film featuring the Marvel Comics character Iron Man, produced by Marvel Studios and distributed by Paramount Pictures.1 It is the first installment in the Marvel Cinematic Universe. The film was directed by Jon Favreau, with a screenplay by Mark Fergus and Hawk Ostby, Art Marcum and Matt Holloway. It stars Robert Downey, Jr., Terrence Howard, Jeff Bridges, Shaun Toub and Gwyneth Paltrow. In Iron Man, Tony Stark, an industrialist and master engineer, builds a...", review: 9, picThumbnail: "/assets/images/iron-man-3.jpg", watches: 20000000,award: 0, year: 2013},
{id:10, title: "Guardians of the Galaxy", brief:"Guardians of the Galaxy is a 2014 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the tenth installment in the Marvel Cinematic Universe. The film was directed by James Gunn, who wrote the screenplay with Nicole Perlman, and features an...", review: 8, picThumbnail: "/assets/images/guardian-of-galaxy.jpg" , watches: 10100000,award: 0,year: 2014},
{id:11, title: "The Avengers: Age of Ultron", brief: "The Asgardian Loki encounters the Other, the leader of an extraterrestrial race known as the Chitauri. In exchange for retrieving the Tesseract,2 a powerful energy source of unknown potential, the Other promises Loki an army with which he can subjugate Earth. Nick Fury, director of the espionage agency S.H.I.E.L.D., and his lieutenant Agent Maria Hill arrive at a remote research facility...", review: 0, profile: 1, picThumbnail: "/assets/images/the-avengers-age-of-ultron.jpg", favActorName: 'Robert Downey Jr.', watches: 0, award: 0, year: 2015},
{id:12, title: "Ant-Man", brief: "The Asgardian Loki encounters the Other, the leader of an extraterrestrial race known as the Chitauri. In exchange for retrieving the Tesseract,2 a powerful energy source of unknown potential, the Other promises Loki an army with which he can subjugate Earth. Nick Fury, director of the espionage agency S.H.I.E.L.D., and his lieutenant Agent Maria Hill arrive at a remote research facility...", review: 0, profile: 1, picThumbnail: "/assets/images/placeholder.png", watches: 0, award: 0, year: 2015},
{id:13, title: "Captain America: Civil War", brief: "Captain America is a fictional character, a superhero, created by American cartoonists Joe Simon and Jack Kirby. The character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics. Designed as a patriotic supersoldier who often fought the Axis powers of World War II, Captain America was Timely Comics'....", review: 0, picThumbnail: "/assets/images/captainAmerica-civil-war.jpg", watches: 0 ,award: 0, year: 2016},
{id:14, title: "Doctor Strange", brief: "TBD", review: 0, picThumbnail: "/assets/images/placeholder.png", watches: 0 ,award: 0, year: 2016},
{id:15, title: "Guardians of the Galaxy 2", brief:"Guardians of the Galaxy is a 2014 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the tenth installment in the Marvel Cinematic Universe. The film was directed by James Gunn, who wrote the screenplay with Nicole Perlman, and features an...", review: 0, picThumbnail: "/assets/images/placeholder.png" , watches: 0,award: 0,year: 2017},
];

var actors =[
{id:1, name: 'Robert Downey Jr.', movie: 1},
{id:2, name: 'Chris Evans', movie: 1},
{id:3, name: 'Mark Ruffalo', movie: 1},
{id:4, name: 'Chris Hemsworth', movie: 1},
{id:5, name: 'Scarlett Johansson', movie: 1},
{id:6, name: 'Jeremy Renner', movie:1},
{id:7, name: 'Tom Hiddleston', movie:1},
{id:8, name: 'Clark Gregg', movie: 1},
{id:9, name: 'Cobie Smulders', movie: 1},
{id:10, name: 'Stellan Skarsgard', movie: 1},
{id:11, name: 'Samuel L. Jackson', movie: 1},
{id:12, name:'Chris Evans', movie: 2},
{id:13, name:'Chris Hemsworth', movie: 4},
{id:14, name:'Natalie Portman', movie: 4},
{id:15, name:'Tom Hiddleston', movie: 4},
{id:16, name:'Rene Russo', movie: 4},
{id:17, name:'Anthony Hopkins', movie: 4}
];

var profiles= [
{id: 1, name: "one", movie: 1}
];

module.exports = function(app) {
  var express = require('express');
  var moviesRouter = express.Router();

  moviesRouter.get('/', function(req, res) {
    res.send({
      'profiles': profiles,
      'actors': actors,
      'movies':movies
    });
  });

  moviesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  moviesRouter.get('/:id', function(req, res) {
    res.send({
      'profiles': profiles,
      'actors': actors, 
      "movie": movies.find(function(movie){
        return movie.id == req.params.id
      })    
    });
  });

  moviesRouter.put('/:id', function(req, res) {
    res.send({
      'movies': {
        id: req.params.id
      }
    });
  });

  moviesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/movies', moviesRouter);
};
