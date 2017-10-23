// controllers/posts.js
import Ember from 'ember';
export default Ember.Controller.extend({
  notNewPost: true,
  actions: {
    deletePost(book) {
      book.deleteRecord();
      book.save();
    },
  },
});
