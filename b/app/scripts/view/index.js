var Backbone = require('backbone');
var $ = require('jquery');
var model = require('../models/post');
// console.log('Model required into my View doc: ', model);


// the following View creates the header for my people generator.
console.log('HeaderView: ', HeaderView);
var HeaderView = Backbone.View.extend({
  tagName: 'h1',
  className: 'js-header',
  /*
   * make sure you write the render property as a function. Otherwise, you will
   * get a parse error.
   */
  render: function(){
    this.$el.html("People Generator");
    return this;
  }

});
