$('document').ready(function(){
  // click event on our button class
  $('button').click(function(){
    // using a varaible named toAdd which is storing a effect that is effecting   our message field with a `val` method.
    var toAdd = $('input[name=message]').val();
    // here we are accessing the `#messages` id and using an append method to insert a new <p> tag into the document everytime the user exicuites a click 
    $('#messages').append('<p>' + toAdd + '</p>' );
  });
});
