
var emailinput = document.querySelector('#user_email');
var passwordinput = document.querySelector('#user_password');
var emailError = document.querySelector('#email-error');
var passwordError = document.querySelector('#password-error');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = () => {
  var emailValue = emailinput.value.trim();
  if (emailValue === '') {
    emailError.textContent = 'Email is required';
    emailError.style.color = 'red';
    emailinput.classList.add('is-invalid');
    return false;
  } else if (!emailRegex.test(emailValue)) {
    emailError.textContent = 'Enter a valid email';
    emailError.style.color = 'red';
    emailinput.classList.add('is-invalid');
    return false;
  } else {
    emailError.textContent = '';
    emailinput.classList.remove('is-invalid');
    return true;
  }
};

const validatePassword = () => {
  var passwordValue = passwordinput.value.trim();
  if (passwordValue === "") {
    passwordError.textContent = 'Password is required';
    passwordError.style.color = 'red';
    passwordinput.classList.add('is-invalid');
    return false;
  } else {
    passwordError.textContent = '';
    passwordinput.classList.remove('is-invalid');
    return true;
  }
};
const validateForm = (event) => {
  if (!validateEmail() || !validatePassword()) {
    event.preventDefault(); // prevent form submission
    passwordError.textContent = 'Password is required';
    passwordError.style.color = 'red';
    passwordinput.classList.add('is-invalid');
  }
};


emailinput.addEventListener('blur', validateEmail);
passwordinput.addEventListener('blur', validatePassword);


