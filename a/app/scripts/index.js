var $ = require('jquery');
var view = require('./view/index');
console.log('view: ', view);
var PostCollection = require('./models/post').PostCollection;
console.log('PostCollection: ', PostCollection);

var postCollection = new PostCollection(); //this function is a new instance of PostCollection.
                                           //I am passing it to my blogEntryTemplate and...

/*
 * the following View is a new instance of BlogPostHeadingView.  It renders the
 * content in the <h1> tag to the DOM.
 */
var header = new view.BlogPostHeadingView();
console.log(header);
$('.app').append(header.render().el);

/*
 * the following View is a new instance of BlogPostInputForm.  It renders the
 * content in the <form> tag to the DOM.
 */
var blogEntryTemplate = new view.BlogPostInputForm({'collection': postCollection});
  $('.app').append(blogEntryTemplate.render().el);
