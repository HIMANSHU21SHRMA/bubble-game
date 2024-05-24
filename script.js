let timer = 60;
let hitnum = " ";
let score = 0;
function getHit() {
    hitnum = Math.floor(Math.random()*10);
    document.querySelector(".hit-valu").textContent = hitnum
}
function makingBubble(){
    let bubble = "";
 for(let i = 0; i<=113; i++){
    let randomNum = Math.floor(Math.random()*10)
    bubble += `<div class="bubble">
    ${randomNum}
   </div>`
 }
 document.querySelector(".page").innerHTML = bubble;
}
function runTimer(){
  let timeval = setInterval(() => {
    if(timer>0){
        timer--;
    document.querySelector(".time-valu").textContent = timer
    }
    else{
        clearInterval(timeval)
        let mypage = document.querySelector(".page")
        mypage.innerHTML = `<h1>GAME OVER your score is ${score}</h1>`;
        mypage.style.backgroundImage = 'linear-gradient(135deg, #9ef9f3d3 , #2144ce)';
    }
    
  }, 1000);

}
function increseScore() {
    score += 10
    document.querySelector(".score-valu").textContent = score    
}
let page = document.querySelector(".page")
page.addEventListener("click",function (dets) {
    let bubbleValu = (Number(dets.target.textContent));
    if (bubbleValu === hitnum) {
        increseScore();
        getHit();
        makingBubble();
    }
})

if (score === hitnum) {
    increseScore();
    getHit();
    makingBubble();
};
getHit()
runTimer()
makingBubble()

