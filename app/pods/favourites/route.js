import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    var appController = this.controllerFor("application");
    return appController.get('model').filterBy("is_favourite");
  },
  controllerName: "bookslist",
  setupController: function(controller, model) {
    controller.set("title", "Favourite Books");
    this._super(controller, model);
  },
  renderTemplate: function() {
    this.render("bookslist");
  }
});
