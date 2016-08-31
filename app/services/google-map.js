import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
  map: null,
  createMap(container, options) {
    this.set('map', new this.googleMaps.Map(container, options));
  },
  center(latitude, longitude) {
    return new this.googleMaps.LatLng(latitude, longitude);
  },
  getLocation: function() {
    var deferred = $.Deferred();
    navigator.geolocation.getCurrentPosition(deferred.resolve);
    return deferred.promise();
  }
});
