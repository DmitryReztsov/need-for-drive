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
  change: (e:React.ChangeEvent<HTMLInputElement>) => void,
}

function Creator(props : ICreatorProps) {
  const {
    index, city, pickPoint, change,
  } = props;

  const components = [
    <Geo city={city} pickPoint={pickPoint} change={change} />,
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
