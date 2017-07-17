class DVDPlayer{
    constructor(){}
    loadDisk = function () {
        messages.innerHTML = 'DVD: disk loaded'+ '<br />';
        console.log('DVD: disk loaded');
    };
    play = function () {
        messages.innerHTML = messages.innerHTML + 'DVD: play started'+ '<br />';
        console.log('DVD: play started');
    };
}

class Screen{
    constructor(){}
    TurnOnScreen = function () {
        messages.innerHTML = messages.innerHTML + 'Screen: screen is on'+ '<br />';
        console.log('Screen: screen is on');
    };
}

let myScreen = new Screen();

class TheaterLight{
    constructor(){}
    TurnOnHeadLight = function () {
        messages.innerHTML = messages.innerHTML +  'Light: Head light is on'+ '<br />';
        console.log('Light: Head light is on');
    };
    TurnOnBackLight = function () {
        messages.innerHTML = messages.innerHTML +  'Light: Back light is on'+ '<br />';
        console.log('Light: Back light is on');
    };
}

class PopcornMaker{
    constructor(){}
    StartMakingFood = function () {
        messages.innerHTML = messages.innerHTML +  'Popcorn: food is ready'+ '<br />';
        console.log('Popcorn: food is ready');
    };
}

class HomeTheater{
    constructor(){}
    Start = function () {
        setTimeout(function () {
            myDVD.loadDisk()
        }, 1000);
        setTimeout(function () {
            myDVD.play();
        }, 2000);
        setTimeout(function () {
            myScreen.TurnOnScreen();
        }, 3000);
        setTimeout(function () {
            myTheaterLight.TurnOnHeadLight();
        }, 4000);
        setTimeout(function () {
            myTheaterLight.TurnOnBackLight();
        }, 5000);
        setTimeout(function () {
            myPopcornMaker.StartMakingFood();
        }, 6000);
        setTimeout(function () {
            messages.innerHTML = '<b>'+'Theater: film is started'+ '</b>';
            console.log('Theater: film is started');
        }, 7000);
        setTimeout(function () {

        }, 8000);


    };
}

let myDVD = new DVDPlayer();
let myTheaterLight = new TheaterLight();
let myPopcornMaker = new PopcornMaker();
let myHomeTheater = new HomeTheater();


let startButton = document.getElementById('startButton');

startButton.onclick = function () {
    myHomeTheater.Start();
}

let messages = document.getElementById('messages');