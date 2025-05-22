const cursor = document.querySelector('.cursors');
document.addEventListener('mousemove', e =>{
    pos.x = e.clientX - rect.left; //  clientX = Renvoie la coordonnée horizontale du pointeur de la souris par rapport à la fenêtre courante.
    pos.y = e.clientY - rect.top;
    if(pos.x < 0 || pos.y <0 || pos.x > c.width || pos.y > c.height){
        console.log("no");
    }else{
        cursor.setAttribute('style','top:'+(e.pageY - 20)+'px; left:'+(e.pageX - 20)+'px')
    }
});

document.addEventListener('click',() =>{
cursor.classList.add('expand');

setTimeout(() => {
    cursor.classList.remove('expand');
}, 500);

});

$(function(){
  $("head").append( $(document.createElement("link")).attr({rel:"stylesheet", type:"text/css", href:"css/cursors.css"}));
});


<div class="cursors"></div>
<script src="cursors.js"></script>