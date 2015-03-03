import Ember from 'ember';
import enUs from '../locales/en';
import esEs from '../locales/es';

var i18n = {};

var locales = {
  'en': enUs,
  'es': esEs
};

function setCurrent(application) {
  Ember.set(i18n, 'current', locales[application.defaultLocale]);  
}

export function initialize(container, application) {
  application.register('utils:i18n', i18n, { instantiate: false });
  application.inject('route', 'i18n', 'utils:i18n');
  application.inject('model', 'i18n', 'utils:i18n');
  application.inject('component', 'i18n', 'utils:i18n');
  application.inject('controller', 'i18n', 'utils:i18n');

  setCurrent(application);

/*  application.localeStream.subscribe(function(stream) {
    setCurrent(stream.value());
  });*/
}

export default {
  name: 'i18n-current',
  after: 't',
  initialize: initialize
};

