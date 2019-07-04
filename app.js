window.onload = () => {
    const canvas = document.getElementById('canvas');
    canvas.width = document.querySelector('div[class="canvas-container"]').offsetWidth;
    canvas.height = document.querySelector('div[class="canvas-container"]').offsetHeight;
    const ctx = canvas.getContext('2d');

    window.addEventListener('resize', updateCanvasSize);

    let drawing = false;
    let bigBrush = false;
    let x1;
    let y1;
    let x2;
    let y2;
    
    canvas.addEventListener('mousedown', event => {
        ctx.lineWidth = 1;
        x1 = event.clientX;
        y1 = event.clientY;
        drawing = true;
    });
    
    canvas.addEventListener('mousemove', event => {
        if (drawing === true) {
            x2 = event.clientX;
            y2 = event.clientY;
            drawLine(x1, y1, x2, y2);
            x1 = x2;
            y1 = y2;
        }
    });
    
    canvas.addEventListener('mouseup', event => {
        if (drawing === true) {
            drawing = false;
        }
    });
    
    function drawLine(x1, y1, x2, y2) {

        if (ctx.lineWidth > 99) bigBrush = true;
        if (ctx.lineWidth < 2) bigBrush = false;
        if (bigBrush) ctx.lineWidth -= 1;
        if (!bigBrush) ctx.lineWidth += 1;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineCap = 'round';
        ctx.strokeStyle = `rgb(255, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 155)})`;
        ctx.stroke();
        ctx.closePath();
    }

    function updateCanvasSize() {
        canvas.width = document.querySelector('div[class="canvas-container"]').offsetWidth;
        canvas.height = document.querySelector('div[class="canvas-container"]').offsetHeight;
    }
}
