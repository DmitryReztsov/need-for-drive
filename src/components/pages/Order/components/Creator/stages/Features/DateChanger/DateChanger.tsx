import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DateChanger.module.scss';
import DateInput from '../../../../../../../common/inputs/DateInput/DateInput';
import useTypedSelector from '../../../../../../../../store/selectors';

function DateChanger() {
  const {dateFrom, dateTo} = useTypedSelector((state) => state.form);

  function setFromTimeBorder() {
    const today = new Date(dateFrom);
    today.setHours(0, 0, 0, 0);
    return dateTo - dateFrom < 86400000 ? today : new Date(0);
  }

  function setToTimeBorder() {
    const today = new Date(dateFrom);
    today.setHours(23, 59, 0, 0);
    return dateTo - dateFrom < 86400000 ? today : new Date(Infinity);
  }

  return (
    <div className={styles.changer}>
      <DateInput
        label="С"
        value={new Date(dateFrom)}
        field="dateFrom"
        minDate={new Date()}
        maxDate={new Date(dateTo)}
        startDate={new Date(dateFrom)}
        endDate={new Date(dateTo)}
        minTime={setFromTimeBorder()}
        maxTime={new Date(dateTo)}
      />
      <DateInput
        label="По"
        value={new Date(dateTo)}
        field="dateTo"
        minDate={new Date(dateFrom)}
        startDate={new Date(dateFrom)}
        endDate={new Date(dateTo)}
        disabled={!dateFrom}
        minTime={new Date(dateFrom)}
        maxTime={setToTimeBorder()}
      />
    </div>
  );
}

export default DateChanger;
