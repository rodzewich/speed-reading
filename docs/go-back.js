const backElement = document.createElement('a');
backElement.addEventListener('click', (event) => {
    event.stopPropagation();
});
backElement.href = '../';
backElement.appendChild(document.createTextNode('Go HOME'));
backElement.style.color = 'black';
backElement.style.textDecoration = 'none';
backElement.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
backElement.style.position = 'absolute';
backElement.style.left = '0';
backElement.style.top = '0';
backElement.style.fontSize = '20px';
backElement.style.padding = '10px';
document.body.appendChild(backElement);