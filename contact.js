const form=document.getElementById("form");
form.addEventListener("submit",(e)=>{
  if (form.checkValidity()==false){
    alert("please fill all");
    e.preventDefault();
  }
  else{
    greet()
  }
  
})

function greet(){

    var form = document.getElementById("form");
    var thanks = document.getElementById("thanks") ;
              form.style.display="none";
              thanks.style.display="flex";

 }
 //bottom nav bar
 const navItems = document.getElementsByClassName('nav-item');

 for (let i = 0; i < navItems.length; i++) {
     navItems[i].addEventListener('click', () => {
         for(let j = 0; j < navItems.length; j++) 
             navItems[j].classList.remove('active');
         
         navItems[i].classList.add('active');
     });
 }
