import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("addbook", {path: "/addbook"});
  this.route("bookdetails", {path: "/bookdetails/:book_id"});
  this.route("bookslist", {path: "/allbooks"});
  this.route("authorslist", {path: "/authorslist"});
  this.route("booksbyauthor", {path: "/listbyauthor"});
  this.route("publist", {path: "/publist"});
  this.route("booksbypub", {path: "/listbypub"});
  this.route("favouritebooks", {path: "/favourites"});
  this.route("outofstock", {path: "/outofstock"});
});

export default Router;
