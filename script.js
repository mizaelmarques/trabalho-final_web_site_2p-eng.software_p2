/* Menu sidebar */
function w3_open() {
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
/* Menu sidebar */


/*Galeria de Imagens Lightbox*/  
lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: true,
});
/*Galeria de Imagens Lightbox*/  


/*acordeon*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}  
/*acordeon*/