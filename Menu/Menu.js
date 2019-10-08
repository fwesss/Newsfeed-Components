/* This is the data we will be using, study it but don't change anything, yet. */

const menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out',
];


const createMenu = (items) => {
  const menu = document.createElement('div');
  menu.className = 'menu';
  document.querySelector('.header').appendChild(menu);

  const menuList = document.createElement('ul');
  menu.appendChild(menuList);

  items.forEach((item) => {
    const menuItem = document.createElement('li');
    menuItem.textContent = item;
    menuList.appendChild(menuItem);
  });

  document.querySelector('.menu-button').addEventListener('click', () => {
    if (menu.classList.contains('menu--open')) {
      menu.classList.toggle('menu--open');
      menu.classList.toggle('menu--closed');
    } else if (menu.classList.contains('menu--closed')) {
      menu.classList.toggle('menu--closed');
      menu.classList.toggle('menu--open');
    } else {
      menu.classList.add('menu--open');
    }
  });

  return menu;
};

createMenu(menuItems);
