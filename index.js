
// 1- How we can access HTML elements using DOM in javascript?
// This is the way to access all HTML elements using DOM.
let heading = document.getElementById("h1");
let headings = document.getElementsByClassName("hh1");
let headin  = document.getElementsByTagName("p");
let head = document.querySelector(".hh1")
let hea = document.querySelectorAll("h1")

// 2- What are the activities that we can perform using DOM?
// We can performs All activties that we can use in CSS.
// Example
heading.style.border = "5px blue solid"
headings[0].style.color = "Yellow"
headings[1].style.color = "blue"
headings[1].style.textAlign = "center"

// E.T.C.........
// 3- What are the event-listners in DOM?
let myButton = document.getElementById('myButton');
myButton.style.padding = "20px"
myButton.style.backgroundColor = "blue"
myButton.style.color = "red"
myButton.style.textAlign = "center"
myButton.addEventListener('click', function() {
  alert('Button clicked!');
});
