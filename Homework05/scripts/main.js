// Create an array of image names that correspond to the image tags
var imageTags = ["image1", "image2", "image3", "image4"];

// Create a variable with the blank image name
var blankImagePath = "images/tree01.jpg";

// Create an empty array for the actual images
var actualImages = [];

// Function to print blank images on page load
function printBlanks() {
    // Call our random image creation function
    createRandomImageArray();
    
    // Iterate through the image tag ids and set the source to the blank image path
    for (var i = 0; i < imageTags.length; i++) {
        document.getElementById(imageTags[i]).src = blankImagePath;
    }
}

// Function to create an array of random actual images
function createRandomImageArray() {
    // Array of actual images
    var actualImagePath = ["images/tree01.jpg", "images/tree02.jpg", "images/tree03.jpg"];
    
    // Array to keep track of the number of times each image is added
    var count = [0, 0, 0, 0, 0];

    // Loop until the actual images array is full
    while (actualImages.length < 4) {
        // Get a random number between 0 and the total number of images
        var randomNumber = Math.floor(Math.random() * actualImagePath.length);
        
        // If the image has been added less than twice, add it to the actual images array
        if (count[randomNumber] < 2) {
            actualImages.push(actualImagePath[randomNumber]);
            // Increment the count for the chosen image
            count[randomNumber]++;
        }
    }
}

// Function to flip the image when clicked
function flipImage(number) {
    // Set the image source to the corresponding actual image
    document.getElementById(imageTags[number]).src = actualImages[number];
}