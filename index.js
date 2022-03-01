// Write your code here!
// const main = document.querySelector('main');
// main.remove();

// const newHeader = document.createElement('h1');
// document.body.append(newHeader);
// newHeader.id = "victory";

// newHeader.innerHTML = "Amer Mall is the champion!";
// newHeader.className = "victory";
// test not working....


// Using solution...
/* Enter the code to remove the node element here */
document.querySelector("main#main").remove();

/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Amer Mall is the champion!";
newHeader.className = "victory";