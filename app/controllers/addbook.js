import Ember from "ember";
import BooksModel from "btm/models/books";

export default Ember.ObjectController.extend({
  model: BooksModel.create({}),
  needs: ["application"],
  
  actions: {
    saveRecord: function() {
      var appController = this.get("controllers.application");
      appController.get('model').pushObject(this.get('model'));
      this.transitionToRoute("bookslist");
    }
  }
});