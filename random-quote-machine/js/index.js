$(document).ready(function() 
{  
  $('#banner').fadeOut(0.1).fadeIn(3000);       
  $('#body').fadeOut(0.1).delay(1000).fadeIn(3000); 
  $('#datedone').fadeOut(0.1).delay(1000).fadeIn(3000); 
  // default image for the author
  $("#authorImage").css("background-image","url(https://robcm.github.io/Websites/random-quote-machine/res/qouteSim.png)");
     // randomness function!
     function genRand()
     {
        var random = Math.floor(Math.random() * 8) + 1;
            var quoteString;
            // get the quotes which are in the switch statement
            switch(random)
            {
              case 1:
                quoteString = "Reality really is a theatre. Thereâ€™s no other way to describe it. Itâ€™s all so nonsensical, ridiculous and chaotic. -Joe Rogan"
                $("#qoutes").html(quoteString); 
                // Set author image
                $("#authorImage").css("background-image","url(https://robcm.github.io/Websites/random-quote-machine/res/joerogan.jpg)");
              break;
              
              case 2:
                 quoteString = "From my childhood I had been intended for the clergy. This prospect hung like a dark cloud on my mind. -Nikola Tesla"
                $("#qoutes").html(quoteString);
                $("#authorImage").css("background-image","url(https://robcm.github.io/Websites/random-quote-machine/res/tesla.png)");   
              break;
              
              case 3:
                 quoteString = "It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt. -Mark Twain"
                $("#qoutes").html(quoteString);
                $("#authorImage").css("background-image","url(https://robcm.github.io/Websites/random-quote-machine/res/MarkT.png)");   
              break;
                
               case 4:
                 quoteString = "The Universe is under no obligation to make sense to you. -Neil Degrasse"
                $("#qoutes").html(quoteString);
                $("#authorImage").css("background-image","url(https://robcm.github.io/Websites/random-quote-machine/res/NeilDT.png)");   
              break;
                
                case 5:
                 quoteString = "If you expect nothing from anybody, you're never disappointed. -Sylvia Plath"
                $("#qoutes").html(quoteString);
                $("#authorImage").css("background-image","url(https://robcm.github.io/Websites/random-quote-machine/res/SylviaPlath.png)");   
              break;
                
                case 6:
                 quoteString = "Stay committed to your decisions, but stay flexible in your approach. -Tony Robbins"
                $("#qoutes").html(quoteString);
                $("#authorImage").css("background-image","url(https://robcm.github.io/Websites/random-quote-machine/res/TR.png)");   
              break;
                
                case 7:
                 quoteString = "Age does not protect you from love. But love, to some extent, protects you from age. -Anais Nin"
                $("#qoutes").html(quoteString);
                $("#authorImage").css("background-image","url(https://robcm.github.io/Websites/random-quote-machine/res/AnaisN.png)");   
              break;
                
                 case 8:
                 quoteString = "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt"
                $("#qoutes").html(quoteString);
                $("#authorImage").css("background-image","url(https://robcm.github.io/Websites/random-quote-machine/res/EleanorR.png)");   
              break;
              
              default:
                quoteString = " "
                $("#qoutes").html(quoteString); 
                 $("#authorImage").css("background-image","url(https://robcm.github.io/Websites/random-quote-machine/res/qouteSim.png)");
            }
        }
    // button action
    $("#gq").click(function () {
        $("#qoutes").fadeOut("slow", function () {
            genRand();// calling function
            $("#qoutes").fadeIn("slow");
             
        });
    });
});
