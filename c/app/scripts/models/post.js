var Backbone = require('backbone');

var PostModel = Backbone.Model.extend({
  idAttribute: "_id"
});
console.log('PostModel: ', PostModel);

var PostCollection = Backbone.Collection.extend({
  model: PostModel,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/mattsblogpost/'
});
console.log('PostCollection: ', PostCollection);


module.exports = {
  'PostModel': PostModel,
  'PostCollection': PostCollection
};
