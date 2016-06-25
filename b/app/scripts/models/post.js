/*
 * I only need to require in Backbone in the models script.  I am not using jquery
 * or underscore or any other library or script.
 */
var Backbone = require('backbone');


// the following constructor function is the Model for this application.
var PersonModel = Backbone.Model.extend({
  idAttribute: "_id"
});
/*
 * the following console.log won't render in my console until I require in the
 * collection into my main index.js script.
 */
// console.log('PersonModel: ', PersonModel);


// the following constructor function is the Collection of Models for this application.
var PersonCollection = Backbone.Collection.extend({
  /*
   * make sure the model constructor (PersonModel) below is not written as a string.
   * If it is, your form will not work at all...it will not post to the server or clear out).
   */
  model: PersonModel,
  // the url below is the server that all user inputs will post to.  The end path is "mattspersoncreator".
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/mattspersoncreator/'
});
console.log('PersonCollection: ', PersonCollection);


module.exports = {
  'PersonModel': PersonModel,
  'PersonCollection': PersonCollection
};
