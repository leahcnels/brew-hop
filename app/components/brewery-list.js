import Ember from 'ember';
import config from '../config/environment';
export default Ember.Component.extend({

  maps: Ember.inject.service('google-map'),
  jsonResponse: Ember.computed('pos', function() {
    if(this.get('pos')){
      
      var clientId = config.myClientId;
      var clientSecret = config.myClientSecret;
      var urlPrefix = 'https://api.foursquare.com/v2/venues/search?';
      var breweryId = '50327c8591d4c4b30a586d5d';

      var url = urlPrefix + 'll=' +this.get('pos').lat+','+this.get('pos').lng+ '&categoryId=' + breweryId + '&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20160829';

      return Ember.$.getJSON(url).then(function(responseJSON){

        console.log(responseJSON.response.venues[0])
        return responseJSON.response.venues;
      });
    }

  })
});
