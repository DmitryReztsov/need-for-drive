import React from 'react';
import styles from './Creator.module.scss';
import Geo from './stages/Geo/Geo';
import Total from './stages/Total/Total';
import {MemoizedModel} from './stages/Model/Model';
import Features from './stages/Features/Features';

interface ICreatorProps {
  index: number,
}

const components = [
  <Geo />,
  <MemoizedModel />,
  <Features />,
  <Total />,
];

function Creator(props: ICreatorProps) {
  const {
    index,
  } = props;

  return (
    <div className={styles.creator}>
      {components[index]}
    </div>
  );
}

export default Creator;
