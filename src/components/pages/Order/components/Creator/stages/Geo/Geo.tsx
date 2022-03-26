import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import styles from './Geo.module.scss';
import useTypedSelector from '../../../../../../../store/selectors';
import Autocomplete from '../../../../../../common/Autocomplete/Autocomplete';
import GeoMap from '../../../../../../common/GeoMap/GeoMap';
import getCity from '../../../../../../../store/api/city/actions';
import getPoint from '../../../../../../../store/api/point/actions';
import {IPoint} from '../../../../../../../store/api/point/types';

function Geo() {
  const {city, pickPoint} = useTypedSelector((state) => state.form);
  const {cities} = useTypedSelector((state) => state.city);
  const {points} = useTypedSelector((state) => state.point);
  const [pointList, setPointList] = useState<IPoint []>([]);
  const dispatch = useDispatch();

  function getPoints() {
    setPickPointList(points
      .filter((point) => point.city.name === city)
      .map((point) => point));
  }

  useEffect(() => {
    getPoints();
  }, [city]);
  useEffect(() => {
    dispatch(getCity());
    dispatch(getPoint());
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
