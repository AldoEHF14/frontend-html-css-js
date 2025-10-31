/*Code of Animation*/
let currentPage = 0;
const pages = document.querySelectorAll('.page');

/* Avanzar página */
function flipPage() { 
    if (currentPage < pages.length) {
        pages[currentPage].classList.add('flipped');
        currentPage++;
    }else {
        pages.forEach(p => p.classList.remove('flipped'));
        currentPage = 0;
    }
}

// Retroceder página
function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].classList.remove("flipped");
  }
}