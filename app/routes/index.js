import Ember from 'ember';

export default Ember.Route.extend({
  maps: Ember.inject.service('google-map'),
  beforeModel() {
    this.get('maps').getGeolocation();
  },
  model() {
  },
  actions: {
    searchZip(params) {
      this.transitionTo('zip', params.zip);
    }
  }
});
