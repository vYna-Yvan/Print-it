const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
var index = 0;
var arrowLeft = document.getElementById("arrow_left");
var arrowRight = document.getElementById("arrow_right");

const createBulletPoints = () => {
  slides.forEach((el, pointIndex) => {

    var element = document.createElement("div")
    if (pointIndex === index) {
      element.className = "dot dot_selected"

    } else {
      element.className = "dot"
    }
    document.querySelector(".dots").appendChild(element)
  })
}
createBulletPoints()

const increment = () => {
  index = index + 1;
  if (index === slides.length) { index = 0 }
  const source = "./assets/images/slideshow/" + slides[index].image
  document.querySelector("#banner img").src = source
  document.querySelector("#banner p").innerHTML = slides[index].tagLine
  slides.forEach((el, pointIndex) => {

    if (pointIndex === index) {
      document.getElementsByClassName("dot")[
        pointIndex
      ].className = "dot dot_selected"

    } else {
      document.getElementsByClassName("dot")[
        pointIndex
      ].className = "dot"

    }
  })
}
arrowRight.addEventListener("click", increment, false);


const decrement = () => {
  index = index - 1;
  if (index < 0) { index = slides.length - 1 }

  const source = "./assets/images/slideshow/" + slides[index].image

  document.querySelector("#banner img").src = source
  document.querySelector("#banner p").innerHTML = slides[index].tagLine
  slides.forEach((el, pointIndex) => {


    if (pointIndex === index) {
      document.getElementsByClassName("dot")[
        pointIndex
      ].className = "dot dot_selected"

    } else {
      document.getElementsByClassName("dot")[
        pointIndex
      ].className = "dot"

    }

  })
}
arrowLeft.addEventListener("click", decrement, false);