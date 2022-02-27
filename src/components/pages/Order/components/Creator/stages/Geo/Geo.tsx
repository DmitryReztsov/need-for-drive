import React, {useEffect, useState} from 'react';
import styles from './Geo.module.scss';
import useTypedSelector from '../../../../../../../store/selectors';
import Autocomplete from '../../../../../../common/Autocomplete/Autocomplete';
import GeoMap from '../../../../../../common/GeoMap/GeoMap';
import {cities, pickPoints} from '../../../../mocks';

function Geo() {
  const {city, pickPoint} = useTypedSelector((state) => state.form);
  const [pickPointsList, setPickPointList] = useState<string []>([]);

  function getCityPickPoints() {
    setPickPointList(pickPoints
      .filter((pickPoint) => pickPoint.city === city)
      .map((pickPoint) => pickPoint.address));
  }

  useEffect(() => {
    getCityPickPoints();
  }, [city]);
  return (
    <div className={styles.geo}>
      <div className={styles.form}>
        <Autocomplete
          list={cities}
          field="city"
          label="Город"
          value={city}
          placeholder="Начните вводить город ..."
        />
        <Autocomplete
          list={pickPointsList}
          field="pickPoint"
          label="Пункт выдачи"
          value={pickPoint}
          placeholder="Начните вводить пункт ..."
        />
      </div>
      <p className={styles.text}>Выбрать на карте:</p>
      <GeoMap className={styles.map} city={city} pickPoint={pickPoint} pickPoints={pickPoints} />
    </div>
  );
}

export default Geo;
