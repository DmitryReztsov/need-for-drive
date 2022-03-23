import React, {useEffect} from 'react';
import styles from './Confirm.module.scss';
import Button from '../../Button/Button';
import toggleBodyOverflow from '../../../../utils/helpers';

interface IConfirmProps {
  accept: () => void,
  deny: () => void,
  loading?: boolean,
}

function Confirm({accept, deny, loading} : IConfirmProps) {
  useEffect(() => {
    toggleBodyOverflow(true);
    return () => toggleBodyOverflow(false);
  }, []);
  return (
    <div className={styles.confirm}>
      <div className={styles.dialog}>
        <div className={styles.text}>Подтвердить заказ</div>
        <div className={styles.buttons}>
          <Button click={accept} loading={loading}>Подтвердить</Button>
          <Button click={deny} color="magenta">Вернуться</Button>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
