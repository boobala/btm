import Ember from "ember";

export default Ember.Route.extend({
  setupController: function(controller, context) {
    var appController = this.controllerFor("application");
    var content = appController.get('model');
    context = content.filterBy("pub_name", Ember.get(controller, "pub_name"));
    this._super(controller, context);
  },
  renderTemplate: function() {
    this.render("booksbylist");
  }
});