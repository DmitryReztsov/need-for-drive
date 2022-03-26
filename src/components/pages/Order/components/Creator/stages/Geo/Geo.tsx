import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import styles from './Geo.module.scss';
import useTypedSelector from '../../../../../../../store/selectors';
import Autocomplete from '../../../../../../common/Autocomplete/Autocomplete';
import GeoMap from '../../../../../../common/GeoMap/GeoMap';
import getCity from '../../../../../../../store/api/city/actions';
import getPoint from '../../../../../../../store/api/point/actions';

function Geo() {
  const {city, pickPoint} = useTypedSelector((state) => state.form);
  const {cities} = useTypedSelector((state) => state.city);
  const {points} = useTypedSelector((state) => state.point);
  const [pointList, setPointList] = useState<string[]>([]);
  const [allPointList, setAllPointList] = useState<{city: string, address: string} []>([]);
  const dispatch = useDispatch();

  function getFilteredPoints() {
    setPointList(points
      .filter((point) => point.cityId.name === city)
      .map((point) => point.address));
  }

  function getAllPoints() {
    setAllPointList(points.map((point) => {
      return {city: point.cityId.name, address: point.address};
    }));
  }

  useEffect(() => {
    getFilteredPoints();
  }, [city]);

  useEffect(() => {
    getAllPoints();
  }, [points]);

  useEffect(() => {
    dispatch(getCity());
    dispatch(getPoint());
  }, []);
  return (
    <div className={styles.geo}>
      <div className={styles.form}>
        <Autocomplete
          list={cities.map((city) => city.name)}
          field="city"
          label="Город"
          value={city}
          placeholder="Начните вводить город ..."
          resetField="pickPoint"
          clickDropdown
        />
        <Autocomplete
          list={pointList}
          field="pickPoint"
          label="Пункт выдачи"
          value={pickPoint}
          placeholder="Начните вводить пункт ..."
        />
      </div>
      <p className={styles.text}>Выбрать на карте:</p>
      <div className={styles.map}>
        <GeoMap city={city} pickPoint={pickPoint} pickPoints={allPointList} />
      </div>
    </div>
  );
}

export default Geo;
