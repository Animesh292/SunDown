const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page3Animation() {
  const fixed = document.querySelector("#fixed-image");

  var elemC = document.querySelector("#elem-container");
  elemC.addEventListener("mouseenter", () => {
    fixed.style.display = "block";
  });

  elemC.addEventListener("mouseleave", () => {
    fixed.style.display = "none";
  });

  // var elem1 = document.querySelector("#elem1");

  // elem1.addEventListener("mouseenter", () => {
  //   var image = elem1.getAttribute("data-image");
  //   fixed.style.backgroundImage = `url(${image})`;
  // });

  var elems = document.querySelectorAll(".elem");
  elems.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}

function hamburgerMenuAnimation() {
  var menu = document.querySelector("nav h3");
  var full = document.querySelector("#full-scr");
  var navimg = document.querySelector("nav img");
  var flag = 0;
  menu.addEventListener("click", () => {
    if (flag == 0) {
      full.style.top = 0;
      navimg.style.opacity = 0;
      flag = 1;
    } else {
      full.style.top = "-100%";
      navimg.style.opacity = 1;
      flag = 0;
    }
  });
}

function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4200);
}

swiperAnimation();
page3Animation();
hamburgerMenuAnimation();
loaderAnimation();
