import Ember from 'ember';

export default Ember.Route.extend({
  maps: Ember.inject.service('google-map'),

  actions: {
    searchZip(params) {
      this.transitionTo('index.zip', params.zip);
    }
  }
});
