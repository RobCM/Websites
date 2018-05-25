// jQuery function to get text data and search using wikipedia's API!
$(document).ready(function(){
  $("#Search").click(function(){// Button for search
    var SearchBar =$("#SearchBar").val();
   $.ajax({
     url:'https://en.wikipedia.org/w/api.php?action=opensearch&search='+ SearchBar +'&namespace=0&format=json',
      
     dataType:'jsonp',
     type:'POST',
     
     success:function(data)
     {
       $("#output").fadeOut(0.1).fadeIn(2000);// Fade in animation of data!      
       $("#output").html('');
       for(var i = 0; i < data[1].length; i++)
       { 
        $("#output").prepend('<a href='+data[3][i]+'>'+data[1][i]+ '</a><p>'+ data[2]  [i]+'</p>');
       }
       $("#SearchBar").val('');// search data
     }, 
     error:function(erroralert){
       alert("Sorry! something went wrong |Refresh page|");// just incase something went work catch error
     },    
    });
  });
  //
  $("#Rand").click(function(){
     // Get random article page from wikipedia and go to link
     window.location = "https://en.wikipedia.org/wiki/Special:Random";
  });
});