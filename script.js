let section = document.querySelector(".section");
let buttonLeft = document.querySelector(".button-left");
let buttonRight = document.querySelector(".button-right");
let slider = document.querySelector(".slider");
let sliderItems = document.querySelectorAll(".slider-items");


console.log(window.innerWidth);
if (window.innerWidth < 480) {
  count = 1;
}else if (window.innerWidth < 768) {
  count = 2;
} else {
  count = 3;
}




sliderItems.forEach((item, index) => {
  if (index > count) {
    item.style.display = 'none';
  }else{
    item.style.display = 'block';
  }
});

// for (let i = 0; i < sliderItems.length; i++) {
//     buttonRight.addEventListener("click", () => {
//         if(i < sliderItems.length){
//             console.log(i, "right");
//         }
//         console.log(sliderItems[i]);
//     })

// }


for (let i = sliderItems.length - 1; i >= 0; i--) {
    buttonRight.addEventListener("click", () => {
        if(sliderItems[i].style.display === 'block' && i+1 < sliderItems.length){
            sliderItems[i+1].style.display = 'block';
            if(i-count >= 0){
                sliderItems[i-count].style.display = 'none';
            }
        }else{
            return
        }
    })
}

for (let i = 0; i < sliderItems.length; i++) {
    buttonLeft.addEventListener("click", () => {
        if(sliderItems[i].style.display === 'block' && i-1 >= 0){
            sliderItems[i-1].style.display = 'block';
            if(i+count < sliderItems.length){
                sliderItems[i+count].style.display = 'none';
            }
        }else{
            return
        }
    })

}