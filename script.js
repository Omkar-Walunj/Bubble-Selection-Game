var timer=60;
var newhitno=0 
var score=0;

function addscore(){
    score+=10;
    document.querySelector("#newscore").textContent= score;
}

document.querySelector("#pagebottom").addEventListener("click", function(dets){
    var clickednum= (Number(dets.target.textContent))
    console.log(clickednum)

    if(clickednum==newhitno){
        addscore();
        bubblemaker();
        newhit();
    }
})


function newhit(){
    newhitno= Math.floor(Math.random()*10)
    document.querySelector("#numberhit").textContent= newhitno;
}

function bubblemaker(){
    var cluuter="";
    for(var i=1; i<=100; i ++){
        var newmath= Math.floor(Math.random()*10)
        cluuter+=`<div class="bubbles">${newmath}</div>`
    }
    
    document.querySelector("#pagebottom").innerHTML= cluuter

}

function reducetime(){
    var timeint = setInterval(function(){
        if (timer>0){
            timer--;
            document.querySelector("#lowtime").textContent = timer
        }
        else{
            clearInterval(timeint);
            document.querySelector("#pagebottom").innerHTML="<h1>Game Over</h1>"
        }
    },1000);
}

newhit();
reducetime();
bubblemaker();