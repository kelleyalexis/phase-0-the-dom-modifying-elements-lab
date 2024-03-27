const mainElement = document.querySelector('main#main');
mainElement.parentNode.removeChild(mainElement);

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.textContent = "Linda is the champion"