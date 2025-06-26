import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import './global.css';

const Home = () => {
  return (
    <section className={styles.hero}>
      <div className="container"> 
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>ГРУЗОПЕРЕВОЗКИ</h2>
          <div className={styles.divider}></div>
          <p className={styles.heroText}>Доставка грузов любой сложности<br />по Новосибирской области</p>
          <div className={styles.buttons}>
            <Link to="/prices" className={`${styles.btn} ${styles.btnPrimary}`}>Рассчитать стоимость</Link>
            <Link to="/contacts" className={`${styles.btn} ${styles.btnOutline}`}>Связаться</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;