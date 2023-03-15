const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const clear = document.getElementById('clear');
const col = document.getElementById('color');
const eraser = document.getElementById('erase');
let size = 20;
let color = 'steelblue';
let isPressed = false, x, y;

eraser.addEventListener('click', () => {
    color = '#f5f5f5';
})
increase.addEventListener('click', () => {
    size = size + 1;
})
decrease.addEventListener('click', () => {
    size = size - 1;
})
clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})
col.addEventListener('click', () => {
    color = col.value;
})
// console.log(increase)

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;

})
canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
})
canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2;
        y = y2;
    }
})
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2,);
    ctx.fillStyle = color;
    ctx.fill();
}
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}


// drawCircle(100, 200)
// drawLine(300, 300, 300, 500);