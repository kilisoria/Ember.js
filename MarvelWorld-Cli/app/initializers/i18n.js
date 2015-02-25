import Ember from 'ember';

var TRANSLATIONS = {
   "movie.max.watches": "(*) The movie with MAX watches has: ",
   "movie.min.watches": "(*) The movie with MIN watches has: ",
   "viewers": "viewers.",
   "movie.award": "(*) Is there movie with awards?",
   "yes": "YES",
   "no.exclamation": "NO!",
   "movies": "Movies",
   "movie.summary": "Summary",
   "core.coming.soon": "Coming SOON!" 
/*  en:{
   "movie.max.watches": "(*) The movie with MAX watches has: ",
   "movie.min.watches": "(*) The movie with MIN watches has: ",
   "viewers": "viewers.",
   "movie.award": "(*) Is there movie with awards?",
   "yes": "YES",
   "no.exclamation": "NO!",
   "movies": "Movies",
   "movie.summary": "Summary" 
  },
  es: {
  "yes": "SI",
  "no.exclamation": "NO!"
 }*/
};

var i18nInitializer = {
    name: 'i18n',
    initialize: function() {
    Ember.I18n.translations = TRANSLATIONS,
    Ember.ENV.I18N_COMPILE_WITHOUT_HANDLEBARS = true,
    Ember.FEATURES.I18N_TRANSLATE_HELPER_SPAN = false
  }
};

export default i18nInitializer;