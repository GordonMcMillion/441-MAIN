$(document).ready(function () {
    $("button").click(function () {
        $("#computerInformation").load("data/computer.json", function(responseText){
            var computer = JSON.parse(responseText);
            $("#computerInformation").html("Manufacturer: " + computer.manufacturer 
        + "<br>Model:" + bike.model + "<br>First Name:" + computer.owner.firstName + "<br>Last Name:" 
        + computer.owner.lastName + "<br>Sizes Available:<br>" +
        computer.sizes[0] + "<br>" + computer.sizes[1] + "<br>" + computer.sizes[2] + "<br>" + computer.sizes[3]);
        });
    });
});

/* function fadeText()
{
    $("#computerInformation").fadeOut("slow").fadeIn("slow");
}
*/