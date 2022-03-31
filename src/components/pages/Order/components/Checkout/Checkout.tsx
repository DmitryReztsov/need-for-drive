import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import styles from './Checkout.module.scss';
import Button from '../../../../common/Button/Button';
import useTypedSelector from '../../../../../store/selectors';
import {IStage} from '../Main/Main';
import {generateFields, generatePrice, generatePriceString} from './fields';

interface ICheckoutProps {
  click?: () => void,
  activeIndex: number,
  stages: IStage [],
}

function Checkout({click, activeIndex, stages}: ICheckoutProps) {
  const {id} = useParams();
  const form = useTypedSelector((state) => state.form);
  const {order} = useTypedSelector((state) => state.order);
  let actualForm = id ? order : form;

  let price;
  let fields = generateFields(id ? order : form);
  let priceString;

  useEffect(() => {
    actualForm = id ? order : form;
    fields = generateFields(actualForm);
    price = generatePrice(actualForm);
    priceString = generatePriceString(price, actualForm);
  }, [form]);
  return (
    <div className={styles.checkout}>
      <h3 className={styles.header}>Ваш заказ:</h3>
      <ul className={styles.details}>
        {fields.map((field) => {
          // Если значение пустое - не отображаем
          return field.value && (
            <li key={field.label} className={styles.row}>
              <span className={styles.label}>{field.label}</span>
              <span />
              <span className={styles.value}>
                {field.label === 'Пункт выдачи'
                  ? (
                    <>
                      {/* делим на спаны из-за особенностей отрисовки адреса */}
                      <span>
                        {field.value.split(', ')[0]}
                      </span>
                      <br />
                      <span>
                        {field.value.split(', ').slice(1, 3).join(', ')}
                      </span>
                    </>
                  )
                  : field.value}
              </span>
            </li>
          );
        })}
      </ul>
      {form.carId?.priceMin && (
        <p className={styles.price}>
          Цена:
          <span>
            {priceString}
          </span>
        </p>
      )}
      <Button
        click={click}
        className={styles.button}
        color={stages[activeIndex].vars.some((elem) => !elem) ? 'blocked' : id ? 'magenta' : ''}
        disabled={stages[activeIndex].vars.includes('')}
      >
        {id ? 'Отменить' : stages[activeIndex].buttonLabel}
      </Button>
    </div>
  );
}

export default Checkout;
