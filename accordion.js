"use strict";

let accordion = document.querySelectorAll(".accordion-container");

accordion.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

// slider

// სხვა სურათის ლინკები შემოვიტანე

let data = [
  {
    id: 1,
    title: "ინოვაცია იწყება აქ!",
    imageUrl:
      "https://www.bellarmine.edu/sf-images/default-source/blog/steam.jpg?sfvrsn=ffd47c80_6",
  },
  {
    id: 2,
    title: "STEM – მომავლის გასაღები!",
    imageUrl:
      "https://tist.school/uploads/media/Importance-of-STEAM-Education-in-High-School6333cba6c74a8.jpg",
  },
  {
    id: 3,
    title: "გენიალურ იდეებს ბადებს STEM!",
    imageUrl:
      "https://www.datocms-assets.com/32427/1693493407-18710.jpg?auto=format&max-w=980",
  },
  {
    id: 4,
    title: "გამოიკვლიე, ჩაერთე, შექმენი!",
    imageUrl:
      "https://cdn.bambinos.live/images/blog/adventure-learning-fun-stem-based-activities-for-children.jpg",
  },
];
let sliderContainer = document.getElementById("slider");
let arrowLeftBtn = document.getElementById("arrow-left");
let arrowRightBtn = document.getElementById("arrow-right");

let sliderIndex = 0;

function createImg(item) {
  sliderContainer.style.backgroundImage = `url(${item.imageUrl})`;
  sliderContainer.style.backgroundRepeat = "no-repeat";
  sliderContainer.style.backgroundSize = "cover";
}

function createH2tag(item) {
  let h2tag = document.createElement("h2");
  h2tag.innerText = item.title;
  h2tag.classList.add("slider-title");
  return h2tag;
}

function setSlider() {
  sliderContainer.innerText = "";
  createImg(data[sliderIndex]);
  let title = createH2tag(data[sliderIndex]);
  let dots = createDots();

  sliderContainer.appendChild(title);
  sliderContainer.appendChild(dots);
  let dotElements = dots.querySelectorAll(".dot");
  dotElements[sliderIndex].classList.add("active");
}

function arrowLeft() {
  if (sliderIndex === 0) {
    sliderIndex = data.length - 1;
  } else {
    sliderIndex--;
  }
  setSlider();
}

function arrowRight() {
  if (sliderIndex === data.length - 1) {
    sliderIndex = 0;
  } else {
    sliderIndex++;
  }
  setSlider();
}
arrowLeftBtn.addEventListener("click", arrowLeft);
arrowRightBtn.addEventListener("click", arrowRight);

// setInterval(()=>{
//     arrowRight()
// },2000)

function createDots() {
  let dots = document.createElement("div");
  dots.classList.add("dots");
  data.forEach((element) => {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dot.setAttribute("data-id", element.id - 1);
    dot.onclick = function (event) {
      let id = event.target.getAttribute("data-id");
      sliderIndex = id;
      setSlider();
    };
    dots.appendChild(dot);
  });

  return dots;
}

setSlider();
