import Ember from 'ember';

export default Ember.Route.extend({
  maps: Ember.inject.service('google-map'),
  model() {
    return this.get('maps').getLocation().then(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      return pos;
    });
  }
});
