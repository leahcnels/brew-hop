import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  didInsertElement: function(mainMap){
    var container = this.$('.map-display')[0];
    var options = {
      center: {lat: 37.0902, lng: 95.7129},
      zoom: 15
    };
    var map = this.get('map').findMap(container, options);
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
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          handleLocationError(false, infoWindow, map.getCenter());
        }
        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
          infoWindow.setPosition(pos);
          infoWindow.setContent(browserHasGeolocation ?
                                'Error: The Geolocation service failed.' :
                                'Error: Your browser doesn\'t support geolocation.');
        }
        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
          infoWindow.setPosition(pos);
          infoWindow.setContent(browserHasGeolocation ?
                                'Error: The Geolocation service failed.' :
                                'Error: Your browser doesn\'t support geolocation.');
        }
      }
  });
