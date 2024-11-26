'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// Add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Toggle the dropdown
select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// Add event in all select items
selectItems.forEach(function (item) {
  item.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

// Select all filter buttons and project items
const filterItems = document.querySelectorAll("[data-filter-item]");

// Function to handle the filtering logic
const filterFunc = function (selectedValue) {
  selectedValue = selectedValue.toLowerCase(); // Case-insensitive comparison

  filterItems.forEach(function (item) {
    const itemCategory = item.dataset.category.toLowerCase();

    // Fix for case sensitivity
    if (selectedValue === "graphic design" || selectedValue === "graphic designer") {
      item.classList.add("active"); // Show all items when "Graphic Design" or "Graphic Designer" is selected
    } else if (selectedValue === itemCategory) {
      item.classList.add("active"); // Show items that match the selected category
    } else {
      item.classList.remove("active"); // Hide items that don't match the category
    }
  });
};

// Add event listeners to filter buttons
filterBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase(); // Get the button text
    filterFunc(selectedValue); // Filter items based on the selected category

    // Toggle the active class for the filter buttons
    filterBtn.forEach(function (btn) {
      btn.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// Add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0]; // Default active button

filterBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
// Function to validate the form
function validateForm() {
  const formInputs = document.querySelectorAll('[data-form-input]');
  const submitButton = document.querySelector('[data-form-btn]');
  
  // Check if all fields are filled
  let allFieldsFilled = true;
  formInputs.forEach(input => {
    if (!input.value.trim()) {
      allFieldsFilled = false;
    }
  });

  // Enable submit button if all fields are filled
  if (allFieldsFilled) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

// Optional: Function to perform additional checks on form submission
function enableSubmitButton() {
  const submitButton = document.querySelector('[data-form-btn]');
  if (submitButton.disabled) {
    alert("Please fill in all fields before submitting.");
    return false; // Prevent form submission
  }
  return true; // Allow form submission
}

// Add event listeners to form inputs
document.addEventListener('DOMContentLoaded', () => {
  const formInputs = document.querySelectorAll('[data-form-input]');
  formInputs.forEach(input => {
    input.addEventListener('input', validateForm);
  });
});

