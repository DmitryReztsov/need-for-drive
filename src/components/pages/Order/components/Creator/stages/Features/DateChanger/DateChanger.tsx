import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DateChanger.module.scss';
import DateInput from '../../../../../../../common/inputs/DateInput/DateInput';
import useTypedSelector from '../../../../../../../../store/selectors';
import {intervalMinutesInMilSeconds} from '../../../../../../../../utils/time';
import useAppendParams from '../../../../../../../../hooks/useAppendParams';

function DateChanger() {
  const {dateFrom, dateTo} = useTypedSelector((state) => state.form);
  const appendParams = useAppendParams();

  // Ограничиваем выбор времени ранее текущего
  function timeFromFilter(date: Date) {
    return date >= new Date();
  }

  // Делаем невозможным выбор времени конца аренды ранее чем за 10 мин от начала
  function timeToFilter(date: Date) {
    return date >= new Date(dateFrom + intervalMinutesInMilSeconds);
  }

  // Если дата начала стала старше конца, добавляем к дате конца 10 мин от даты начала
  function fixDate() {
    if (dateFrom > dateTo) {
      appendParams('dateTo', dateFrom + intervalMinutesInMilSeconds);
    }
  }

  return (
    <div className={styles.changer}>
      <DateInput
        label="С"
        value={new Date(dateFrom)}
        field="dateFrom"
        minDate={new Date()}
        startDate={new Date(dateFrom)}
        endDate={new Date(dateTo)}
        filterTime={timeFromFilter}
        onClickOutside={fixDate}
      />
      <DateInput
        label="По"
        value={new Date(dateTo)}
        field="dateTo"
        minDate={new Date(dateFrom)}
        startDate={new Date(dateFrom)}
        endDate={new Date(dateTo)}
        disabled={!dateFrom}
        filterTime={timeToFilter}
        onClickOutside={fixDate}
      />
    </div>
  );
}

export default DateChanger;
