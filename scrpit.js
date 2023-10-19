function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  var link = document.createElement('a');

link.href = url;

link.download = 'https://drive.google.com/file/d/1wUKStLvZTNegH-AcxDg_R4ERrEmMNpMz/view?usp=share_link';

link.dispatchEvent(new MouseEvent('click'));