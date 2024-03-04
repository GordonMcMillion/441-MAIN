const myViewFinderArray = [];

// Define the ViewFinder class
class ViewFinder {
    // Constructor for creating ViewFinder objects with a title
    constructor(title) {
        this.title = title;
    }

    // Method to convert object to string representation
    toString() {
        return "Title: " + this.title;    
    }

    // Getter method to retrieve only the title
    get theTitle() {
        return this.title;
    }
}

// Function to initialize the array with ViewFinder objects
function initializeArray() {
    // Create ViewFinder objects and add them to the array
    const myViewFinder = new ViewFinder("Whale");
    const myViewFinder1 = new ViewFinder("Snail");
    myViewFinderArray.push(myViewFinder, myViewFinder1);
}

// Function to access information from a random object in the array and display it
function accessInformation() {
    // Generate a random index to select a random object from the array
    const randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    // Display the title of the randomly selected object
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
}