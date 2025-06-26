

window.onscroll = function () {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
};

window.addEventListener("scroll", function () {
  const section = document.querySelector(".parallax-bolum");
  const bg = section.querySelector("::before"); // Ama ::before seçilemez, bu yüzden JS ile çözüm aşağıda

  const scrollY = window.scrollY;
  section.style.setProperty('--scroll', scrollY);
});


const observer = new IntersectionObserver((gorseller) => {
  gorseller.forEach((gorsel) => {
    if (gorsel.isIntersecting) {
      gorsel.target.classList.add("geldi");
    }
  });
});

document.querySelectorAll(".efektli-gorsel").forEach((gorsel) => {
  observer.observe(gorsel);
});




