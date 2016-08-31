import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  mapService: Ember.inject.service('google-map'),

  didRender() {
    console.log(this.get('pos'));
    console.log(this.get('venues'));
    var container = this.$('.map-display')[0];
    var options = {
      center: {lat: 37.0902, lng: 95.7129},
      zoom: 15
    };
    this.get('mapService').createMap(container, options);
    var map = this.get('mapService').map;

    window.google.maps.event.addListener(map, 'click', function(event) {
      addMarker(event.latLng, map);
    });
    function addMarker(location, map) {
      var marker = new google.maps.Marker({
        position: location,
        map: map
      });
    }
    var infoWindow = new google.maps.InfoWindow({map: map});
    var pos = this.get('pos');
    infoWindow.setPosition(pos);
    infoWindow.setContent('Location found.');
    map.setCenter(pos);
    if(this.get('venues')) {
      var venues = this.get('venues').toArray();
      for(var venue of venues) {
        var location = {lat: venue.location.lat, lng: venue.location.lng};
        var marker = new google.maps.Marker({
          position:location,
          map:map
        });
      }
    }
  },
  actions: {
    debug() {
      console.log("venues: " + this.get('venues'));

      debugger;
    }
  }
});
