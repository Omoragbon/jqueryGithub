
$(function(){
        		$("#gtbutton").on("click", function(e){
        			e.preventDefault();
        			$(function() {
    $.ajax({
    	var username = $('username').val();
       var url: "6569https://api.github.com/users/" + username;
       requestJSON( requri, function()
       	)

    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.type);
       $('.gists').append(data.public_repos);
       $('.login').append(data.login);
       $(".date_of_creation").append(data.created_at);
    });
});
        		

        		})
        	})

