import React from 'react';
import styles from './Creator.module.scss';
import Geo from './stages/Geo/Geo';
import Total from './stages/Total/Total';
import {MemoizedModel} from './stages/Model/Model';
import Features from './stages/Features/Features';

interface ICreatorProps {
  index: number,
}

function Creator({index}: ICreatorProps) {
  const components = [
    <Geo />,
    <MemoizedModel />,
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
