// Paste the code below into your HTML file.
// Take the contents of the sonnet div and place it in a variable.
// Find and output the starting position of the word "orphans".
// Output the number of characters in the sonnet.
// Replace the first occurance of the string "winter" with "yuletide".
// Replace all occurances of the string "the" with "a large".
// Set the content of the sonnet div with the new string.var poem = 

var div = document.getElementById("sonnet");
    // this targets the element that has the ID "sonnet"
var sonnet = div.innerHTML;
    // a variable has been created to hold the contents of the 
console.log(sonnet);

// find where in the paragraph the word orphans

console.log(sonnet.indexOf("orphans")); // .indexOf finds the first occurance of the string in the (). it doesn't have to be a string. put sonnet var before .indexOf because it needs to know where to look.

console.log(div.length); // not works

var phrase = sonnet;
console.log(phrase.length);  // this works

div.innerHTML = div.innerHTML.replace("winter", "yuletide");
console.log(newPhrase); 

