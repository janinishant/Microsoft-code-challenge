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

$("#recognize_form").on('submit', function(e) {
    e.preventDefault();

    $("#username").addClass("hidden");

    $.ajax({
        method: "POST",
        url: "/api/v1/identify-profile",
        dataType: "json",
        data: JSON.stringify({
            url: $("#url").val()
        }),
        contentType: "application/json",
        success: function(response, status, req) {
            $("#username")
                .html('<div class="alert alert-info" role="alert">Hello '+response.name+'!</div>')
                .removeClass("hidden");
        },
        error: function(req, status, error) {
            $("#username")
                .html('<div class="alert alert-danger" role="alert">There was an error. Try again!</div>')
                .removeClass("hidden");
        }
    })

});