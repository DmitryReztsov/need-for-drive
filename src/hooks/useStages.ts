import useTypedSelector from '../store/selectors';

function useStages() {
  const {
    cityId, pointId, carId, dateFrom, dateTo, tariff,
  } = useTypedSelector((state) => state.form);

  // Здесь храним название для навигации, переменные страниц заказа и текст кнопки
  return [
    // Первое поле отвечает за название шага
    // Второе - за переменные типа required
    // Третье - за название кнопки
    {
      name: 'Местоположение',
      vars: [cityId, pointId],
      buttonLabel: 'Выбрать модель',
    },
    {
      name: 'Модель',
      vars: [carId],
      buttonLabel: 'Дополнительно',
    },
    {
      name: 'Дополнительно',
      vars: [dateFrom, dateTo, tariff],
      buttonLabel: 'Итого',
    },
    {
      name: 'Итого',
      vars: [],
      buttonLabel: 'Заказать',
    },
  ];
}

export default useStages;
