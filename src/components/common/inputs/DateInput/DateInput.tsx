import React from 'react';
import DatePicker, {setDefaultLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import styles from './DateInput.module.scss';
import useAppendParams from '../../../../hooks/useAppendParams';
import {intervalMinutes} from '../../../../utils/time';

setDefaultLocale(ru);

const datePickerSettings = {
  showTimeSelect: true,
  timeIntervals: intervalMinutes,
  dateFormat: 'Pp',
  locale: ru,
  timeCaption: 'Время',
  isClearable: true,
};

interface IDateInputProps {
  label: string,
  value: Date,
  field: string,
  minDate?: Date,
  maxDate?: Date,
  startDate?: Date,
  endDate?: Date,
  disabled?: boolean,
  filterTime?: (date: Date) => boolean,
  onClickOutside?: () => void,
}

function DateInput(props: IDateInputProps) {
  const {
    label, value, field, minDate, maxDate, startDate, endDate, disabled, filterTime, onClickOutside,
  } = props;
  const appendParams = useAppendParams();
  function changeHandler(field: string, date: Date) {
    appendParams(field, date ? date.getTime() : field === 'dateTo' ? 0 : Date.now());
  }

  return (
    <label htmlFor={label} className={styles.label}>
      {label}
      <DatePicker
        {...datePickerSettings}
        selected={value.getTime() || null}
        onChange={(date: Date) => changeHandler(field, date)}
        className={styles.date}
        id={label}
        placeholderText="Введите дату и время"
        minDate={minDate}
        maxDate={maxDate}
        startDate={startDate}
        endDate={endDate}
        disabled={disabled}
        filterTime={filterTime}
        onClickOutside={onClickOutside}
      />
    </label>

  );
}

export default DateInput;
