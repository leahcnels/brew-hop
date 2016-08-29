import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  actions: {
    searchZip(params) {
      var clientId = config.myClientId;
      var clientSecret = config.myClientSecret;
      var urlPrefix = 'https://api.foursquare.com/v2/venues/search?';
      var breweryId = '50327c8591d4c4b30a586d5d';

      var url = urlPrefix + 'near=' +params.zip+ '&categoryId=' + breweryId + '&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20160829';
      return Ember.$.getJSON(url).then(function(responseJSON){
        return responseJSON.results;
      });
    }
  }
});
