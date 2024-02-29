s
var imageNames = ["image1", "image2", "image3", "image4"];

// Path to the blank image
var blankImagePath = "images/snail.jpg";

// Variables to store the index of clicked images
var firstNumber = -1;
var secondNumber = -1;

// Player object stored as JSON
var player = {"firstname":"", "lastname":""};

// Array to store actual image paths
var actualImages = [];

// Function to initialize the grid with blank images
function printBlanks() {
    createRandomImageArray();
    for(var i = 0; i < imageNames.length; i++) {
        document.getElementById(imageNames[i]).src = blankImagePath;
    }
}

// Function to randomly assign actual images to the grid
function createRandomImageArray() {
    var actualImagePath = ["images/whale.jpg", "images/tiger.jpg"];
    var count = [0,0];
    while(actualImages.length < 4) {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        if(count[randomNumber] < 2) {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber]++;
        }
    }
}

// Function to flip the image when clicked
function flipImage(number) {
    if(firstNumber >= 0) {
        secondNumber = number;
        document.getElementById(imageNames[number]).src = actualImages[secondNumber];
    } else if(firstNumber < 0) {
        firstNumber = number;
        document.getElementById(imageNames[firstNumber]).src = actualImages[firstNumber];
    }

    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0) {
        setTimeout(imagesDisappear, 1000);
    } else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0) {
        firstNumber = -1;
        secondNumber = -1;
    }
}

// Function to hide images if they don't match
function imagesDisappear() {
    document.getElementById(imageNames[firstNumber]).src = blankImagePath;
    document.getElementById(imageNames[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

// Function to add player information to local storage
function addToPlayer() {
    var firstName = document.getElementById("txtFirstName").value;
    player.firstname = firstName;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "HWExample.html";
}

// Function to retrieve player information from local storage
function playerInfo() {
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
}