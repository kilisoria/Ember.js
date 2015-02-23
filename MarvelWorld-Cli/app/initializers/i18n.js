var TRANSLATIONS = {
  'user.edit.title': 'Edit User',
  'user.followers.title.one': 'One Follower',
  'user.followers.title.other': 'All {{count}} Followers',
  'button.add_user.title': 'Add a user',
  'button.add_user.text': 'Add',
  'button.add_user.disabled': 'Saving...'
};

var i18nInitializer = {
  name: 'i18n',
  initialize: function() {
    Ember.I18n.translations = TRANSLATIONS;
  }
};
export default i18nInitializer;