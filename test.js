
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

    ctx.fillRect(0, 0,img.width/3, img.height/3);

    //ctx.drawImage(img, 22, 22,);  // Now it will draw only after the image is loaded
};

// probleme de rapiditer
//image non charger avant de lecrire sur le drawImage

