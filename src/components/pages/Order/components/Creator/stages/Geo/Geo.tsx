import React, {useEffect} from 'react';
import styles from './Geo.module.scss';
import useTypedSelector from '../../../../../../../store/selectors';
import Autocomplete from '../../../../../../common/Autocomplete/Autocomplete';
import GeoMap from '../../../../../../common/GeoMap/GeoMap';
import {cities, pickPoints} from './mocks';
import useAppendParams from '../../../../../../../hooks/useAppendParams';

function Geo() {
  const {city, pickPoint} = useTypedSelector((state) => state.form);
  const appendParams = useAppendParams();

  function getCityPickPoints(): string[] {
    return pickPoints
      .filter((pickPoint) => pickPoint.city === city)
      .map((pickPoint) => pickPoint.address);
  }

  useEffect(() => {
    appendParams('pickPoint', '');
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
          list={getCityPickPoints()}
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
