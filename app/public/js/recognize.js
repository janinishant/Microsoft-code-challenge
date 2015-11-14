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



});