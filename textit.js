var prompt = require('prompt-sync')();

// Take input from the user
var text = prompt("Enter any text you want to display:\n");

// Ensure the input is not empty
if (!text.trim()) {
    console.log("Text cannot be empty. Exiting.");
} else {
    // Take input for the number of times to display the text
    var numWords = parseInt(prompt('Enter how many times to display: '));

    // Check if numWords is a valid positive integer
    if (isNaN(numWords) || numWords <= 0) {
        console.log("Please enter a valid positive integer for the number of times to display.");
    } else {
        // Display the text the specified number of times
        for (var i = 0; i < numWords; i++) {
            console.log(text);
        }
    }
}
