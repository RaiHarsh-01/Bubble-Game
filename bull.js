
function makebubble(){
var ball = " ";
for(var i=1; i<=119; i++){
    var rn = Math.floor(Math.random()*10);//rn var is used to get random variable integer type.
    ball += `<div id="ball">${rn}</div>`;//imp point when u use the js var between html code then u use ${}.
}
document.querySelector("#bounce").innerHTML = ball;
}

var timer = 60;
function runtimmer(){
  setInterval(function(){
    if(timer>=0){
    document.querySelector("#timerval").textContent = timer;
    timer--;} 
    else{
        clearInterval(timer);
        document.querySelector("#bounce").innerHTML = "Game Over";
    } 
}, 1000);
}

var hiter=0;
function hitball(){
    hiter = Math.floor(Math.random()*10);
    document.querySelector("#Hit").textContent=hiter;
}

var score = 0;
function scoreball(){
    score += 10;
    document.querySelector("#Score").textContent = score;
}

document.querySelector("#bounce")
.addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hiter){
        scoreball();
        makebubble();
        hitball();
    }
})

hitball();
makebubble();
runtimmer();