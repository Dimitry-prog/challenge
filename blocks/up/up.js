function up() {
  const up = document.querySelector('.up');
  if (this.scrollY >= 460) up.classList.add('up__show');
  else up.classList.remove('up__show');
}
window.addEventListener('scroll', up);
export default up;