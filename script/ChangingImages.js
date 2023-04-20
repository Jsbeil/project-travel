let images = ["images/trv1.jpg","images/trv2.jpg","images/trv3.jpg","images/trv4.jpg","images/trv5.jpg","images/trv6.jpg","images/trvl.jpg"];
let index = 0;

function fadeOut(element){
    let opacity = 1 ;
    let timer = setInterval(function(){
        if(opacity <=0.1){
            clearInterval(timer);
            element.style.display = 'none';
            fadeIn(element);
        }
        element.style.opacity = opacity;
        opacity -=0.1;
    }, 100);
}
function fadeIn(element) {
    let opacity = 0.1;
    element.style.display = 'block';
    let timer = setInterval(function() {
      if (opacity >= 1) {
        clearInterval(timer);
        setTimeout(changeImage, 2000);
      }
      element.style.opacity = opacity;
      opacity += 0.1;
    }, 1000);
  }
  
  function changeImage() {
    let image = document.getElementById("image");
    fadeOut(image);
    index++;
    if (index >= images.length) {
      index = 0;
    }
    image.src = images[index];
  }
  
  setInterval(changeImage, 2000);