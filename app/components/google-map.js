import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  didInsertElement: function(mainMap){
    var container = this.$('.map-display')[0];
    var options = {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
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
    console.log(marker.position.lat());
    }
  }
});
