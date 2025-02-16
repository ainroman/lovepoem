
function paintImage(e){
    document.querySelector('#heart').innerHTML += `<img src="media/heart.png" style="left:${e.offsetX}px;top:${e.offsetY}px; z-index: 5">`;
   }
document.addEventListener('click', paintImage);

/*
function showPoemCn() {
    if (shangFull.style.display = "none") {
        shangFull.style.display = "flex";
    } else (shangFull.style.display = "none");
}

function showPoemRu() {
    if (pushkinFull.style.display = "none") {
        pushkinFull.style.display = "flex";
    } else (pushkinFull.style.display = "none");
}
*/


document.addEventListener('mouseup',function(event){
    var cardCn = document.getElementById('shangFull');
    if(event.target != cardCn && event.target.parentNode != cardCn){
        cardCn.style.display = 'none';
    }
});  

document.addEventListener('mouseup',function(event){
    var cardRu = document.getElementById('pushkinFull');
    if(event.target != cardRu && event.target.parentNode != cardRu){
        cardRu.style.display = 'none';
    }
}); 

document.addEventListener('mouseup',function(event){
    var cardYou = document.getElementById('yourOwn');
    if(event.target != cardYou && event.target.parentNode != cardYou){
        cardYou.style.display = 'none';
    }
}); 

document.addEventListener('mouseup',function(event){
    var cardKr = document.getElementById('hangyul');
    if(event.target != cardKr && event.target.parentNode != hangyul){
        cardKr.style.display = 'none';
    }
}); 

document.addEventListener('mouseup',function(event){
    var cardUr = document.getElementById('urdu');
    if(event.target != cardUr && event.target.parentNode != urdu){
        cardUr.style.display = 'none';
    }
}); 

document.addEventListener('mouseup',function(event){
    var cardJp = document.getElementById('flavor');
    if(event.target != cardJp && event.target.parentNode != flavor){
        cardJp.style.display = 'none';
    }
}); 


document.addEventListener('mouseup',function(event){
    var cardDt = document.getElementById('himmel');
    if(event.target != cardDt && event.target.parentNode != himmel){
        cardDt.style.display = 'none';
    }
}); 


document.addEventListener('mouseup',function(event){
    var cardEng = document.getElementById('shake');
    if(event.target != cardEng && event.target.parentNode != shake){
        cardEng.style.display = 'none';
    }
}); 

document.addEventListener('mouseup',function(event){
    var cardEng = document.getElementById('jour');
    if(event.target != cardEng && event.target.parentNode != jour){
        cardEng.style.display = 'none';
    }
}); 