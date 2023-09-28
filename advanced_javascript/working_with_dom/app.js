let paragraphElement = document.querySelector("p");

function changeParagraphText() {
  paragraphElement.textContent = "clicked";
}

paragraphElement.addEventListener("click", changeParagraphText);
