// controllers/posts.js
import Ember from 'ember';
export default Ember.Controller.extend({
  notNewPost: true,
  actions: {
    deletePost(book) {
      var deleteKey = this.get('deleteCode');
      var modelDeleteCode = book.get('title') + " " + book.get('author');
      if (deleteKey == modelDeleteCode){
        book.deleteRecord();
        book.save();
        this.set('deleteCode', null);
      }else{
        alert('Not authorized to delete this record');
      }
    },
  },
});
