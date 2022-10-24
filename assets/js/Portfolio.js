
// CV modal

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1"); //Btn for smaller screens

// Get the span element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the back btn in modal
var btnBack = document.getElementById("BtnBack");

// when the user clicks on the button it opens the modal
btn.onclick = function(){
  modal.style.display = "block";
}
// Button for small screens
btn1.onclick = function(){
    modal.style.display = "block";
  }

// When the user clicks on x, it closes the modal
span.onclick = function(){
    modal.style.display = "none";
}

// When the user click the back button the modal closes
btnBack.onclick = function(){
    modal.style.display = "none";
}
    

// When the user clicks anywhere out of the modal, it closes it
window.onclick = function(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}


