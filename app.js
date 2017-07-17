var DVDPlayer = (function () {
    function DVDPlayer() {
        this.loadDisk = function () {
            messages.innerHTML = 'DVD: disk loaded' + '<br />';
            console.log('DVD: disk loaded');
        };
        this.play = function () {
            messages.innerHTML = messages.innerHTML + 'DVD: play started' + '<br />';
            console.log('DVD: play started');
        };
    }
    return DVDPlayer;
}());
var Screen = (function () {
    function Screen() {
        this.TurnOnScreen = function () {
            messages.innerHTML = messages.innerHTML + 'Screen: screen is on' + '<br />';
            console.log('Screen: screen is on');
        };
    }
    return Screen;
}());
var TheaterLight = (function () {
    function TheaterLight() {
        this.TurnOnHeadLight = function () {
            messages.innerHTML = messages.innerHTML + 'Light: Head light is on' + '<br />';
            console.log('Light: Head light is on');
        };
        this.TurnOnBackLight = function () {
            messages.innerHTML = messages.innerHTML + 'Light: Back light is on' + '<br />';
            console.log('Light: Back light is on');
        };
    }
    return TheaterLight;
}());
var PopcornMaker = (function () {
    function PopcornMaker() {
        this.StartMakingFood = function () {
            messages.innerHTML = messages.innerHTML + 'Popcorn: food is ready' + '<br />';
            console.log('Popcorn: food is ready');
        };
    }
    return PopcornMaker;
}());
var HomeTheater = (function () {
    function HomeTheater() {
        this.Start = function () {
            setTimeout(function () {
                myDVD.loadDisk();
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
                messages.innerHTML = '<b>' + 'Theater: film is started' + '</b>';
                console.log('Theater: film is started');
            }, 7000);
        };
    }
    return HomeTheater;
}());
var myDVD = new DVDPlayer();
var myScreen = new Screen();
var myTheaterLight = new TheaterLight();
var myPopcornMaker = new PopcornMaker();
var myHomeTheater = new HomeTheater();
var startButton = document.getElementById('startButton');
var messages = document.getElementById('messages');
startButton.onclick = function () {
    myHomeTheater.Start();
};
//# sourceMappingURL=app.js.map