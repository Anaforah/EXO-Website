//efeito slide
let box=document.querySelector(".container");
const div = document.querySelector(".slide");
let contador=0;

function carrosel(){
  contador++;
  if(contador>2){
    contador=0;
  }

  box.style.transform=`translate(${-contador*100}%)`;
}

setInterval(carrosel,2000);