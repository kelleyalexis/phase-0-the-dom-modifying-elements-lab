const mainElement = document.querySelector('main#main');

if (mainElement) {
    mainElement.parentNode.removeChild(mainElement);
  }

const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.textContent = "Kelley is the champion";