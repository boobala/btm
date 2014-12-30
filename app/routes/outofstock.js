import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    var appController = this.controllerFor("application");
    return appController.get('model').filterBy("out_of_stock");
  },
  controllerName: "bookslist",
  setupController: function(controller, model) {
    controller.set("title", "Books - Out of Stock");
    this._super(controller, model);
  },
  renderTemplate: function() {
    this.render("bookslist");
  }
});