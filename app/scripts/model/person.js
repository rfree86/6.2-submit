
var Person = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    name: "Bob Smith",
    favoriteFood: " wings",
    movie: " Pulp Fiction",
  },
});

module.exports = Person;
