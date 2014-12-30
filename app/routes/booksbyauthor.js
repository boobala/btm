import Ember from "ember";

export default Ember.Route.extend({
  setupController: function(controller, context) {
    var appController = this.controllerFor("application");
    var content = appController.get('model');
    context = content.filterBy("author_name", Ember.get(controller, "author_name"));
    this._super(controller, context);
  },
  renderTemplate: function() {
    this.render("booksbylist");
  }
});