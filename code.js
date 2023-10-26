let plusknop = document.getElementById("plusknop")
let minknop = document.getElementById("minknop")
let numtext = document.getElementById("numtext")
let count = 0;

plusknop.onclick = function(){
    if (count < 10){
    count++;}
    else {
        count = 0;
    }
    numtext.textContent = count;


    
    
}

minknop.onclick = function(){
    if (count < 0) {
    count--;}
    else{
        count = 0
    }
    numtext.textContent = count;
}


