/**
 * Created by canastas on 14/11/15.
 */

$("#photo_url")
    .on('change', function() {
        var url = $(this).val();

        if (url == "") {
            $("#img").addClass("hidden");
        }
        else {
            $("#img")
                .removeClass("hidden")
                .attr("src", url);
        }
    })
    .bind('paste', function() {
        var url = $(this).val();

        if (url == "") {
            $("#img").addClass("hidden");
        }
        else {
            $("#img")
                .removeClass("hidden")
                .attr("src", url);
        }
    });

$("#register_form").on('submit', function(e) {
    e.preventDefault();

    $("#message").addClass("hidden");

    $.ajax({
        method: "POST",
        url: "/api/v1/add-profile",
        data: JSON.stringify({
            url: $("#photo_url").val(),
            name: $("#username").val()
        }),
        contentType: "application/json",
        success: function(response, status, req) {
            $("#message")
                .html('<div class="alert alert-info" role="alert">You have been registered :)</div>')
                .removeClass("hidden");
        },
        error: function(req, status, error) {
            $("#message")
                .html('<div class="alert alert-danger" role="alert">There was an error while trying to register you. Please try again</div>')
                .removeClass("hidden");
        }
    })

});