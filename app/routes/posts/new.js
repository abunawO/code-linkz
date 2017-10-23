import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    //debugger
    controller.set('title', null);
    controller.set('author', null);
    controller.set('link', null);
    this.controllerFor('posts').set('notNewPost', false);
  },
  actions: {
    willTransition: function() {
      //debugger
      this.controllerFor('posts').set('notNewPost', true);
    },
  },
});
