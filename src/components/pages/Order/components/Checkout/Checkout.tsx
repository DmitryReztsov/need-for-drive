import React, {useEffect} from 'react';
import styles from './Checkout.module.scss';
import Button from '../../../../common/Button/Button';
import useTypedSelector from '../../../../../store/selectors';
import {IStage} from '../Main/Main';
import {generateFields} from './fields';

interface ICheckoutProps {
  click?: () => void,
  activeIndex: number,
  stages: IStage [],
}

function Checkout(props: ICheckoutProps) {
  const {click, activeIndex, stages} = props;
  const form = useTypedSelector((state) => state.form);
  let fields = generateFields(form);

  useEffect(() => {
    fields = generateFields(form);
  }, [form]);

  return (
    <div className={styles.checkout}>
      <h3 className={styles.header}>Ваш заказ:</h3>
      <ul className={styles.details}>
        {fields.map((field) => {
          // Если значение пустое - не отображаем
          return field.value && (
            <li key={field.value} className={styles.row}>
              <span className={styles.label}>{field.label}</span>
              <span/>
              <span className={styles.value}>
                {field.label === 'Пункт выдачи'
                  ? (
                    <>
                      <span>
                        {field.value.split(', ')[0]}
                      </span>
                      <br/>
                      <span>
                        {field.value.split(', ')[1]}
                      </span>
                    </>
                  )
                  : field.value}
              </span>
            </li>
          );
        })}
      </ul>
      {form.price && (
        <p className={styles.price}>
          Цена:
          <span>
            {form.price}
          </span>
        </p>
      )}
      <Button
        click={click}
        className={styles.button}
        color={stages[activeIndex].vars.includes('') ? 'blocked' : ''}
        disabled={stages[activeIndex].vars.includes('')}
      >
        {stages[activeIndex].buttonLabel}
      </Button>
    </div>
  );
}

export default Checkout;
