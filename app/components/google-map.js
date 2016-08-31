import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  didInsertElement: function(mainMap){
    var container = this.$('.map-display')[0];
    var options = {
      center: {lat: 37.0902, lng: 95.7129},
      zoom: 15,
      styles: [
        {
          "featureType": "water",
          "stylers": [
            { "color": "#D69C2E" }
          ]
        },{
          "featureType": "landscape.natural.landcover",
          "stylers": [
            { "color": "#8C322A" }
          ]
        },{
          "featureType": "landscape.natural.terrain",
          "stylers": [
            { "color": "#141416" }
          ]
        },{
          "featureType": "landscape.man_made",
          "stylers": [
            { "color": "#8C322A" }
          ]
        },{
          "featureType": "poi.park",
          "stylers": [
            { "color": "#BB562C" },
            { "hue": "#c3ff00" }
          ]
        },{
          "featureType": "landscape",
          "stylers": [
            { "color": "#cbc144" },
            { "hue": "#ffff00" },
            { "saturation": 21 },
            { "lightness": 44 },
            { "gamma": 1.16 }
          ]
        },{
        }
      ]
    };
    var map = this.get('map').findMap(container, options);
      window.google.maps.event.addListener(map, 'click', function(event) {
        addMarker(event.latLng, map);
      });

      function addMarker(location, map) {
        var marker = new google.maps.Marker({
          position: location,
          map: map,
          icon: '../images/beerCircle.png'
        });
        var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+marker.position.lat()+','+marker.position.lng()+'&radius=50&type=brewery&key=AIzaSyDttrvfo7P6LseYqJztA_M5bYTm4sQaReY';
    return Ember.$.getJSON(url).then(function(responseJSON){
      console.log(marker.position.lat);
      console.log(responseJSON.results);
      console.log(responseJSON.results);
      return responseJSON.results;
    });
  }

  var infoWindow = new google.maps.InfoWindow({map: map});
  console.log(this.get('map'));
    var pos = this.get('pos');
    infoWindow.setPosition(pos);
    infoWindow.setContent('Location found.');
    map.setCenter(pos);
},
    actions: {
      debug() {
        debugger;
      }
    }
  });
