export default function getButtonColor(color: string): string {
  if (color !== 'green') {
    return `button button_${color}`;
  }
  return 'button';
}
