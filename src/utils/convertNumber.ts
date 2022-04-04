export default function convertNumber(number: string) {
  if (!number) return '';
  return number.length === 6
    ? `${number[0]} ${number.slice(1, 4)} ${number.slice(4)} 73`
    : `${number![0]} ${number!.slice(1, 4)} ${number!.slice(4, 6)} ${number!.slice(6)}`;
}
