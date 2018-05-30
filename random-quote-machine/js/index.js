$(document).ready(function() {
  $('#banner').fadeOut(0.1).fadeIn(3000);
  $('#body').fadeOut(0.1).delay(1000).fadeIn(3000);
  $('#datedone').fadeOut(0.1).delay(1000).fadeIn(3000);
  // default image for the author
  $('#authorImage').css('background-image', 'url(https://robcm.github.io/Websites/random-quote-machine/res/qouteSim.png)');
  // randomness function!

  function genRand() {
    var randomIndex = Math.floor(Math.random() * QUOTES.length);
    var quote = QUOTES[randomIndex];
    $('#qoutes').html(quote.text);
    $('#authorImage').css('background-image', 'url(' + quote.image + ')');
  }
  
  // button action
  $("#gq").click(function() {
    $("#qoutes").fadeOut("slow", function() {
      genRand(); // calling function
      $("#qoutes").fadeIn("slow");
    });
  });
});
