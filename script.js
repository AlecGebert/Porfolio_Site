var galleryItems = document.querySelectorAll(".galery-item");

window.onscroll = function () {
  for (let i = 0; i < galleryItems.length; i++) {
    galleryItems[i].classList.toggle(
      "active",
      galleryItems[i].scrollTop > 0 || document.documentElement.scrollTop > 0
    );
  }
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

Array.from(document.querySelectorAll(".menu")).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.remove("change");
  };
});

document.querySelector(".scrolll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});

const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [95, 85, 75, 65, 60];

if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
  document.querySelectorAll(".progress-percent").forEach((el, i) => {
    el.style.width = `${progressBarPercents[i]}%`;
    el.previousElementSibling.firstElementChild.textContent =
      progressBarPercents[i];
  });
}
