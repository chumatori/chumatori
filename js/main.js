var currentVisibleBlock = 0;
const pageContent = document.querySelectorAll('section');
const navMenuElement = document.querySelectorAll('nav > ul > li');

function hideAll() {
  for ( let i = 0; i < pageContent.length; i++) {
    pageContent[i].style.display = 'none';

  }
}

function selectedNavMenuElement() {
  for (let i = 0; i < navMenuElement.length; i++) {
    navMenuElement[i].classList.remove('nav_selected');
  }
  navMenuElement[currentVisibleBlock].classList.add('nav_selected')  
}
selectedNavMenuElement();
//scroll

function scrollPageContent(elem, callback) {
  if (elem.addEventListener) {
    if ('onwheel' in document) { // IE9+, FF17+, Ch31+
      elem.addEventListener("wheel", callback);
    } else if ('onmousewheel' in document) { // устаревший вариант события
      elem.addEventListener("mousewheel", callback);
    } else { // Firefox < 17
      elem.addEventListener("MozMousePixelScroll", callback);
    }
  } else { // IE8-
    elem.attachEvent("onmousewheel", callback);
  }
}

var scrollTimeout = 0; 
scrollPageContent(window, function () {

  var e = window.event;
  var delta = e.deltaY || e.detail || e.wheelDelta;
  var eventTime = Number(new Date);

  if (scrollTimeout === 0 || (scrollTimeout + 300) <= eventTime) {
    if (delta > 0 & currentVisibleBlock < 3) {
      hideAll(); pageContent[(++currentVisibleBlock)].style.display = 'block';
      scrollTimeout = Number(new Date);
    }
    if (delta < 0 & currentVisibleBlock > 0) {
      hideAll(); pageContent[(--currentVisibleBlock)].style.display = 'block';
      scrollTimeout = Number(new Date);
    }
    selectedNavMenuElement();
  }
  return false;
})


function clickNavMenuElement() {  
  for (let i=0; i < navMenuElement.length; i++){
    navMenuElement[i].addEventListener('click', function () {
          hideAll(); 
      pageContent[i].style.display = 'block';
      currentVisibleBlock = i;
      selectedNavMenuElement(); 
    })

  }
}  
clickNavMenuElement();


var touchArea = document.getElementsByTagName('body')[0];
var start, end;
function deltaYStart (ev) { 
  start = ev.touches[0].screenY; return start; 
}
function deltaYMove(ev) { 
  end = ev.touches[0].screenY;
  if ((start - end)<0){
    hideAll(); pageContent[(++currentVisibleBlock)].style.display = 'block';
  }
  else {
    hideAll(); pageContent[(--currentVisibleBlock)].style.display = 'block';
  }
  return false;
}
touchArea.addEventListener('touchstart', deltaYStart, false);
touchArea.addEventListener('touchmove', deltaYMove, false);


