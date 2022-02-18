function ageInMy() {
    var birthDay = prompt('What is your age?');
    var ageInDays = (2021 - birthDay) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("You are " + ageInDays + " days year old!");
    h1.setAttribute('id', 'ageInMy');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInMy').remove();
}

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "static/images/cute-kitty-best-kitty.gif";
    div.appendChild(image);
}
var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(ButtonThingy) {
    if (ButtonThingy.value === 'red'){
        buttonsRed();
    } else if (ButtonThingy.value === 'green') {
        buttonsGreen();
    } else if (ButtonThingy.value === 'reset') {
        buttonColorReset();
    } else if (ButtonThingy.value === 'random') {
        randomColors();
    }
}

function buttonsRed(){
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset(){
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    let choices = ['btn-primary', 'btn-warning', 'btn-success', 'btn-secondary', 'btn-danger', 'btn-dark']

    for (let i = 0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 6);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
    }
}











