function paintImage(e){
    document.querySelector('#heart').innerHTML += `<img src="media/Heart.png" style="left:${e.offsetX}px;top:${e.offsetY}px; z-index: 5">`;
   }
document.addEventListener('click', paintImage);
