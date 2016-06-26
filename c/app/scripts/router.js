var $ = require('jquery');
var Backbone = require('backbone');
var view = require('./views/bloglist');
var PostCollection = require('./models/post').PostCollection;


var Router = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  // initialize: function(){
  //   this.collection = new PostCollection();
  // },
  index: function(){
    var postCollection = new PostCollection();

    var header = new view.HeaderView();
    $('.app').append(header.render().el);

    var explanation = new view.ExplanationView();
    $('.app').append(explanation.render().el);

    var blogList = new view.BlogListView({'collection': postCollection});
    $('.app').append(blogList.render().el);

    postCollection.fetch();
  }
});

var router = new Router();
console.log('router: ', router);


module.exports = router;
