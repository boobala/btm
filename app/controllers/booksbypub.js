import BooksList from "btm/controllers/bookslist";

export default BooksList.extend({
  queryParams: ["pub_name"],
  pub_name: null,
  title: function() {
    return "Books by Publisher -" + this.get('pub_name');
  }.property('pub_name')
});