import Ember from "ember";
export default Ember.Route.extend({
  serialize: function(model) {
    return {
      book_id: Ember.get(model, "book_id")
    };
  },
  setupController: function(controller, context) {
    var appController = this.controllerFor("application");
    context = appController.get("model").findBy("book_id", Ember.get(context, 'book_id'));
    this._super(controller, context);
  }
});