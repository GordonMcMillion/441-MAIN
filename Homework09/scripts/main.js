let computer = {
    "manufacturer" : "Santa Cruz",
    "model" : "5010",
    "owner" : {
        "firstName" : "Bob",
        "lastName" : "Jones"
    },
    "sizes" : [
        "small",
        "medium",
        "large",
        "x-large"
    ]
}

$(function () {
$("button").click(function () {
    showComputerInfo();
});

});

function showcomputerInfo()
{
    $("#computerInformation").html("Manufacturer: " + computer.manufacturer 
    + "<br>Model:" + computer.model + "<br>First Name:" + computer.owner.firstName + "<br>Last Name:" 
    + computer.owner.lastName + "<br>Sizes Available:<br>" +
    computer.sizes[0] + "<br>" + computer.sizes[1] + "<br>" + computer.sizes[2] + "<br>" + computer.sizes[3]);
}