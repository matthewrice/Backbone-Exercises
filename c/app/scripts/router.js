var $ = require('jquery');
var Backbone = require('backbone');
var view = require('./views/bloglist');
var PostCollection = require('./models/post').PostCollection;


var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'title/:id/': 'detail'
  },
  initialize: function(){
    this.collection = new PostCollection();

    var header = new view.HeaderView();
    $('.app').append(header.render().el);

    var explanation = new view.ExplanationView();
    $('.app').append(explanation.render().el);

    var blogList = new view.BlogListView({collection: this.collection});
    $('.app').append(blogList.render().el);
  },
  index: function(){


    this.collection.fetch();
  },
  detail: function(blogId){
    var self = this;
    this.collection.fetch().done(function(){
      var blog = self.collection.get(blogId);
      var blogDetail = new view.BlogDetailView({model: blog});
      $('.post-blog').html(blogDetail.render().el);
    });
  }
});

var router = new Router();
console.log('router: ', router);


module.exports = router;
