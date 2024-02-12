let homePointEl = document.getElementById("home-counter");
let guestPointEl = document.getElementById("guest-counter");


let homeCounter = 0;
let guestCounter = 0;

function homeIncrement(){
    document.getElementById("increment-1").onclick = function(){
        homeCounter += 1;
        homePointEl.textContent = homeCounter;
    };
    document.getElementById("increment-2").onclick = function(){
        homeCounter += 2;
        homePointEl.textContent = homeCounter;
    };
    document.getElementById("increment-3").onclick = function(){
        homeCounter += 3;
        homePointEl.textContent = homeCounter;
    };
   
}
function guestIncrement(){
    document.getElementById("g-increment-1").onclick = function(){
        guestCounter += 1;
        guestPointEl.textContent = guestCounter;
    };
    document.getElementById("g-increment-2").onclick = function(){
        guestCounter += 2;
        guestPointEl.textContent = guestCounter;
    }
    document.getElementById("g-increment-3").onclick = function(){
        guestCounter += 3;
        guestPointEl.textContent = guestCounter;
    };
   
}

function reset(){
    document.getElementById("new-game").onclick = function(){
        homeCounter = 0;
        guestCounter = 0;
        guestPointEl.textContent = guestCounter;
        homePointEl.textContent = homeCounter;
    }
}