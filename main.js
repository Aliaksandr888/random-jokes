const btn = document.querySelector('.btn');
const main = document.querySelector('.main_container');
let jock= document.querySelector('.jock');
const chuck = document.querySelector('.chuck');
function createJock(){
chuck.classList.toggle('active')
   getData()
}

const url = 'https://api.icndb.com/jokes/random';
async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.value.joke);
    jock.innerHTML = data.value.joke;
  }

  btn.addEventListener('click', createJock);