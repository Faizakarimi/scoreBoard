let homePointEl = document.getElementById("home-point");
let guestPointEl = document.getElementById("guest-point");


let point = 0;

function homeIncrement(){
    document.getElementById("increment-1").onclick = function(){
        point = point + 1;
        homePointEl.textContent = point;
    };
    document.getElementById("increment-2").onclick = function(){
        point += 2;
        homePointEl.textContent = point;
    };
    document.getElementById("increment-3").onclick = function(){
        point += 3;
        homePointEl.textContent = point;
    };
   
}
function guestIncrement(){
    document.getElementById("g-increment-1").onclick = function(){
        point = point + 1;
        guestPointEl.textContent = point;
    };
    document.getElementById("g-increment-2").onclick = function(){
        point += 2;
        guestPointEl.textContent = point;
    }
    document.getElementById("g-increment-3").onclick = function(){
        point += 3;
        guestPointEl.textContent = point;
    };
   
}

function reset(){
    document.getElementById("new-game").onclick = function(){
        point = 0;
        guestPointEl.textContent = point;
        homePointEl.textContent = point;
    }
}