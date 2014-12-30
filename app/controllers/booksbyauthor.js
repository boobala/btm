import BooksList from "btm/controllers/bookslist";

export default BooksList.extend({
  queryParams: ["author_name"],
  author_name: null,
  title: function() {
    return "Books by Publisher -" + this.get('author_name');
  }.property('author_name')
});