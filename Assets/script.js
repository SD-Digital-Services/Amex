//clicks accordion after clicking button

var button = document.getElementById('click-on-me');
button.addEventListener('click', clicksButton)

function clicksButton() {
    var accordion = document.getElementById('chck2');
    accordion.click()

}


const formDesktop = document.querySelector("#form-desktop");
const formBox = document.querySelector("#form-box");

function checkScreenSize() {
  if (window.innerWidth < 769) {
    formDesktop.remove();
  } else {
    // Add the form-desktop element back if it was previously removed
    if (!formDesktop.parentNode) {
      formBox.appendChild(formDesktop);
    }
  }
}

// Check the screen size on page load
checkScreenSize();

// Add an event listener for changes in screen size
window.addEventListener("resize", checkScreenSize);