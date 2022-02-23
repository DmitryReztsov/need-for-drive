import React from 'react';
import styles from './Creator.module.scss';
import Geo from './stages/Geo/Geo';
import Total from './stages/Total/Total';
import Model from './stages/Model/Model';
import Features from './stages/Features/Features';

interface ICreatorProps {
  index: number,
  city: string,
  pickPoint: string,
  change: (e: React.ChangeEvent<HTMLInputElement>) => void,
  getClick: (e: React.MouseEvent<HTMLLIElement>) => void,
}

function Creator(props : ICreatorProps) {
  const {
    index, city, pickPoint, change, getClick,
  } = props;

  const components = [
    <Geo city={city} pickPoint={pickPoint} change={change} getClick={getClick} />,
    <Model />,
    <Features />,
    <Total />,
  ];

  return (
    <div className={styles.creator}>
      {components[index]}
    </div>
  );
}

export default Creator;
