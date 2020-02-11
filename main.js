function imagize (id, url) {
    const placeForImage = document.querySelector('#' + id);
    placeForImage.src = url;
    placeForImage.style.height = "300px";
}

imagize('image-1', 'https://memesfeel.com/wp-content/uploads/2019/05/The-Burger-Index-1024x761.jpg');
imagize('image-2', 'https://i.kym-cdn.com/photos/images/newsfeed/000/367/797/c34.jpg');
imagize('image-3', 'https://media.makeameme.org/created/whoa-sryk7n.jpg');

function lineThroughLi () {
    const liLineThrough = document.querySelector('#arguments').firstElementChild;
    liLineThrough.style.textDecoration = 'line-through';
}

lineThroughLi();

function rmLiLast() {
    const liRm = document.querySelector('#arguments').lastElementChild;
    liRm.remove();
}

rmLiLast();

function addToUl (textForLi) {
    
    const node = document.createElement('li');
    // const textNode = document.createTextNode(textForLi);
    // node.appendChild(textNode);
    node.innerText = textForLi;
    document.querySelector('#arguments').appendChild(node);
}

addToUl('Test Message');
addToUl('This THE SECONDEST BESTEST aPPEND EVAR');
addToUl('WDI is the greatest')

function addImgToUl (url) {
    const imgAdditiveVariable = document.createElement('img');
    imgAdditiveVariable.src = url;
    imgAdditiveVariable.style.height = '300px';
    document.querySelector('#arguments').appendChild(imgAdditiveVariable);
}

addImgToUl('https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg')
