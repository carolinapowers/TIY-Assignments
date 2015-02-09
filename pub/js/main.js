$(document).ready(function() {
               
                var username = "carolinapowers";
                 
               
               $.get("https://api.github.com/users/" + username, function( data ) {
                   
                  $('button').click(function comment() {
   
$.post("https://api.github.com/repos/TheIronYard--Orlando/FEE--2015--SPRING/issues/259/comments?access_token=ac9b619759428af58ba5a5758761cb0cd75fe3ed", JSON.stringify({"body": $(".form-control").val()}), $(".form-control").val(""));
}); 
                  $('figure').find('img').attr("src", data.avatar_url);
                  $('figcaption').find('strong').append(data.name);
                  $('figcaption').append(data.login);
                    
                   if  (data.company == "") {
                        $("li").remove('.company');
                      } else{
                        $(".company").append(data.company);
                      }
                   if  (data.location == "") {
                        $("li").remove('.locations');
                      } else{
                        $(".locations").append(data.location);
                      }
                   if  (data.email == "") {
                        $("li").remove('.email');
                      } else{
                        $(".email").find('a').append(data.email);
                      }
                    if (data.blog == "") {
                        $("li").remove(".blog");
                      } else {
                        $(".blog").find('a').append(data.blog);
                      }
                   var Join = "Joined on";
                   var date = $.format.date(data.created_at, "MMM d, yyyy");
                  $(".created-at").append(Join + " " + date);
                  $('#followers').append(data.followers);  
                  $('#following').append(data.following); 
                }, "json" );
               
            $.get("https://api.github.com/users/" + username+ "/repos", function (repoArray) {
               $.each(repoArray, function (index, item) {
                var ulist = $(".ul-repoTa-" + index);
                ulist.find('a').append(item.name);
                ulist.find('p').append(item.description);
                var Updated = "Updated on";
                var updatedDate = $.format.date(item.updated_at, "MMM d, yyyy");   
                ulist.find('date').append(Updated + " " + updatedDate);   
                
               }); 
            }, "json" );  
            
             
             $.get("https://api.github.com/users/" + username + "/starred", function (starredArray){
                 
                 $.each(starredArray, function (index, starred) {
                     var starredList = $(".pop-repo-" + index);
                     starredList.find('a').append(starred.name);
                     starredList.find('p').append(starred.description);
                     if (starred.stargazers == "") {
                         $(".stars").remove('.octicon-star');
                    } else {
                     starredList.find('.stars').append(starred.stargazers_count);
                    }
                });    
                 
             }, "json");
             
                 $.get("https://api.github.com/users/" + username + "/events/public", function (publicArray){
                 if ( publicArray.length == 0 )
                 {
                     $(".public-repo").append(username + " doesn’t have any public events to show.").addClass("test");
                 } else
                 
                     $.each(publicArray, function (index, activity) {
                     var listItem = $("<li class='pubList'></li>");
                         
                     $('<date class="pubDate">' + $.format.prettyDate(activity.created_at) + '</date><br>').appendTo(listItem);
                         
                     $('<a href>' + activity.actor.login + '</a>' + " " + "pushed to " + " " + '<a href>' + activity.payload.ref + '</a>' + " at " + '<a href>' + activity.repo.name + '<a><br>').appendTo(listItem);
                         
                    //var head = activity.payload.head.slice(0,6);     
                    $('<img class="pubImg" src=' + activity.actor.avatar_url + '><span>' + " " + (activity.payload.head) + " " + activity.message + '</span><hr>').appendTo(listItem);    
                     
                    $(".public-repo").append(listItem);
                    
                });  
                 
             }, "json");
             
                 
                 
            
             
             
             });
            