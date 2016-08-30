import Ember from 'ember';

export default Ember.Route.extend({

  maps: Ember.inject.service('google-map'),
  // jsonResponse: Ember.computed('maps.pos',  function() {
  //   var clientId = config.myClientId;
  //   var clientSecret = config.myClientSecret;
  //   var url = 'https://api.foursquare.com/v2/venues/search?ll= 40.69957016220183,-73.99793274204788&oauth_token=WT5MOBSELCH51BDOG4JOAENI5GC0344TPMNKVZ5QJJ44';
  //   // var breweryId = '50327c8591d4c4b30a586d5d';
  //   //
  //   // var url = urlPrefix + 'near=' +maps.pos+ '&categoryId=' + breweryId + '&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20160829';
  //
  //   return Ember.$.getJSON(url).then(function(responseJSON){
  //     console.log(responseJSON.response.venues)
  //     return responseJSON.response.venues;
  //   });
  // },

  beforeModel() {
    this.get('maps').getGeolocation();
  },
  model() {
  },

  actions: {
    searchZip(params) {
      this.transitionTo('zip', params.zip);
    }
  }
});
