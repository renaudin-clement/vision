

class Cursors {

    constructor(height, width) {
        this.height = height;
        this.width = width;

        let link = document.createElement("link");
        link.setAttribute("rel","stylesheet");
        link.setAttribute("type","text/css");
        link.setAttribute("href","css/cursors.css");
        document.head.append(link)
        
        
        let div = document.querySelector('#fonds');
        let cursor = document.createElement("div");
        cursor.classList.add("cursors");
        div.append(cursor);
        this.cursor = document.querySelector('.cursors');
    }
  

    positionnercursors(){
        document.addEventListener('mousemove', e =>{
            pos.x = e.clientX - rect.left; //  clientX = Renvoie la coordonnée horizontale du pointeur de la souris par rapport à la fenêtre courante.
            pos.y = e.clientY - rect.top;
            if(pos.x < 0 || pos.y <0 || pos.x > c.width || pos.y > c.height){
                console.log("no");
            }else{
                this.cursor.setAttribute('style','top:'+(e.pageY - 20)+'px; left:'+(e.pageX - 20)+'px')
            }
        });

    }

    clique(){
        document.addEventListener('click',() =>{
        this.cursor.classList.add('expand');
        setTimeout(() => {
            this.cursor.classList.remove('expand');
        }, 500);
        });
    }


}
