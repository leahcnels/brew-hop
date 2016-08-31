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
  },
  afterModel() {
    this.set('model', function(){
      console.log("hi");
      var clientId = config.myClientId;
      var clientSecret = config.myClientSecret;
      var urlPrefix = 'https://api.foursquare.com/v2/venues/search?';
      var breweryId = '50327c8591d4c4b30a586d5d';
      var url = urlPrefix + 'll=' +this.get('pos').lat+','+this.get('pos').lng+ '&categoryId=' + breweryId + '&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20160829';
        return Ember.$.getJSON(url).then(function(responseJSON){

        return responseJSON.response.venues;
      });
    });
  }

});
