import styles from './Alert.module.scss';

import React, { useEffect } from 'react';
import { MdCheckCircle, MdClose } from 'react-icons/md';

const Alert = ({ message, setIsVisible }) => {

    const closeHandler = () => {
        setIsVisible(false)
    }

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(false);
        }, 2000);
    }, [setIsVisible]);

    const AlertComponent = () => {
        return (
          <div
            className={styles.alertCompContainer}
            style={{ backgroundColor: 'c6f6d5' }}
          > 
              <MdCheckCircle htmlcolor='#38A169' />
              <p className={styles.alertMessage}>{message}</p>
              <div onClick={closeHandler} className={styles.close}>
                  <MdClose/>
              </div>
          </div>
      );
    };

    return (
        <AlertComponent />
    );
};

export default Alert;