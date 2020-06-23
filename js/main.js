var currentVisibleBlock = 0;
const pageContent = document.querySelectorAll('[data-role="scrollable_block"]');
const navMenuElement = document.querySelectorAll('[date-role="menu_element"]');
const headerNavElement = document.querySelectorAll('[date-role="header_element"]');


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

var lock = false;

scrollPageContent(window, function () {
  var e = window.event;
  var delta = e.deltaY || e.detail || e.wheelDelta;

  if (delta < 80 && delta > -80) { return false }

  if (lock) return false;
  lock = true;
  setTimeout(function () { lock = false }, 700);

  var e = window.event;
  var delta = e.deltaY || e.detail || e.wheelDelta;

  if (delta > 0 & currentVisibleBlock < 3) { slideUp() }
  if (delta < 0 & currentVisibleBlock > 0) { slideDown() }
  selectedNavMenuElement();


  return false;
})

function clickNavMenuElement() {  
  for (let i=0; i < navMenuElement.length; i++){
    navMenuElement[i].addEventListener('click', function () {
      if (i < currentVisibleBlock) {
        pageContent[currentVisibleBlock].style.top = "150%";
        pageContent[currentVisibleBlock].style.transform = "scale(0.9)";
        currentVisibleBlock = i;
        pageContent[currentVisibleBlock].style.top = "0";
        pageContent[currentVisibleBlock].style.transform = "scale(1)";
      }
      else {
        pageContent[currentVisibleBlock].style.top = "-150%";
        pageContent[currentVisibleBlock].style.transform = "scale(0.9)";
        currentVisibleBlock = i;
        pageContent[currentVisibleBlock].style.top = "0";
        pageContent[currentVisibleBlock].style.transform = "scale(1)";
      }
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
function DeltaYEnd(ev) { 
  end = ev.changedTouches[0].screenY;
  if (((start - end) > 50) & (currentVisibleBlock < 3)){
    slideUp();
  }
  if (((start - end) < -50) & (currentVisibleBlock > 0 )) {
    slideDown();
  }
  selectedNavMenuElement();
  return false;
}
touchArea.addEventListener('touchstart', deltaYStart, false);
touchArea.addEventListener('touchend', DeltaYEnd, false);


function slideDown() {
  pageContent[currentVisibleBlock].style.top = "150%";
  pageContent[currentVisibleBlock].style.transform ="scale(0.9)";
  pageContent[(--currentVisibleBlock)].style.top = '0';
  pageContent[currentVisibleBlock].style.transform = "scale(1)";
}
function slideUp() {
  pageContent[currentVisibleBlock].style.top = "-150%";
  pageContent[currentVisibleBlock].style.transform = "scale(0.9)";
  pageContent[(++currentVisibleBlock)].style.top = '0';
  pageContent[currentVisibleBlock].style.transform = "scale(1)";
}


headerNavElement[0].addEventListener('click', clickAbout)
headerNavElement[1].addEventListener('click', clickContact)

function clickAbout () {
  if (currentVisibleBlock < 2) {
    pageContent[currentVisibleBlock].style.top = "150%";
    pageContent[currentVisibleBlock].style.transform = "scale(0.9)";
    currentVisibleBlock = 2;
    pageContent[currentVisibleBlock].style.top = "0";
    pageContent[currentVisibleBlock].style.transform = "scale(1)";
  }
  else {
    pageContent[currentVisibleBlock].style.top = "-150%";
    pageContent[currentVisibleBlock].style.transform = "scale(0.9)";
    currentVisibleBlock = 2;
    pageContent[currentVisibleBlock].style.top = "0";
    pageContent[currentVisibleBlock].style.transform = "scale(1)";
  }
  selectedNavMenuElement();
}
function clickContact() {
  if (currentVisibleBlock < 3) {
    pageContent[currentVisibleBlock].style.top = "150%";
    pageContent[currentVisibleBlock].style.transform = "scale(0.9)";
    currentVisibleBlock = 3;
    pageContent[currentVisibleBlock].style.top = "0";
  }
  else {
    pageContent[currentVisibleBlock].style.top = "-150%";
    pageContent[currentVisibleBlock].style.transform = "scale(0.9)";
    currentVisibleBlock = 3;
    pageContent[currentVisibleBlock].style.top = "0";
    pageContent[currentVisibleBlock].style.transform = "scale(1)";
  }
  selectedNavMenuElement();
}
function slideUp() {
  
}
function slideDown() {
  
}
function slideMid() {
  
}