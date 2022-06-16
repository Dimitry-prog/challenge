function showMenu() {
  const menuButton = document.querySelector('.menu__button');
  const dropDown = document.querySelector('.menu__drop-down');

  menuButton.addEventListener('click', function() {
    if(!dropDown.classList.contains('menu__drop-down_active')) {
      dropDown.classList.add('menu__drop-down_active');
      dropDown.classList.remove('animation__close');
      dropDown.classList.add('animation__open');
    }
    else {
      dropDown.classList.remove('menu__drop-down_active');
      dropDown.classList.remove('animation__open');
      dropDown.classList.add('animation__close');
    }
  });
}

showMenu();

export default showMenu;
