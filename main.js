
document.body.classList.add(localStorage.getItem("pageColor")||"red");
var el = document.querySelectorAll('.color-switcher li');
 var clasessList = [];
 for (var i = 0; i < el.length; i++) {
 
 clasessList.push(el[i].getAttribute('data-color'));
 


el[i].addEventListener(
  "click", 
 function() {
  
  document.body.classList.remove(...clasessList); // using ECMAScript 6 with array to seprate elements
  document.body.classList.add(this.getAttribute('data-color'));
  
  localStorage.setItem('pageColor', this.getAttribute('data-color'));
  
 },
  false
 
);
}



