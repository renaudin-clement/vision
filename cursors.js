const cursor = document.querySelector('.cursors');
let c = document.getElementById("myCanvas");

document.addEventListener('mousemove', e =>{
    if(){
    cursor.setAttribute('style','top:'+(e.pageY - 20)+'px; left:'+(e.pageX - 20)+'px')
    }
});

document.addEventListener('click',e =>{
cursor.classList.add('expand');

setTimeout(() => {
    cursor.classList.remove('expand');
}, 500);

});