const pageContent = document.querySelectorAll('section');
function hideAll() {
  for( i=0; i < pageContent.length; i++) {
      pageContent[i].style.display = 'none';
    
  }
}
