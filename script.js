// this code is used for menubar
let bar = document.querySelector('#bar');
let menu = document.querySelector('.java_menu')
bar.addEventListener('click', () => {
    bar.classList.toggle("close");
    menu.classList.toggle("mc");

});



let arrow = document.querySelector('.arrow');
let morecourse = document.querySelector('.morecourse');
arrow.addEventListener('click', () =>{
    arrow.classList.toggle('bx-chevron-right');
    arrow.classList.toggle('bx-chevron-down');
    var displaySetting = morecourse.style.display;

  if (displaySetting == 'block') {
      // clock is visible. hide it
      morecourse.style.display = 'none';
    }
    else {
      // clock is hidden. show it
      morecourse.style.display = 'block';
    }
  });