import Ember from 'ember';

export default Ember.Route.extend({
  maps: Ember.inject.service('google-map')
});
