$(document).ready(function () {
    $("button").click(function () {
        $("#computerInformation").load("data/computerInfo.txt", fadeText);
    });
});

function fadeText()
{
    $("#computerInformation").fadeOut("slow").fadeIn("slow");
}