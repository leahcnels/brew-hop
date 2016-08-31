import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  mapService: Ember.inject.service('google-map'),

  didRender() {
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

        }
      ]
    };

    this.get('mapService').createMap(container, options);
    var map = this.get('mapService').map;

    var infoWindow = new google.maps.InfoWindow({map: map});
    var pos = this.get('pos');
    infoWindow.setPosition(pos);
    infoWindow.setContent('Location found.');
    map.setCenter(pos);


    if(this.get('venues')) {
      var venues = this.get('venues').toArray();
      var markersArray = [];
      for(var venue of venues) {
        var location = {lat: venue.location.lat, lng: venue.location.lng};
        var name = venue.name;
        var address = venue.location.address + " " + venue.location.city + ", " + venue.location.state;
        var marker = new google.maps.Marker({
          position:location,
          map:map,
          icon: '../images/beerCircle.png'
        });
        markersArray.push([marker, name, address]);
        var infowindow = new google.maps.InfoWindow({
          // empty
        });
        markersArray.forEach(function([marker, name, address]) {
          marker.addListener('click', function() {
            var contentString = '<p>' +name+ '</p>' + '<p>' +address+ '</p>'
            infowindow.setContent(contentString);
            infowindow.open(map, marker);
          });
        })
      }
    }
  }
});
