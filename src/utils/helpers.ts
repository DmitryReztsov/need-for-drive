// Для отмены прокрутки при открытом меню
function toggleBodyOverflow(active: boolean) {
  const body = document.querySelector('body')!;
  if (active) {
    body.classList.add('active');
  } else {
    body.classList.remove('active');
  }
}

export default toggleBodyOverflow;
