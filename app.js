const boxs = document.querySelectorAll('.box');
const btn = document.querySelector('.btn');
const h1 = document.querySelectorAll('h1');
const popUp = document.querySelector('.pop-up');







h1.forEach(function(h){
    h.addEventListener('click',() => {
        copyIt(h);
        popUp.classList.add('open');
        setTimeout(function(){
            popUp.classList.remove('open');
        },1500)
    })
})

btn.addEventListener('click',function(e){
    e.preventDefault();
    randomColor();
})

function generateColor(){
   const color = chroma.random();
   return color;
}

function randomColor(){
    boxs.forEach(function(box){
        const hexColor = generateColor();
        const hexText = box.children[0];
        
        box.style.backgroundColor = hexColor;
        hexText.textContent =  box.style.backgroundColor = hexColor;
        console.log(hexText.textContent)

       
        
       
    })
}


randomColor()


function copyIt(h){
    const el = document.createElement('textarea');
    el.value = h.innerText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el)

}

