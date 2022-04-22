const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

const canvas = createCanvas(280, 480);
const ctx = canvas.getContext('2d');

// Write "Awesome!"
ctx.font = '30px Helvetica';
ctx.rotate(0.1);
ctx.fillText('Awesome!', 50, 100);

// Draw line under text
var text = ctx.measureText('Awesome!');
ctx.strokeStyle = 'rgba(0,0,0,1)';
ctx.beginPath();
ctx.lineTo(50, 102);
ctx.lineTo(50 + text.width, 102);
ctx.stroke();

ctx.font = '40px Helvetica';
ctx.rotate(-0.2);
ctx.fillText(Math.round(Math.random() * 100000), 100, 200);

const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('./image.png', buffer);
