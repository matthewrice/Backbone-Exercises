var $ = require('jquery');
var view = require('./view/index');
console.log('view: ', view);
var PostCollection = require('./models/post').PostCollection;
console.log('PostCollection: ', PostCollection);

var postCollection = new PostCollection(); //this function is a new instance of PostCollection.
                                           //I am passing it to my blogEntryTemplate and...

var header = new view.BlogPostHeadingView();
console.log(header);
$('.app').append(header.render().el);

var blogEntryTemplate = new view.BlogPostInputForm({'collection': postCollection});
  $('.app').append(blogEntryTemplate.render().el);
