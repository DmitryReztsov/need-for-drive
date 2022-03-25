import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import styles from './Geo.module.scss';
import useTypedSelector from '../../../../../../../store/selectors';
import Autocomplete from '../../../../../../common/Autocomplete/Autocomplete';
import GeoMap from '../../../../../../common/GeoMap/GeoMap';
import {cities, pickPoints} from '../../../../mocks';
import getCity from '../../../../../../../store/api/city/actions';

function Geo() {
  const {city, pickPoint} = useTypedSelector((state) => state.form);
  const [pickPointsList, setPickPointList] = useState<string []>([]);
  const dispatch = useDispatch();

  function getCityPickPoints() {
    setPickPointList(pickPoints
      .filter((pickPoint) => pickPoint.city === city)
      .map((pickPoint) => pickPoint.address));
  }

  useEffect(() => {
    getCityPickPoints();
  }, [city]);
  useEffect(() => {
    dispatch(getCity());
  }, []);
  return (
    <div className={styles.geo}>
      <div className={styles.form}>
        <Autocomplete
          list={cities}
          field="city"
          label="Город"
          value={city}
          placeholder="Начните вводить город ..."
          resetField="pickPoint"
          clickDropdown
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
      <div className={styles.map}>
        <GeoMap city={city} pickPoint={pickPoint} pickPoints={pickPoints} />
      </div>
    </div>
  );
}

export default Geo;
