// Run after page loads
function initHeaderMenu() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  if(hamburger && nav){
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      nav.classList.toggle('open');
    });
  }
}
