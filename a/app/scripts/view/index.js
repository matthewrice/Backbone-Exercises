var Backbone = require('backbone');
var $ = require('jquery');
var model = require('../models/post');
/*
 * If you don't require blogEntryTemplate in, you will get an error in the console
 * that says, "blogEntryTemplate is not defined.
 * blogEntryTemplate is both the name of the template in my BlogPostInputForm and
 * the name of the variable in the main index.js file.
 */
var blogEntryTemplate = require('../../templates/index.hbs');
// console.log('model: ', model);


//this View inserts a header in my webpage.
var BlogPostHeadingView = Backbone.View.extend({
  //the tagName is the html tag I am creating with this View.
  tagName: 'h1',
  //I'm not sure why the id and className need to be inside an attributes property.  Dan is inconsistent with this.
  attributes: {
    id: 'header',
    className: 'blogpost-header col-md-12'
  },
  //the render function inserts my text in the <h1> tag.
  render: function(){
    this.$el.html("Matt's Blog Post");
    return this;
  }
});
// console.log('BlogPostHeadingView: ', BlogPostHeadingView);


//this View contains my blog's entry form.  this is being achieved through a template.
var BlogPostInputForm = Backbone.View.extend({
  //no tagName is needed here because the "form" comes with built-in elements.
  tagName: 'form',
  className: 'blog-entry-form col-md-5',
  /*
   * I'm not sure how important this is, but the template name below is the variable
   * name used to render the template from my main index.js file.
   */
  template: blogEntryTemplate,
  events: {
    'submit': 'addBlogEntry'  // 'addBlogEntry' is my event handler function below.
  },
  //the render function inserts my blog entry-form template into my html form.
  render: function(){
    this.$el.append(this.template());
    return this;
  },
  //this function creates the event listener that will allow the user to submit a new blog entry.
  addBlogEntry: function(event){
    //the event.preventDefault prevents the default function of the event listener.
    event.preventDefault();
    this.collection.create({
      'title': $('#newPostTitle').val(), //'title' has to match the <input> "name" in my template.
      'blog': $('#newPostEntry').val()   //'blog' has to match the <input> "name" in my template.
    });
    /*
     * I created the duplicate 'this.collection.create' in order to clear out my
     * form after the user clicks 'submit' on my form.  It does clear out the form,
     * but it submits extra content to the server that gets returned as empty objects.
     */

    // this.collection.create({
    //   'title': $('#new-post-title').val(''),
    //   'blog': $('#new-post-entry').val('')
    // });

    /*
     * Got help from Andy.  My form clears now after the user sumbits a post.
     * Only the content submitted gets posted to the server.  No extra content.
     */
    this.clearBlogPost();
  },
  clearBlogPost: function(){
    $('#newPostTitle').val('');
    $('#newPostEntry').val('');
  }
});
// console.log('BlogPostInputForm: ', BlogPostInputForm);


//this View creates the "li"s contained in my "ul". It creates each individual blog entry.
var BlogEntryView = Backbone.View.extend({

});


//this View inserts a "ul" into my webpage. It contains the list of blog entries.
var BlogEntryListView = Backbone.View.extend({

});



module.exports = {
  'BlogPostHeadingView': BlogPostHeadingView,
  'BlogPostInputForm': BlogPostInputForm,
  'BlogEntryListView': BlogEntryListView
};
