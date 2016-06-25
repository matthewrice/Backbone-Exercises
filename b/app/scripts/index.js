//only require in libraries you intend to use.
var $ = require('jquery');
var view = require('./view/index');
// console.log('View required into my main Index: ', view);
var PersonCollection = require('./models/post').PersonCollection;
// console.log('Collection required into my main Index: ', PersonCollection);


/*
 * ALWAYS include parenthesis whether or not you intend to pass any arguments.
 * this is called an undefined parameter.
 */
/*
 * the following "new instance" of PersonCollection will be invoked later when
 * you write a function that renders your template to the DOM.
 */
var personCollection = new PersonCollection();
// console.log('New instance of PersonCollection: ', personCollection);

/*
 * the following View is a new instance of HeaderView.  It renders the content
 * in the <h1> tag to the DOM.
 */
var header = new view.HeaderView();
console.log(header);
$('.app').append(header.render().el);

/*
 * the following View is a new instance of FormView.  It renders the content
 * in the <form> tag to the DOM.
 */
var peopleGeneratorTemplate = new view.FormView({'collection': personCollection});
  $('.app').append(peopleGeneratorTemplate.render().el);
console.log(peopleGeneratorTemplate);
