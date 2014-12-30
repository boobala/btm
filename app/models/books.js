import Ember from 'ember';

export default Ember.Object.extend({
  book_id: "",
  book_name: "",
  author_name: "",
  pub_name: "",
  bought_date: "",
  holder_name: "",
  is_favourite: false,
  description: "",
  language: "",
  out_of_stock: Ember.computed.notEmpty("holder_name")
});