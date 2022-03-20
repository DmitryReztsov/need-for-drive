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
    picture: 'https://s3-alpha-sig.figma.com/img/fa7d/238c/33edb42d3aaf49466e5400c66da0415d?Expires=1647820800&Signature=SNiKQlRiepn9cQUEk~ld8p~dRUeqrGOYWiaKJ7SyLDP-8AnN5kmRG~KNQ7LamUqDvKcNTv3MoFahrZQ2leRnx~GO39B-rWbNZK3dFZOvIrt7ZgEmJRChyBbE-psOUal7IplRuabtRMYQJjiiK6glCZSaCCtDl0VVvn3irdsG1h37SQ7jhZE57xk7X17v2-B03Zg5oZSYCifQo3XjESWNljwHA5EqLb9BCpVXI7q8FVwFzz0aRfzgEp7gc1HZfZMG18iayAV2Hm4qDZQKAZosr4plCrsW4YhTPwaYODj0CMHGdcDXLqvaxyBmBP5iL~3FfCoVkVQ18gkkxKYKpOBSoQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    tank: '0',
    colors: [
      'Оранжевый',
      'Синий',
    ],
    number: 'М066ТО',
  },
  {
    priceMin: 12000,
    priceMax: 30000,
    name: 'Nissan Almera',
    category: 'Премиум',
    picture: '"https://s3-alpha-sig.figma.com/img/4e4e/a22a/b31217afaaad6cc7af61ec4ca2f2f058?Expires=1647820800&Signature=BSibB32xAiWv3VWjT046-B1TXqTaJYzDZFlL~ku8t~9vyw9o-MyDf-rpz9uC0ykIt~1Q21qWiqV4zhBpCdc1ISdVapl8ujGmhOws-cU1ko~t8vhTLYdVjIunh~~dW3Q2Xj48sOhB83MwvRS~RlCNh93jZhKBfn5KJ7SCA7dDmtG8zuUiPC3uNs9JhPJX~zfxDaQXX~cZGjuuyZN2TRAbWuYWG9BRdddV95PTCPQYUHd9VgJHrqHdkoQea2V--jx5uN0XAK4Avx-O2bXv8w3flpU594awu6ZdieQ0-TA~BbiBqqV2uYXcYwXdUX6O0zdf~5YOaPXFQ2SkwLlp164yIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"',
    tank: '40',
    colors: [
      'Оранжевый',
      'Фиолетовый',
    ],
    number: 'М026ТО',
  },
  {
    priceMin: 12000,
    priceMax: 13000,
    name: 'Лада Гранта',
    category: 'Эконом',
    picture: 'https://s3-alpha-sig.figma.com/img/fa7d/238c/33edb42d3aaf49466e5400c66da0415d?Expires=1647820800&Signature=SNiKQlRiepn9cQUEk~ld8p~dRUeqrGOYWiaKJ7SyLDP-8AnN5kmRG~KNQ7LamUqDvKcNTv3MoFahrZQ2leRnx~GO39B-rWbNZK3dFZOvIrt7ZgEmJRChyBbE-psOUal7IplRuabtRMYQJjiiK6glCZSaCCtDl0VVvn3irdsG1h37SQ7jhZE57xk7X17v2-B03Zg5oZSYCifQo3XjESWNljwHA5EqLb9BCpVXI7q8FVwFzz0aRfzgEp7gc1HZfZMG18iayAV2Hm4qDZQKAZosr4plCrsW4YhTPwaYODj0CMHGdcDXLqvaxyBmBP5iL~3FfCoVkVQ18gkkxKYKpOBSoQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    tank: '20',
    colors: [
      'Оранжевый',
      'Синий',
    ],
    number: 'М061ТО',
  },
  {
    priceMin: 10000,
    priceMax: 25000,
    name: 'Toyota Land Cruiser',
    category: 'Эконом',
    picture: '"https://s3-alpha-sig.figma.com/img/4e4e/a22a/b31217afaaad6cc7af61ec4ca2f2f058?Expires=1647820800&Signature=BSibB32xAiWv3VWjT046-B1TXqTaJYzDZFlL~ku8t~9vyw9o-MyDf-rpz9uC0ykIt~1Q21qWiqV4zhBpCdc1ISdVapl8ujGmhOws-cU1ko~t8vhTLYdVjIunh~~dW3Q2Xj48sOhB83MwvRS~RlCNh93jZhKBfn5KJ7SCA7dDmtG8zuUiPC3uNs9JhPJX~zfxDaQXX~cZGjuuyZN2TRAbWuYWG9BRdddV95PTCPQYUHd9VgJHrqHdkoQea2V--jx5uN0XAK4Avx-O2bXv8w3flpU594awu6ZdieQ0-TA~BbiBqqV2uYXcYwXdUX6O0zdf~5YOaPXFQ2SkwLlp164yIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"',
    tank: '0',
    colors: [
      'Оранжевый',
      'Синий',
    ],
    number: 'М126ТО',
  },
  {
    priceMin: 10000,
    priceMax: 20000,
    name: 'Hyndai Sonata',
    category: 'Премиум',
    picture: 'https://s3-alpha-sig.figma.com/img/0050/d35a/3265deaece85bdd8cb88e6ae6c3b9401?Expires=1647820800&Signature=NP4ZiNxPoIsl3fLXT3OWZQzL--HBAOH1H30DxMse3NqG6RNhAPWXi0bJytN4aX5oV4E6l1KuKZ1uSip-Vl9cUpWQqR2UNGEQDDmLMtigZPyZpJ6GIPUQ8AnAmSbJ5H-Uyvu9XQZ8y3kBlEj52T2w2wRdcC-iDMCArUMlVp3rgEoVvykg1Em~KdH~DcYDCxqzJR53zKwbtkBJSz-XRm2MgHzZIiGO9Actty74NRFqtSv1ae7p8QbxIg1PKRAZCmnkdXOGtUQvhH3-j98A3rCbqhQ0Q4ewD~fFzJYB5tgkxb5olVmR1Dx~dxxj~a6U8MIRH282KW~9LzRWOHk0akOgKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    tank: '0',
    colors: [
      'Зеленый',
      'Синий',
    ],
    number: 'М066ТА',
  },
  {
    priceMin: 20000,
    priceMax: 30000,
    name: 'Лада приора',
    category: 'Эконом',
    picture: 'https://s3-alpha-sig.figma.com/img/c319/40b4/825e7de08c4523e9a81ebe8d0ad04616?Expires=1647820800&Signature=f7hc7wnr7TEVqTv8ApgjlTJ6zZYn88Vfpn6F6brN0wUyZlYDYjMYF8slQFym7M2cXCHhttYBKslT9GZLDeX1LHtP922Ka88xIDcNwTt6ENeLGYTXrPYe-Z0D5E8fB-2J2ywisO7wOsAh-l2BcKnU5IBb2jQdjhuzR1ZTBaQKu9riaHM7ajRztIO2Xfie6e-OQUS0WdcLNqBkd1tkvn9pc29pqZgM1SDLz6NMqZVoAZy7XOfH7NOM0qsfzgFXEqsIlnEAeQglOABthHD~MJZpU7T4497poNQbze7CkxxjuTkbv762zZNUGnYDQaYYlT99vFUpPj8iRDJVMRnatACE~w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    tank: '0',
    colors: [
      'Оранжевый',
      'Баклажан',
    ],
    number: 'М126ТО',
  },
];

export const tariffs = [
  'Поминутно, 7₽/мин',
  'На сутки, 1999 ₽/сутки',
];

export const bonuses = {
  fuel: 'Полный бак, 500р',
  babySeat: 'Детское кресло, 200р',
  rightHandDrive: 'Правый руль, 1600р',
};
