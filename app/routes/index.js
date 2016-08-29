import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    searchZip(params) {
      this.transitionTo('zip', params.zip);
    }
  }
});
