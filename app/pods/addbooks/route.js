import Ember from "ember";
import BooksModel from "btm/models/books";

export default Ember.Route.extend({
  model: function() {
   return BooksModel.create({});
  },
  actions: {
    goBack: function() {
      this.transitionTo("application");
    }
  }
});
