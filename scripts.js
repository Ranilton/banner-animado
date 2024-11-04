let list = document.querySelectorAll('.item') //select class
let next = document.getElementById('next')  // encontrar por id
let prev = document.getElementById('prev')




let count = list.length;
let active = 0;

next.onclick = () => {
  let activeOld = document.querySelector('.active');
  activeOld.classList.remove('active');
  //animação do refrigerante (saida) da imagem anterior(ainda não deu certo)
  //activeOld.querySelector('img.refri').style.animation = "toNextOut 0.5s ease-in-out backwards";

  active = active >= count - 1 ? 0 : active + 1;
  list[active].classList.add('active');
  //animação do refrigerante(entrada)
  list[active].querySelector('img.refri').style.animation = "toNext 0.5s ease-in-out forwards";
};

prev.onclick = () => {
  let activeOld = document.querySelector('.active');
  activeOld.classList.remove('active');
  //animação do refrigerante (saida) da imagem anterior(ainda não deu certo)
  //activeOld.querySelector('img.refri').style.animation = "toPrevOut 0.5s ease-in-out backwards";

  active = active <= 0 ? count - 1 : active - 1;
  list[active].classList.add('active');
  //animação do refrigerante(entrada)
  list[active].querySelector('img.refri').style.animation = "toPrev 0.5s ease-in-out forwards";
};


