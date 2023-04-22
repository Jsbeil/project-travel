let images = ["images/trv1.jpg","images/trv2.jpg","images/trv3.jpg","images/trv4.jpg","images/trv5.jpg","images/trv6.jpg"];

let index = 0;

function changeImage() {
    const img = document.getElementById("image");
    img.classList.add("fade-out"); 
    setTimeout(() => {
      index = (index + 1) % images.length;
      img.src = images[index];
      img.classList.remove("fade-out"); 
    }, 1000);
  }

setInterval(changeImage, 4000);