//functions to set light and dark theam
function light() {
    document.documentElement.style.setProperty('--bgcolor', '#FBFFFE');
    document.documentElement.style.setProperty('--fgcolor', '#121212');
    localStorage.setItem('theam', '0');
  }
function dark() {
    document.documentElement.style.setProperty('--bgcolor', '#121212');
    document.documentElement.style.setProperty('--fgcolor', '#FBFFFE');
    localStorage.setItem('theam', '1');
  } 
//load previously selected theam on restart
function setTheam(){
  if (localStorage.getItem('theam')==1) {
    dark();
  } else {
    light();
  }
}