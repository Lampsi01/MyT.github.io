 
const button = document.getElementsByClassName("menu")[0]; 
const list = document.getElementsByClassName("links")[0];  

button.addEventListener('click',() => { 

list.classList.toggle('active')  
console.log("clicked")


});
    
  