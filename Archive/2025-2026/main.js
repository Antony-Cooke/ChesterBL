$(document).ready(function () {

    // jQuery methods go here...
    $("#WTF").hide();
    $("#DCF").hide();

    $('#btn1').click(function () {
        $("#WTF").toggle();
    });

    $('#btn2').click(function () {
        $("#DCF").toggle();
    });
});