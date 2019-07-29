//NOT CURRENT JS
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySRC = myImage.getAttribute('src');
    if(mySRC === 'Images/coffee.jpg') {
        myImage.setAttribute('src', 'Images/skyline.jpg');
    }
    else{
        myImage.setAttribute('src','Images/coffee.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to My Site,' + ' ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to My Site,' + ' ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

