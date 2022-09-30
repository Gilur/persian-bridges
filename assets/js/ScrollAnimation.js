/**
 * Copyright of minam
 */

export default function ScrollAnimation() {
  function toggleClasses(el) {
    el.dataset.scrollClasses.split(" ")
      .filter((e) => e !== "")
      .map((e) => el.classList.toggle(e));
  }

  function ScrollAnimation() {
    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (el.dataset.scrollClasses) toggleClasses(el);

          if (el.classList.contains("count")) counter(el);

          observer.unobserve(el);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".scroll").forEach((e) => observer.observe(e));
  }
  // run if observer supported
  if ("IntersectionObserver" in window) {
    ScrollAnimation();
  } else {
    document.querySelectorAll(".scroll").forEach((e) => toggleClasses(e));
  }
}