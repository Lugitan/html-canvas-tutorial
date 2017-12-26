//Cache a reference to the html element
var canvas = document.getElementById('canvas');

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

var ctx = canvas.getContext('2d');

//(x, y, width, height)
ctx.fillStyle = "green";
ctx.fillRect(50, 50, 100, 100);

ctx.strokeStyle = "red";
ctx.strokeRect(200, 50, 100, 100)

ctx.fillStyle = "blue";
ctx.beginPath();
//(x, y, radius, begin_circle, end_circle)
ctx.arc(400, 100, 50, 0, Math.PI * 2);
ctx.fill();

ctx.strokeStyle = "purple";
ctx.beginPath();
ctx.arc(550, 100, 50, 0, Math.PI * 2);
ctx.stroke();

ctx.fillStyle = "brown";
ctx.beginPath();
ctx.arc(700, 100, 50, 0, Math.PI / 2);
ctx.lineTo(700, 100);
ctx.fill();

ctx.beginPath();
ctx.moveTo(50, 200);
ctx.lineTo(150, 250);
ctx.lineTo(120, 300);

ctx.fillStyle = "yellow";
ctx.fill();

function drawImage(ctx, image) {
    ctx.drawImage(image, 200, 200, 80, 80);
}

function waitForImage(ctx, image) {
    
    if(!image.complete) {
        setTimeout(function(){
            drawImage(ctx, image);
        }, 100)
    }

    drawImage(ctx, image);
}

var player_portrait = new Image();
player_portrait.src = "https://d1u1mce87gyfbn.cloudfront.net/game/unlocks/0x0250000000000D6A.png";
//player_portrait.src = "./resources/player-portrait.png";
waitForImage(ctx, player_portrait);
//ctx.drawImage(player_portrait, 200, 200, 80, 80);

// var level = new Image();
// level.src = "https://d1u1mce87gyfbn.cloudfront.net/game/playerlevelrewards/0x0250000000000969_Border.png";
// ctx.drawImage(level, 300, 150, 120, 120);