var PeopleCollection = require('model/people-collection');

$(document).ready(function(){
  $('body').prepend(JST.application());


  var display = new PeopleCollection();


$('.button').on('click', function(){
  display.on('request', function(){
    $('.button').text('Loading...');
     });
 display.fetch();
 console.log(display.fetch());
 display.on('add', renderList);


 display.on('sync', function(){
   setTimeout(function(){
     $('.button').text('Submit');
   },500);

 });
  });


function renderList(stuff){
  $('.people-list').append(JST.peopleList(stuff.toJSON()));
}

});
