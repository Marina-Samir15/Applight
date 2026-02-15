// START BUTTON LOGIN
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");

  toggleButton.addEventListener("click", function () {
    const sectionsToHide = ["about", "features", "team", "faq"];
    const sectionsToShow = ["home", "contact", "download"];
    sectionsToHide.forEach(function (id) {
      const section = document.getElementById(id);
      if (section) {
        section.style.display = "none";
      }
    });
    sectionsToShow.forEach(function (id) {
      const section = document.getElementById(id);
      if (section) {
        section.style.display = "block";
      }
    });
  });
});
// END BUTTON LOGIN

// START TOP BUTTON
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTop");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });
  scrollToTopButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
// END TOP BUTTON
