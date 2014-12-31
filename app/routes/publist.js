import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    var bookslist = this.controllerFor('application').get("model");
    return bookslist.mapBy("pub_name").uniq();
  },
  controllerName: "Ember.ArrayController",
  setupController: function(controller, context) {
    controller.setProperties({
      "title": "Publishers List",
      "iconName": "icon-office"
    });
    this._super(controller, context);
  },
  renderTemplate: function() {
    this.render("grouplist");
  },
  actions: {
    goToList: function(pub_name) {
      this.transitionTo("booksbypub", {queryParams: {pub_name: pub_name}});
    }
  }
});