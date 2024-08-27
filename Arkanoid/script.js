const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); /* aca podes utilizar (webgl, bitmaprenderer) */

canvas.width = 448
canvas.height = 400
 
function draw () {
    console.log ('hola')
    window.requestAnimationFrame(draw)
}

draw()
