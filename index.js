const loading = document.querySelector('.loadText');
const bg = document.querySelector('.bg');

let load = 0;
let int = setInterval(upload, 30);
function upload(){
load ++
if ( load >99){
    clearInterval(int);
}
loading.innerText = ` ${load} % `;
}