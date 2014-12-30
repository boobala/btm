import Ember from 'ember';
import BooksModel from "btm/models/books";

export default Ember.Route.extend({
  model: function() {
   //return BooksModel.findAll(); 
    return [
     BooksModel.create({ "book_id": "1", "book_name": "Pen Iyanthiram", "author_name": "Sujatha", "bought_date": "20-10-2014", "pub_name": "KP", "is_favourite": true, "description": "Nice", "language": "Tamil"}),
      BooksModel.create({ "book_id": "1", "book_name": "Aayirankal mandapam", "author_name": "Kannadasan", "bought_date": "20-10-2014", "pub_name": "KP", "is_favourite": false, "description": "Nice", "language": "Tamil"})    
    ];
  },
  actions: {
    bookDetails: function(book_id) {
      this.transitionTo("bookdetails", {'book_id': book_id});
    }
  }
});