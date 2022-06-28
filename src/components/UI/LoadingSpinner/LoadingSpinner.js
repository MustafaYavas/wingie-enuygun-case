import styles from "./LoadingSpinner.module.scss";
import React from "react";

const LoadingSpinner = () => {

  return (
    <div className={styles.spinner}>
        <span className={styles['spinner-inner-1']}></span>
        <span className={styles['spinner-inner-2']}></span>
        <span className={styles['spinner-inner-3']}></span>
    </div>
  );
};

export default LoadingSpinner;