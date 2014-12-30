import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    var bookslist = this.controllerFor('application').get("model");
    return bookslist.mapBy("author_name");
  },
  controllerName: "Ember.ArrayController",
  setupController: function(controller, context) {
    controller.set("title", "Authors List");
    this._super(controller, context);
  },
  renderTemplate: function() {
    this.render("grouplist");
  },
  actions: {
    goToList: function(author_name) {
      this.transitionTo("booksbyauthor", {queryParams: {author_name: author_name}});
    }
  }
});