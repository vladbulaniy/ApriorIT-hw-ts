let startButton = document.getElementById('startButton');
let messages = document.getElementById('messages');

class DVDPlayer{
    loadDisk():void {
        messages.innerHTML = 'DVD: disk loaded'+ '<br />';
        console.log('DVD: disk loaded');
    };
    play():void {
        messages.innerHTML = messages.innerHTML + 'DVD: play started'+ '<br />';
        console.log('DVD: play started');
    };
}

class DVDScreen{
    turnOnScreen():void {
        messages.innerHTML = messages.innerHTML + 'Screen: screen is on'+ '<br />';
        console.log('Screen: screen is on');
    };
}

class TheaterLight{
    turnOnHeadLight():void {
        messages.innerHTML = messages.innerHTML +  'Light: Head light is on'+ '<br />';
        console.log('Light: Head light is on');
    };
    turnOnBackLight():void {
        messages.innerHTML = messages.innerHTML +  'Light: Back light is on'+ '<br />';
        console.log('Light: Back light is on');
    };
}

class PopcornMaker{
    startMakingFood():void {
        messages.innerHTML = messages.innerHTML +  'Popcorn: food is ready'+ '<br />';
        console.log('Popcorn: food is ready');
    };
}

class HomeTheater{
    start():void {
        setTimeout(() => {
            dvdPlayer.loadDisk()
        }, 1000);
        setTimeout(() => {
            dvdPlayer.play();
        }, 2000);
        setTimeout(() => {
            dvdScreen.turnOnScreen();
        }, 3000);
        setTimeout(() => {
            theaterLight.turnOnHeadLight();
        }, 4000);
        setTimeout(() => {
            theaterLight.turnOnBackLight();
        }, 5000);
        setTimeout(() => {
            popcornMaker.startMakingFood();
        }, 6000);
        setTimeout(() => {
            messages.innerHTML = '<b>'+'Theater: film is started'+ '</b>';
            console.log('Theater: film is started');
        }, 7000);
    };
}

let dvdPlayer = new DVDPlayer();
let dvdScreen = new DVDScreen();
let theaterLight = new TheaterLight();
let popcornMaker = new PopcornMaker();
let homeTheater = new HomeTheater();

startButton.onclick = () => {
    homeTheater.start();
}