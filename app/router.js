import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("addbook", {path: "/addbook"});
  this.resource("bookdetails", {path: "/bookdetails/:book_id"});
  this.resource("bookslist", {path: "/allbooks"});
  this.resource("authorslist", {path: "/authorslist"});
  this.resource("booksbyauthor", {path: "/listbyauthor"});
  this.resource("publist", {path: "/publist"});
  this.resource("booksbypub", {path: "/listbypub"});
  this.resource("favouritebooks", {path: "/favourites"});
  this.resource("outofstock", {path: "/outofstock"});
});

export default Router;
