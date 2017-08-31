import Ember from 'ember';
import { default as math, PI } from 'math';

export default Ember.Route.extend({
  beforeModel(){
    console.log('math ', math);
    console.log('PI', PI);
  },
  setupController(controller, model){
    controller.set('loc', Ember.getOwner(this).lookup('data:location'));
    controller.set('request', Ember.getOwner(this).lookup('data:request'));
  }
});
