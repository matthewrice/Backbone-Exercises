var Backbone = require('backbone');
var $ = require('jquery');
var model = require('../models/post');
var blog = require('../../templates/blog.hbs');

var HeaderView = Backbone.View.extend({
  tagName: 'h1',
  className: 'header',
  render: function(){
    this.$el.html("Blog-O-Sphere");
    return this;
  }
});
console.log('HeaderView: ', HeaderView);

var ExplanationView = Backbone.View.extend({
  tagName: 'span',
  className: 'explanation',
  render: function(){
    this.$el.html('An index of the most popular blogs out there.');
    return this;
  }
});
console.log('ExplanationView: ', ExplanationView);

// 'BlogListView' is the 'ul' that all the blog entries will be appended to.
var BlogListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'blog-list well col-md-4',
  /*
   * initialize is a noop that doesn't do anything until I add some programming
   * to it.  In this case, I am using it to create an event listener.
   */
  initialize: function(){
  /*
   * 'listenTo' is an event listener to takes 3 arguments (other, event, and callback function).
   * Other (this.collection) - listen to PostCollection for any entries made.
   * Event ('add') - add the blog entries to the 'ul'.
   * Callback function (this.renderIndividualBlogView) - render those entries to the DOM.)
   */
    this.listenTo(this.collection, 'add', this.renderIndividualBlogView);
  },
  render: function(){
    return this;
  },
  /*
   * the following render is a function that renders IndividualBlogView (an 'li')
   * every time a blog is submitted.
   */
  renderIndividualBlogView: function(blogEntry){
  /*
   * 'individualBlog' is a new instance of IndividualBlogView.
   * 'model' is the variable name I used to require in my collection.
   */
    var individualBlog = new IndividualBlogView({'model': blogEntry});
    // by appending individualBlog to itself, its now a self-updating view.
    this.$el.append(individualBlog.render().el);
    console.log('individualBlog: ', individualBlog);
  }
});

// the following view creates the 'li's in the 'ul'.
var IndividualBlogView = Backbone.View.extend({
  tagName: 'li',
  className: 'individual-blog-entry',
  //the template name, "blog", is the variable name I used to require in my handlebar template.
  template: blog,
  events: {
    // deleteContact is the function below
    'click .delete-button': 'deleteBlog',
    'click .edit-button': 'edit'
  },
  initialize: function(){
    /*
     * I am using another 'listenTo' event listener. As before, it takes 3 arguments.
     * Other (this.model) - find the model (blog entry) attached to the 'li'.
     * Event ('destroy') - delete the blog entry from server.
     * Callback function (this.removeBlog) - remove the blog entry from the DOM.
     */
    this.listenTo(this.model, 'destroy', this.removeBlog);
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  deleteBlog: function(){
    // destroy will delete a blog entry from the server.
    this.model.destroy();
  },
  removeBlog: function(){
    // remove deletes a blog entry from the DOM.
    this.$el.remove();
  }
});


module.exports = {
  'HeaderView': HeaderView,
  'ExplanationView': ExplanationView,
  'BlogListView': BlogListView,
  'IndividualBlogView': IndividualBlogView
};
