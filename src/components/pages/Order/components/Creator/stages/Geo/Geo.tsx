import React from 'react';
import styles from './Geo.module.scss';

interface IGeoProps {
  city: string,
  pickPoint: string,
  change: (e:React.ChangeEvent<HTMLInputElement>) => void,
}

function Geo(props: IGeoProps) {
  const {city, pickPoint, change} = props;

  return (
    <div className={styles.geo}>
      <div className={styles.form}>
        <label htmlFor="city">
          Город
          <input
            id="city"
            name="city"
            type="search"
            tabIndex={0}
            placeholder="Начните вводить город ..."
            onChange={change}
            value={city}
          />
        </label>
        <label htmlFor="pickPoint">
          Пункт выдачи
          <input
            id="pickPoint"
            name="pickPoint"
            type="search"
            tabIndex={0}
            placeholder="Начните вводить пункт ..."
            onChange={change}
            value={pickPoint}
          />
        </label>
      </div>
    </div>
  );
}

export default Geo;
