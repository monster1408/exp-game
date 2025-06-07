const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let game = 1;
let x = 0;
function shooting(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.beginPath();
    ctx.moveTo(175 + x, 225);
    ctx.lineTo(200 + x, 250);
    ctx.lineTo(150 + x, 250);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill(); 
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowRight") {
            x += 1;
        }
    });
}
if(game == 1){
  setInterval(shooting, 30);
}
