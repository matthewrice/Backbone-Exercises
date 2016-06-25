var Backbone = require('backbone');
var $ = require('jquery');
var model = require('../models/post');
/*
 * If you don't require peopleGeneratorTemplate in, you will get an error in the
 * console that says, "peopleGeneratorTemplate is not defined."
 * peopleGeneratorTemplate is both the name of the template in my FormView and
 * the name of the variable in the main index.js file.
 */
var peopleGeneratorTemplate = require('../../templates/index.hbs');

// the following View creates the header for my people generator page.
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


// the following View contains the people generator form.
var FormView = Backbone.View.extend({
  tagName: 'form',
  className: 'people-generator-form col-md-5',
  /*
   * use the template name "peopleGeneratorTemplate" as your variable name when
   * you render the template from your main index.js file.
   */
   template: peopleGeneratorTemplate,
   events: {
     'submit': 'addNewPerson' // 'addBlogEntry' is my event handler function below.
   },
   render: function(){
     this.$el.append(this.template());
     return this;
   },
   addNewPerson: function(event){
     event.preventDefault();
     /*
      * the collection method is the argument that will be passed to the
      * peopleGeneratorTemplate function in your main index.js file. That function
      * will render this View to the DOM and run the event that generates new people.
      */
     this.collection.create({
        'firstName': $('#firstName').val(),
        'lastName': $('#lastName').val(),
        'address': $('#address').val(),
        'phoneNumber': $('#phoneNumber').val()
     });
     /*
      * in Dan's notes (6.4-contacts), he didn't reiterate "this.collection.create"
      * like I have below.  I have tried to run my program without the reiteration
      * but it doesn't work without.  I need to figure out why.
      */
     this.collection.create({
       'firstName': $('#firstName').val(''),
       'lastName': $('#lastName').val(''),
       'address': $('#address').val(''),
       'phoneNumber': $('#phoneNumber').val('')
     });
   }
});

module.exports = {
  'HeaderView': HeaderView,
  'FormView': FormView
};
