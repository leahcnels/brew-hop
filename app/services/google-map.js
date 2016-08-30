import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
    findMap(container, options) {
      return new this.googleMaps.Map(container, options);
    },
    center(latitude, longitude) {
      return new this.googleMaps.LatLng(latitude, longitude);
    },
 //  getGeolocation() {
 //    var self = this;
 // navigator.geolocation.getCurrentPosition(function(position) {
 //      var pos = {
 //        lat: position.coords.latitude,
 //        lng: position.coords.longitude
 //      };
 //      // console.log("in getCurrentPosition", pos);
 //      self.set('pos', pos);
 //    });
 //  },
  getLocation: function() {
    var deferred = $.Deferred();
    navigator.geolocation.getCurrentPosition(deferred.resolve);
    return deferred.promise();
  }

});
