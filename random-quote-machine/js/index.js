$(document).ready(function() 
{  
  $('#banner').fadeOut(0.1).fadeIn(3000);       
  $('#body').fadeOut(0.1).delay(1000).fadeIn(3000); 
  $('#datedone').fadeOut(0.1).delay(1000).fadeIn(3000); 
  // Random quote at page load as well!
  genRand();
  
     // randomness function!
     function genRand()
     {
        var random = Math.floor(Math.random() * 11) + 1;
            var quoteString;
            // get the quotes which are in the switch statement
            switch(random)
            {
              case 1:
                quoteString = "Reality really is a theatre. There’s no other way to describe it. It’s all so nonsensical, ridiculous and chaotic.  <br> -Joe Rogan"
                $("#qoutes").html(quoteString); 
                // Set author image
                $("#authorImage").css("background-image","url(https://robcm.github.io/Websites/random-quote-machine/res/joerogan.jpg)");
              break;
              
              case 2:
                 quoteString = "From my childhood I had been intended for the clergy. This prospect hung like a dark cloud on my mind.  <br> -Nikola Tesla"
                $("#qoutes").html(quoteString);
                $("#authorImage").css("background-image","url(https://robcm.github.io/Websites/random-quote-machine/res/tesla.png)");   
              break;
              
              case 3:
                 quoteString = "It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt.  <br> -Mark Twain"
                $("#qoutes").html(quoteString);
                $("#authorImage").css("background-image","url(https://robcm.github.io/Websites/random-quote-machine/res/MarkT.png)");   
              break;
                
              case 4:
                 quoteString = "The Universe is under no obligation to make sense to you.  <br> -Neil Degrasse"
                $("#qoutes").html(quoteString);
                $("#authorImage").css("background-image","url(https://robcm.github.io/Websites/random-quote-machine/res/NeilDT.png)");   
              break;
                
              case 5:
                 quoteString = "If you expect nothing from anybody, you're never disappointed.  <br> -Sylvia Plath"
                $("#qoutes").html(quoteString);
                $("#authorImage").css("background-image","url(https://robcm.github.io/Websites/random-quote-machine/res/SylviaPlath.png)");   
              break;
                
              case 6:
                 quoteString = "Stay committed to your decisions, but stay flexible in your approach.  <br> -Tony Robbins"
                $("#qoutes").html(quoteString);
                $("#authorImage").css("background-image","url(https://robcm.github.io/Websites/random-quote-machine/res/TR.png)");   
              break;
                
              case 7:
                 quoteString = "Age does not protect you from love. But love, to some extent, protects you from age.  <br> -Anais Nin"
                $("#qoutes").html(quoteString);
                $("#authorImage").css("background-image","url(https://robcm.github.io/Websites/random-quote-machine/res/AnaisN.png)");   
              break;
                
              case 8:
                 quoteString = "The future belongs to those who believe in the beauty of their dreams.  <br> -Eleanor Roosevelt"
                $("#qoutes").html(quoteString);
                $("#authorImage").css("background-image","url(https://robcm.github.io/Websites/random-quote-machine/res/EleanorR.png)");   
              break;
			  
			  case 9:
                 quoteString = "I can't jump high, so I jump from high places.  <br> -Mick Foley"
                $("#qoutes").html(quoteString);
                $("#authorImage").css("background-image","url(https://robcm.github.io/Websites/random-quote-machine/res/MikeF.png)");   
              break;
			  
			  case 10:
                 quoteString = "Nothing in all the world is more dangerous than sincere ignorance and conscientious stupidity. <br>- Martin Luther King, Jr."
                $("#qoutes").html(quoteString);
                $("#authorImage").css("background-image","url(https://robcm.github.io/Websites/random-quote-machine/res/MLK.png)");   
              break;
			  
			   case 11:
                 quoteString = "Everything comes to he who waits... and I have waited so very long for this moment. <br> -Skeletor"
                $("#qoutes").html(quoteString);
                $("#authorImage").css("background-image","url(https://robcm.github.io/Websites/random-quote-machine/res/Skeletor.png)");   
              break;
              
              default:
                // Nothing!
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
