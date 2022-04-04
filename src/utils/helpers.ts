// Для отмены прокрутки при открытом меню

export default function toggleBodyOverflow(active: boolean) {
  const body = document.querySelector('body')!;
  if (active) {
    body.classList.add('active');
  } else {
    body.classList.remove('active');
  }
}
