import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

    drawMap: Ember.computed('map.pos', function() {
      if(this.get('map').pos) {
        console.log("in drawMap computed property");
        console.log(this.get('map').pos);
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
          var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+marker.position.lat()+','+marker.position.lng()+'&radius=50&type=brewery&key=AIzaSyDttrvfo7P6LseYqJztA_M5bYTm4sQaReY';
          return Ember.$.getJSON(url).then(function(responseJSON){

            console.log(responseJSON.results);
            return responseJSON.results;
          });
        }
        var infoWindow = new google.maps.InfoWindow({map: map});
        var pos = this.get('map').pos
        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
      }
    }),
    actions: {
      debug() {
        debugger;
      }
    }
  });
