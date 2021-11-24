let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.btn-clear');
let equal = document.querySelector('.btn-equal');

buttons.forEach(function(buttons){
  buttons.addEventListener("click", (t)=>{
    let value = t.target.dataset.num;
      screen.value += value;
    
      
  })

})

equal.addEventListener("click", ()=>{
  let answer = eval(screen.value);
  screen.value = answer;
})
clear.addEventListener("click", ()=>{
  screen.value=" "
})