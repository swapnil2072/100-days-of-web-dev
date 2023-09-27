document.body.children[1].children[0].href = "https://google.com";

// console.dir(document);
// alert();
// window.alert();

// create new element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "google";
// get accessed to parent element of that should hold the new element

let firstParagraph = document.querySelector("p");

//insert the new element  into parent element content

firstParagraph.append(newAnchorElement);
