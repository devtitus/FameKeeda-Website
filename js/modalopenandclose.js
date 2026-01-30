// ----------------------------MODAL 1-------------------------------------------

// Get the modal
var modal1 = document.getElementById("mymodal1");
var btn1 = document.getElementById("openModalBtn1");
var closeButtons1 = document.querySelectorAll("#closebtn1, #closebg1");

// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "flex";
}

// When the user clicks on close buttons, close the modal
closeButtons1.forEach(function(btn1) {
    btn1.onclick = function() {
        modal1.style.display = "none";
    }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}



// --------------------------------MODAL 2 ------------------------------------

//MODAL WINDOW 2
var modal2 = document.getElementById("mymodal2");
var btn2 = document.getElementById("openModalBtn2");
var closeButtons2 = document.querySelectorAll("#closebtn2, #closebg2");

// When the user clicks the button, open the modal 
btn2.onclick = function() {
    modal2.style.display = "flex";
}

// When the user clicks on close buttons, close the modal
closeButtons2.forEach(function(btn2) {
    btn2.onclick = function() {
        modal2.style.display = "none";
    }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}



// --------------------------------MODAL 3 ------------------------------------

//MODAL WINDOW 3
var modal3 = document.getElementById("mymodal3");
var btn3 = document.getElementById("openModalBtn3");
var closeButtons3 = document.querySelectorAll("#closebtn3, #closebg3");

// When the user clicks the button, open the modal 
btn3.onclick = function() {
    modal3.style.display = "flex";
}

// When the user clicks on close buttons, close the modal
closeButtons3.forEach(function(btn3) {
    btn3.onclick = function() {
        modal3.style.display = "none";
    }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}




// --------------------------------MODAL 4 ------------------------------------

//MODAL WINDOW 4
var modal4 = document.getElementById("mymodal4");
var btn4 = document.getElementById("openModalBtn4");
var closeButtons4 = document.querySelectorAll("#closebtn4, #closebg4");

// When the user clicks the button, open the modal 
btn4.onclick = function() {
    modal4.style.display = "flex";
}

// When the user clicks on close buttons, close the modal
closeButtons4.forEach(function(btn4) {
    btn4.onclick = function() {
        modal4.style.display = "none";
    }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}