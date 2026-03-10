// Fade-in efekts visām lapām
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');
  document.body.classList.remove('preload');
});

// Back button plūstošs efekts
const backButton = document.getElementById("backButton");
if (backButton) {
  backButton.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.classList.remove('fade-in');
    setTimeout(() => {
      window.location.href = this.href;
    }, 1200); // tieši tāds pats kā CSS transition
  });
}

// Modal logi ar plūstošu ieplūšanu
const modalLinks = document.querySelectorAll('.augu-saraksts a');
const modals = document.querySelectorAll('.modal');

modalLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const modalId = this.dataset.modal;
    const modal = document.getElementById(modalId);
    if(modal){
      // restartē modāļa plūstošo efektu
      modal.classList.remove('show');
      setTimeout(() => {
        modal.classList.add('show');
      }, 10); 
    }
  });
});

modals.forEach(modal => {
  const closeBtn = modal.querySelector('.close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  }
});

// Aizvēršana, klikšķinot ārpus modal loga
window.addEventListener('click', e => {
  modals.forEach(modal => {
    if (e.target === modal) modal.classList.remove('show');
  });
});

// Meklē tikai Jaunumu saites ar modal atribūtu
const jaunumuLinks = document.querySelectorAll('.jaunumi a[data-modal]');
const jaunumuModals = document.querySelectorAll('.jaunumi .modal');

jaunumuLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const modalId = this.dataset.modal;
    const modal = document.getElementById(modalId);
    if(modal){
      modal.style.display = 'block';
    }
  });
});

// Aizvēršana
jaunumuModals.forEach(modal => {
  const closeBtn = modal.querySelector('.close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
});

// Klikšķis ārpus modal loga
window.addEventListener('click', e => {
  jaunumuModals.forEach(modal => {
    if (e.target === modal) modal.style.display = 'none';
  });
});