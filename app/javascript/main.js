(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500, "easeInOutExpo");
    return false;
  });

  // Sidebar Toggler
  $(".sidebar-toggler").click(function () {
    $(".sidebar, .content").toggleClass("open_sidebar");
    return false;
  });
  $(".close_btn").click(function () {
    $(".sidebar, .content").removeClass("open_sidebar");
    return false;
  });

  document.addEventListener("click", function handleClickOutsideBox(event) {
    const openSidebars = document.querySelectorAll(".open_sidebar");

    if (openSidebars.length > 0) {
      // Check if the clicked element is a child of any open sidebar
      let clickedInsideSidebar = false;
      openSidebars.forEach((sidebar) => {
        if (sidebar.contains(event.target)) {
          clickedInsideSidebar = true;
        }
      });

      // If the clicked element is not a child of any open sidebar, close all open sidebars
      if (
        !clickedInsideSidebar &&
        !event.target.classList.contains("nav-link") &&
        !event.target.classList.contains("navbar") &&
        !event.target.classList.contains("sidebar") &&
        !event.target.classList.contains("navbar-nav")
      ) {
        openSidebars.forEach((sidebar) => {
          sidebar.classList.remove("open_sidebar");
        });
      }
    }

    // Log the clicked element
    console.log("user clicked:", event.target);
  });


})(jQuery);










// Get the form and input elements
var form = $("form");
var firstNameInput = $("#profile_first_name");
var lastNameInput = $("#profile_last_name");
var countryInput = $("#profile_country");
var imageInput = $("#profile_image");

// Add a blur event listener to the first name input element
// Add a blur event listener to the first name input element
firstNameInput.on("blur", function () {
  // Get the value of the first name input
  var firstName = firstNameInput.val().trim();

  // Validate the first name field
  if (firstName === "") {
    // Show an error message
    firstNameInput.addClass("is-invalid");
    firstNameInput.after(
      "<div class='invalid-feedback'>Please enter your first name</div>"
    );
  } else if (firstName.length < 2 || firstName.length > 20) {
    // Show an error message
    firstNameInput.addClass("is-invalid");
    firstNameInput.after(
      "<div class='invalid-feedback'>First name must be between 2 and 50 characters</div>"
    );
  } else if (/^\d+$/.test(firstName)) {
    // Show an error message if the first name is numeric
    firstNameInput.addClass("is-invalid");
    firstNameInput.after(
      "<div class='invalid-feedback'>First name cannot be numeric</div>"
    );
  } else if (/\d/.test(firstName) && /[a-zA-Z]/.test(firstName)) {
    // Show an error message if the first name contains both characters and numbers
    firstNameInput.addClass("is-invalid");
    firstNameInput.after(
      "<div class='invalid-feedback'>First name cannot contain both characters and numbers</div>"
    );
  } else {
    // Remove any error messages
    firstNameInput.removeClass("is-invalid");
    firstNameInput.next(".invalid-feedback").remove();
  }
});


// Add a blur event listener to the last name input element
lastNameInput.on("blur", function () {
  // Get the value of the last name input
  var lastName = lastNameInput.val().trim();

  // Validate the last name field
  if (lastName === "") {
    // Show an error message
    lastNameInput.addClass("is-invalid");
    lastNameInput.after(
      "<div class='invalid-feedback'>Please enter your last name</div>"
    );
  } else if (lastName.length < 2 || lastName.length > 20) {
    // Show an error message
    lastNameInput.addClass("is-invalid");
    lastNameInput.after(
      "<div class='invalid-feedback'>Last name must be between 2 and 50 characters</div>"
    );
  } else if (/^\d+$/.test(lastName)) {
    // Show an error message if the last name is numeric
    lastNameInput.addClass("is-invalid");
    lastNameInput.after(
      "<div class='invalid-feedback'>Last name cannot be numeric</div>"
    );
  } else if (/\d/.test(lastName) && /[a-zA-Z]/.test(lastName)) {
    // Show an error message if the first name contains both characters and numbers
    lastNameInput.addClass("is-invalid");
    lastNameInput.after(
      "<div class='invalid-feedback'>First name cannot contain both characters and numbers</div>"
    );
  }else {
    // Remove any error messages
    lastNameInput.removeClass("is-invalid");
    lastNameInput.next(".invalid-feedback").remove();
  }
});

//
// Add a blur event listener to the country input element
countryInput.on("blur", function () {
  // Get the value of the country input
  var country = countryInput.val().trim();

  // Validate the country field
  if (country === "") {
    // Show an error message
    countryInput.addClass("is-invalid");
    countryInput.after(
      "<div class='invalid-feedback'>Please enter your country</div>"
    );
  } else {
    // Remove any error messages
    countryInput.removeClass("is-invalid");
    countryInput.next(".invalid-feedback").remove();
  }
});

function validateImage(event) {
  const imageInput = event.target;
  const file = imageInput.files[0];

  if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
    const reader = new FileReader();

    reader.addEventListener('load', function() {
      const image = new Image();

      image.addEventListener('load', function() {
        document.getElementById('image-error').style.display = 'none';
        
      });

      image.src = reader.result;
    });

    reader.readAsDataURL(file);
  } else {
    const errorMessage = 'Please select a JPG or PNG image';
    document.getElementById('image-error').textContent = errorMessage;
    document.getElementById('image-error').style.display = 'block';
    imageInput.value = ''; // Clear the file input
  }
}


