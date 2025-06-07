game = 1;
function shooting(){
    const x = 0;
    ctx.beginPath();
    ctx.moveTo(150 + x, 200);
    ctx.lineTo(200 + x, 250);
    ctx.lineTo(100 + x, 250);
    ctx.closePath();
    ctx.fillStyle = "green";
    ctx.fill(); 
    if(event.key){
        x += 2;
    }
}

if(game == 1){
  setInterval(Shooting, 100);
}
