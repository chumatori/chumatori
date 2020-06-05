var currentVisibleBlock = 0;
const pageContent = document.querySelectorAll('section');

function hideAll() {
  for (i = 0; i < pageContent.length; i++) {
    pageContent[i].style.display = 'none';

  }
}
//scroll

function trackWhee(elem, callback) {
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
trackWhee(window, function () {

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
  }
  return false;
})