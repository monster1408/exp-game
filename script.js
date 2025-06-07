const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

game = 1;
x = 0;
function shooting(){
    ctx.beginPath();
    ctx.moveTo(150 + x, 200);
    ctx.lineTo(200 + x, 250);
    ctx.lineTo(100 + x, 250);
    ctx.closePath();
    ctx.fillStyle = "green";
    ctx.fill(); 
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowRight") {
            x += 2;
        });
    }
}
if(game == 1){
  setInterval(Shooting, 100);
}
