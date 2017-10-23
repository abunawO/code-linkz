// controllers/posts/new.js
import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    publishPost: function() {
      //debugger
      if (this.get('title') == null || this.get('author') == null || this.get('link') == null){
          alert('Missing info in required fields');
          return;
      }
      if (this.get('title').trim() !== "" && this.get('author') !== "" && this.get('link') !== "" ){
        var newPost = this.store.createRecord('post', {
          title:  this.get('title'),
          author: this.get('author'),
          link:   this.get('link'),
        });
        newPost.save();
        this.transitionToRoute('posts');
      }else {
        alert('Missing info in required fields');
      }
    },
  },
});
