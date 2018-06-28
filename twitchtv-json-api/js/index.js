/* Using jQuery for API function */
$(document).ready(function()
{
  /* Using an array for users/channels */
  var channels = ["ESL_SC2", "OgamingSC2", "freecodecamp", "Ninja","xeya_tv", "khloey28", "SkipNhO", "Ko0416", "KatGunn", "Lauralania","TimTheTatman"];  
/* Function for who is online */ 
function userOnline(channelName)
{
    $.getJSON("https://wind-bow.glitch.me/twitch-api/channels/"+channelName+"", function(json){
     
    $("#output").prepend("<div id=cell class='row well'><div class='col'><a target=# href="+json.url+"><img id=userImage height=100px width=100px  src="+json.logo+"></a></div><div class='col'>"+"<a target=# id=username href="+json.url+">"+json.display_name+" </br>" + json.game+ "</a>"+" </br>" +"<h7>"+json.status+"</h7>" +"</div><div class='col'><img id=online height=55px width=55px  src=https://cdn0.iconfinder.com/data/icons/connection/128/icon-19.png></div></div>"); 
    });
  }
/* Function for who is offline */  
function userOffline(channelName)
{
    $.getJSON("https://wind-bow.glitch.me/twitch-api/channels/"+channelName+"", function(json){
     
    $("#output").prepend("<div id=cell class='row well'><div class='col'><img id=userImage height=100px width=100px  src="+json.logo+"></div><div class='col'>"+"<a target=# id=username href="+json.url+">"+json.display_name+"</a>"+"</div><div class='col'><img id=offline height=55px width=55px  src=https://cdn0.iconfinder.com/data/icons/connection/128/icon-12.png></div></div>");  
  });
}
  
function channelsCheck(channelName)
{
   $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/"+channelName+"",function(json){
     if(json.stream == null)
     {
       userOffline(channelName);// Calling function!
     }
     else{
       userOnline(channelName);
     }
   })
 }
 for (i=0; i < channels.length; i++){
   channelsCheck(channels[i])
 }
});
