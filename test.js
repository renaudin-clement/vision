
var img = new Image();
img.crossOrigin = "anonymous";
img.src = "images/buisson2.png";

img.onload = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    ctx.moveTo(0, 0);
    ctx.lineTo(c.width,c.height );
    ctx.moveTo(c.width, 0);
    ctx.lineTo(0, c.height);
    ctx.stroke();


    ctx.font = "30px Arial";
    ctx.fillText("C", 70, 50);

    

    img = diminuer_taille(img,5);

    ctx.drawImage(img, 22, 22,img.width,img.height);
    ctx.drawImage(img, 0, 222,img.width,img.height);
    ctx.drawImage(img, 222, 0,img.width,img.height);

    function diminuer_taille(img,diviser){
        img.width = Math.round(img.width/diviser);
        img.height = Math.round(img.height/diviser);
        console.log(img.width);
        console.log(img.height);

        return img;

        
    };

};

// probleme de rapiditer
//image non charger avant de lecrire sur le drawImage






var pos = {x:0, y:0};
console.log(pos);
 

 
document.addEventListener('mousemove', setPosition);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', getMousePosition); 
 
//Fonction getPosition

function setPosition(e) {
  pos.x = e.clientX; //  clientX = Renvoie la coordonnée horizontale du pointeur de la souris par rapport à la fenêtre courante.
  pos.y = e.clientY; //  clientY = Renvoie la coordonnée verticale du pointeur de la souris par rapport à la fenêtre courante.
   console.log(pos.x,pos.y);
};

function getMousePosition(e) {
  pos.x = e.offsetX;
  pos.y = e.offsetY;
}


