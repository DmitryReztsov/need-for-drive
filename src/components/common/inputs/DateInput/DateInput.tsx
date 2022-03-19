import React from 'react';
import DatePicker, {setDefaultLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import styles from './DateInput.module.scss';
import useAppendParams from '../../../../hooks/useAppendParams';

setDefaultLocale(ru);

const datePickerSettings = {
  showTimeSelect: true,
  timeIntervals: 10,
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
  minTime?: Date,
  maxTime?: Date,
}

function DateInput(props: IDateInputProps) {
  const {
    label, value, field, minDate, maxDate, startDate, endDate, disabled, minTime, maxTime,
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
        minTime={minTime}
        maxTime={maxTime}
        startDate={startDate}
        endDate={endDate}
        disabled={disabled}
      />
    </label>

  );
}

export default DateInput;
