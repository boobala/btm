import Ember from 'ember';
import BooksModel from "btm/models/books";

export default Ember.Route.extend({
  model: function() {
    var appController = this.controllerFor('application');
    return appController.get('model');
  }
});
