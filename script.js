const checkLightDark = document.getElementById('check-light-dark');

const checkBluePink = document.getElementById('check-blue-pink');

const bodyApp = document.getElementById('body-app');
var classBefore = 'light-blue';

function toggleClass(newClass) {
  bodyApp.classList.remove(classBefore);
  bodyApp.classList.add(newClass);
  classBefore = newClass;
}

function getCheckValues() {

  if (checkLightDark.checked && checkBluePink.checked) {
    toggleClass('dark-pink')
  }

  if (checkLightDark.checked && !checkBluePink.checked) {
    toggleClass('dark-blue')
  }

  if (!checkLightDark.checked && checkBluePink.checked) {
    toggleClass('light-pink')
  }
  
  if (!checkLightDark.checked && !checkBluePink.checked) {
    toggleClass('light-blue')
  }


}