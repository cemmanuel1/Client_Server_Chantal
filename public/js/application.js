$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    var setVal = $(this).attr('data-heading');
    $('#awesomeness_holder').html('<h2>'+setVal+'</h2>');
  });


    $('.skill_teller').on('click', function(){
      var setSkill = window.location.pathname.replace('/skills/','');
      $('#skill_holder').html('<h2>'+setSkill+'</h2>');
    });
    
   $('.meal_teller').on('click', function(){
      $('#meal_holder').html('<h2>'+sampleMeal+'</h2>');
    });

  // What other events do you need to bind to make the other pages work?
});
