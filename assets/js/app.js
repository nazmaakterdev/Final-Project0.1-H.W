/**
 * EcoBazar Header Bottom & Navigation Bar Functionality
 * Vanilla JavaScript Implementation
 */

document.addEventListener("DOMContentLoaded", function () {
  // Category Dropdown Toggle
  const categoryMenuToggle = document.getElementById("categoryMenuToggle");
  const categoryDropdownList = document.getElementById("categoryDropdownList");

  if (categoryMenuToggle && categoryDropdownList) {
    // Click on "All Categories" button to toggle menu
    categoryMenuToggle.addEventListener("click", function (event) {
      event.stopPropagation();
      const isOpen = categoryDropdownList.classList.toggle("show");
      categoryMenuToggle.classList.toggle("active", isOpen);
      categoryMenuToggle.setAttribute("aria-expanded", isOpen.toString());
    });

    // Close category dropdown when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !categoryMenuToggle.contains(event.target) &&
        !categoryDropdownList.contains(event.target)
      ) {
        categoryDropdownList.classList.remove("show");
        categoryMenuToggle.classList.remove("active");
        categoryMenuToggle.setAttribute("aria-expanded", "false");
      }
    });

    // Close category dropdown on Escape key
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && categoryDropdownList.classList.contains("show")) {
        categoryDropdownList.classList.remove("show");
        categoryMenuToggle.classList.remove("active");
        categoryMenuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Active Navigation Link Highlighting
  const navLinks = document.querySelectorAll(".headerBottom .mainNav .navLink");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Hero Banner Slick Slider Initialization
  if (typeof $ !== "undefined" && $.fn.slick && $(".heroSlider").length) {
    $(".heroSlider").slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: true,
      infinite: true,
      speed: 600,
      fade: true,
      cssEase: "ease-in-out",
      pauseOnHover: true,
      pauseOnFocus: false,
      prevArrow: '<button type="button" class="heroPrevBtn" aria-label="Previous"><i class="bi bi-arrow-left"></i></button>',
      nextArrow: '<button type="button" class="heroNextBtn" aria-label="Next"><i class="bi bi-arrow-right"></i></button>',

      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            dots: true
          }
        }
      ]
    });
  }
});
