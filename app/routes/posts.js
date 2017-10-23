// routes/posts.js
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('post');
  },

  setupController: function(controller, model) {
    //debugger
    controller.set('model', model);
    controller.set('notNewPost', true);
  }
});
