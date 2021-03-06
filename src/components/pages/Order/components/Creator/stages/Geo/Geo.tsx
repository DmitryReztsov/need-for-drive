import React, {useEffect, useState} from 'react';
import styles from './Geo.module.scss';
import useTypedSelector from '../../../../../../../store/selectors';
import Autocomplete from '../../../../../../common/Autocomplete/Autocomplete';
import GeoMap from '../../../../../../common/GeoMap/GeoMap';
import {IPoint} from '../../../../../../../store/api/point/types';
import {ICity} from '../../../../../../../store/api/city/types';

function Geo() {
  const {order: {cityId, pointId}} = useTypedSelector((state) => state.order);
  const {cities} = useTypedSelector((state) => state.city);
  const {points} = useTypedSelector((state) => state.point);
  const [pointList, setPointList] = useState<string[]>([]);
  const [allPointList, setAllPointList] = useState<{city: string, address: string} []>([]);

  function getFilteredPoints() {
    setPointList(points
      .filter((point: IPoint) => point.cityId.name === cityId?.name)
      .map((point: any) => point.address));
  }

  function getAllPoints() {
    setAllPointList(points.map((point: IPoint) => {
      return {city: point.cityId.name, address: point.address};
    }));
  }

  useEffect(() => {
    getFilteredPoints();
  }, [cityId]);

  useEffect(() => {
    getAllPoints();
  }, [points]);

  return (
    <div className={styles.geo}>
      <div className={styles.form}>
        <Autocomplete
          list={cities.map((city: ICity) => city.name)}
          field="cityId"
          label="Город"
          value={cityId?.name}
          placeholder="Начните вводить город ..."
          resetField="pointId"
          clickDropdown
        />
        <Autocomplete
          list={pointList}
          field="pointId"
          label="Пункт выдачи"
          value={pointId?.address}
          placeholder="Начните вводить пункт ..."
        />
      </div>
      <p className={styles.text}>Выбрать на карте:</p>
      <div className={styles.map}>
        <GeoMap city={cityId?.name} pickPoint={pointId?.address} pickPoints={allPointList} />
      </div>
    </div>
  );
}

export default Geo;
