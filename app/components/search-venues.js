import Ember from 'ember';


export default Ember.Component.extend({
  actions: {
    searchZip() {
      var params = {
        zip: this.get('zip')
      };
      this.sendAction('searchZip', params);
    }
  }
});
