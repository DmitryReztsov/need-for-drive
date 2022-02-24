import React from 'react';
import styles from './Geo.module.scss';
import useTypedSelector from '../../../../../../../store/selectors';
import Autocomplete from '../../../../../../common/Autocomplete/Autocomplete';
import GeoMap from '../../../../../../common/GeoMap/GeoMap';

const cities = [
  'Ульяновск',
  'Москва',
  'Санкт-Петербург',
  'Краснодар',
  'Сочи',
  'Новосибирск',
  'Воронеж',
  'Мурманск',
  'Екатеринбург',
];

const pickPoints = [
  'ул. Колотушкина',
  'ул. Кукушкина',
];

function Geo() {
  const {city, pickPoint} = useTypedSelector((state) => state.form);

  return (
    <div className={styles.geo}>
      <div className={styles.form}>
        <Autocomplete list={cities} field="city" label="Город" value={city} placeholder="Начните вводить город ..." />
        <Autocomplete list={pickPoints} field="pickPoint" label="Пункт выдачи" value={pickPoint} placeholder="Начните вводить пункт ..." />
      </div>
      <p className={styles.text}>Выбрать на карте:</p>
      <GeoMap className={styles.map} />
    </div>
  );
}

export default Geo;
