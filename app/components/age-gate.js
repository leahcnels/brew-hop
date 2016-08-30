import Ember from 'ember';

export default Ember.Component.extend({
  hideAgeGate: true,

  actions: {
    hideAgeGate(){
      this.set('hideAgeGate', false);
    }
  }
});
