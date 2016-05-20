$(document).ready(function() {
    $.ajax({
        url: "https://api.github.com/users/omoragbon"
    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.type);
       $('.gists').append(data.public_repos);
       $('.login').append(data.login);
       $(".date_of_creation").append(data.created_at);
    });
});