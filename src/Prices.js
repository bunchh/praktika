import Calculator from './Calculator';
import styles from './Prices.module.css';
import './global.css';

const Prices = () => {
  return (
    <section className={styles.pricesection}>
      <div className={styles.container}>
        <Calculator />

        <div className={styles.tarifftable}>
          <h3>ПОПУЛЯРНЫЕ ТАРИФЫ</h3>
          <div className={styles.dividerline}></div>
          <table className={styles.pricetable}>
            <thead>
              <tr>
                <th>МАРШРУТ (расстояние)</th>
                <th>ГАЗЕЛЬ (50₽/км)</th>
                <th>ГРУЗОВИК (80₽/км)</th>
                <th>ФУРА (120₽/км)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Новосибирск - Бердск (30км)</td>
                <td>3 000 ₽</td>
                <td>3 000 ₽</td>
                <td>3 600 ₽</td>
              </tr>
              <tr>
                <td>Новосибирск - Кольцово (50км)</td>
                <td>3 000 ₽</td>
                <td>4 000 ₽</td>
                <td>6 000 ₽</td>
              </tr>
              <tr>
                <td>Новосибирск - Куйбышев (180км)</td>
                <td>9 000 ₽</td>
                <td>14 400 ₽</td>
                <td>21 600 ₽</td>
              </tr>
              <tr>
                <td>Новосибирск - Барабинск (300км)</td>
                <td>15 000 ₽</td>
                <td>24 000 ₽</td>
                <td>36 000 ₽</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Prices;