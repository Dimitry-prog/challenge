function showModal() {
  const modal = document.querySelector('.modal');
  const showModal = document.querySelector('.menu__link_complain');
  const submit = document.querySelector('.form__submit');
  const root = document.querySelector('.root');

  showModal.addEventListener('click', function() {
    modal.classList.add('modal__show');
    root.style.overflow = 'hidden';
  });
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.classList.remove('modal__show');
      root.style.overflow = 'scroll';
    }
  });
  submit.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.remove('modal__show');
    root.style.overflow = 'scroll';
  });
}
showModal();

export default showModal;