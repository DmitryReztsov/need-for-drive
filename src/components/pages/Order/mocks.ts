export const cities = [
  'Ульяновск',
  'Уфа',
  'Санкт-Петербург',
  'Краснодар',
  'Екатеринбург',
  'Ростов-на-Дону',
];

export const pickPoints = [
  {
    city: 'Уфа',
    address: 'ул. Чернышевского, д. 88',
  },
  {
    city: 'Краснодар',
    address: 'ул. Монтажников, 10/2',
  },
  {
    city: 'Санкт-Петербург',
    address: '56 Литейный проспект',
  },
  {
    city: 'Ростов-на-Дону',
    address: 'ул. Большая Садовая, 47',
  },
  {
    city: 'Екатеринбург',
    address: 'ул. Уральских рабочих, 72',
  },
  {
    city: 'Ульяновск',
    address: 'ул. Льва Толстого 62',
  },
];

export interface IModels {
  priceMin: number,
  priceMax: number,
  name: string,
  category: string,
  picture: string,
  tank: string,
  colors: string[],
  number: string,
}

export const models: IModels [] = [
  {
    priceMin: 10000,
    priceMax: 20000,
    name: 'Nissan Qashqai Z5',
    category: 'Премиум',
    picture: '"https://s3-alpha-sig.figma.com/img/4e4e/a22a/b31217afaaad6cc7af61ec4ca2f2f058?Expires=1647820800&Signature=BSibB32xAiWv3VWjT046-B1TXqTaJYzDZFlL~ku8t~9vyw9o-MyDf-rpz9uC0ykIt~1Q21qWiqV4zhBpCdc1ISdVapl8ujGmhOws-cU1ko~t8vhTLYdVjIunh~~dW3Q2Xj48sOhB83MwvRS~RlCNh93jZhKBfn5KJ7SCA7dDmtG8zuUiPC3uNs9JhPJX~zfxDaQXX~cZGjuuyZN2TRAbWuYWG9BRdddV95PTCPQYUHd9VgJHrqHdkoQea2V--jx5uN0XAK4Avx-O2bXv8w3flpU594awu6ZdieQ0-TA~BbiBqqV2uYXcYwXdUX6O0zdf~5YOaPXFQ2SkwLlp164yIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"',
    tank: '0',
    colors: [
      'оранжевый',
      'синий',
    ],
    number: 'м066то',
  },
  {
    priceMin: 12000,
    priceMax: 30000,
    name: 'Nissan Almera',
    category: 'Премиум',
    picture: '"https://s3-alpha-sig.figma.com/img/4e4e/a22a/b31217afaaad6cc7af61ec4ca2f2f058?Expires=1647820800&Signature=BSibB32xAiWv3VWjT046-B1TXqTaJYzDZFlL~ku8t~9vyw9o-MyDf-rpz9uC0ykIt~1Q21qWiqV4zhBpCdc1ISdVapl8ujGmhOws-cU1ko~t8vhTLYdVjIunh~~dW3Q2Xj48sOhB83MwvRS~RlCNh93jZhKBfn5KJ7SCA7dDmtG8zuUiPC3uNs9JhPJX~zfxDaQXX~cZGjuuyZN2TRAbWuYWG9BRdddV95PTCPQYUHd9VgJHrqHdkoQea2V--jx5uN0XAK4Avx-O2bXv8w3flpU594awu6ZdieQ0-TA~BbiBqqV2uYXcYwXdUX6O0zdf~5YOaPXFQ2SkwLlp164yIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"',
    tank: '40',
    colors: [
      'оранжевый',
      'фиолетовый',
    ],
    number: 'м230то',
  },
  {
    priceMin: 12000,
    priceMax: 13000,
    name: 'Лада Гранта',
    category: 'Эконом',
    picture: '"https://s3-alpha-sig.figma.com/img/4e4e/a22a/b31217afaaad6cc7af61ec4ca2f2f058?Expires=1647820800&Signature=BSibB32xAiWv3VWjT046-B1TXqTaJYzDZFlL~ku8t~9vyw9o-MyDf-rpz9uC0ykIt~1Q21qWiqV4zhBpCdc1ISdVapl8ujGmhOws-cU1ko~t8vhTLYdVjIunh~~dW3Q2Xj48sOhB83MwvRS~RlCNh93jZhKBfn5KJ7SCA7dDmtG8zuUiPC3uNs9JhPJX~zfxDaQXX~cZGjuuyZN2TRAbWuYWG9BRdddV95PTCPQYUHd9VgJHrqHdkoQea2V--jx5uN0XAK4Avx-O2bXv8w3flpU594awu6ZdieQ0-TA~BbiBqqV2uYXcYwXdUX6O0zdf~5YOaPXFQ2SkwLlp164yIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"',
    tank: '20',
    colors: [
      'оранжевый',
      'синий',
    ],
    number: 'м066то',
  },
  {
    priceMin: 10000,
    priceMax: 25000,
    name: 'Toyota Land Cruiser',
    category: 'Эконом',
    picture: '"https://s3-alpha-sig.figma.com/img/4e4e/a22a/b31217afaaad6cc7af61ec4ca2f2f058?Expires=1647820800&Signature=BSibB32xAiWv3VWjT046-B1TXqTaJYzDZFlL~ku8t~9vyw9o-MyDf-rpz9uC0ykIt~1Q21qWiqV4zhBpCdc1ISdVapl8ujGmhOws-cU1ko~t8vhTLYdVjIunh~~dW3Q2Xj48sOhB83MwvRS~RlCNh93jZhKBfn5KJ7SCA7dDmtG8zuUiPC3uNs9JhPJX~zfxDaQXX~cZGjuuyZN2TRAbWuYWG9BRdddV95PTCPQYUHd9VgJHrqHdkoQea2V--jx5uN0XAK4Avx-O2bXv8w3flpU594awu6ZdieQ0-TA~BbiBqqV2uYXcYwXdUX6O0zdf~5YOaPXFQ2SkwLlp164yIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"',
    tank: '0',
    colors: [
      'оранжевый',
      'синий',
    ],
    number: 'м066то',
  },
  {
    priceMin: 10000,
    priceMax: 20000,
    name: 'Hyndai Sonata',
    category: 'Премиум',
    picture: '"https://s3-alpha-sig.figma.com/img/4e4e/a22a/b31217afaaad6cc7af61ec4ca2f2f058?Expires=1647820800&Signature=BSibB32xAiWv3VWjT046-B1TXqTaJYzDZFlL~ku8t~9vyw9o-MyDf-rpz9uC0ykIt~1Q21qWiqV4zhBpCdc1ISdVapl8ujGmhOws-cU1ko~t8vhTLYdVjIunh~~dW3Q2Xj48sOhB83MwvRS~RlCNh93jZhKBfn5KJ7SCA7dDmtG8zuUiPC3uNs9JhPJX~zfxDaQXX~cZGjuuyZN2TRAbWuYWG9BRdddV95PTCPQYUHd9VgJHrqHdkoQea2V--jx5uN0XAK4Avx-O2bXv8w3flpU594awu6ZdieQ0-TA~BbiBqqV2uYXcYwXdUX6O0zdf~5YOaPXFQ2SkwLlp164yIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"',
    tank: '0',
    colors: [
      'зеленый',
      'синий',
    ],
    number: 'м216ор',
  },
  {
    priceMin: 20000,
    priceMax: 30000,
    name: 'Лада приора',
    category: 'Эконом',
    picture: '"https://s3-alpha-sig.figma.com/img/4e4e/a22a/b31217afaaad6cc7af61ec4ca2f2f058?Expires=1647820800&Signature=BSibB32xAiWv3VWjT046-B1TXqTaJYzDZFlL~ku8t~9vyw9o-MyDf-rpz9uC0ykIt~1Q21qWiqV4zhBpCdc1ISdVapl8ujGmhOws-cU1ko~t8vhTLYdVjIunh~~dW3Q2Xj48sOhB83MwvRS~RlCNh93jZhKBfn5KJ7SCA7dDmtG8zuUiPC3uNs9JhPJX~zfxDaQXX~cZGjuuyZN2TRAbWuYWG9BRdddV95PTCPQYUHd9VgJHrqHdkoQea2V--jx5uN0XAK4Avx-O2bXv8w3flpU594awu6ZdieQ0-TA~BbiBqqV2uYXcYwXdUX6O0zdf~5YOaPXFQ2SkwLlp164yIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"',
    tank: '0',
    colors: [
      'оранжевый',
      'баклажан',
    ],
    number: 'а062то',
  },
];
