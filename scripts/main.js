let x = document.createElement('div');
x.classList.add('btn');
x.classList.add('testing');

x.innerHTML = 
'<p>this is my first element</p>';
document.querySelector('.container').appendChild(x);

console.log(document.querySelector('.container'))

let newParagraph = document.createElement("p");

// Add text content to the paragraph
newParagraph.innerHTML = "This is the new text element.";

// Add a class to the new paragraph
newParagraph.classList.add("new-text-element");

// Find the container element by its class
let container = document.querySelector(".container");

// Append the new paragraph to the container
container.appendChild(newParagraph);
