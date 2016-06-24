//only require in libraries you intend to use.
var Backbone = require('backbone');
var $ = require('jquery');
var PersonCollection = require('./models/post').PersonCollection;
// console.log('Collection required into my main Index: ', PersonCollection);
var view = require('./view/index');
// console.log('View required into my main Index: ', view);



/*
 * ALWAYS include parenthesis whether or not you intend to pass any arguments.
 * this is called an undefined parameter.
 */
/*
 * the following "new instance" of PersonCollection will be invoked later when
 * you write a function that renders your template to the DOM.
 */
var personCollection = new PersonCollection();
console.log('New instance of PersonCollection: ', personCollection);
