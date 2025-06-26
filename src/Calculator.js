import React, { useState, useEffect } from 'react';
import styles from './Prices.module.css';

const Calculator = () => {
  const [distance, setDistance] = useState(100);
  const [pricePerKm, setPricePerKm] = useState(50);
  const [total, setTotal] = useState(8000);
  const [extras, setExtras] = useState({
    express: false,
    insurance: false,
    oversized: false
  });

  useEffect(() => {
    calculatePrice();
  }, [distance, pricePerKm, extras]);

  const calculatePrice = () => {
    let calculatedTotal = distance * pricePerKm;
    calculatedTotal = Math.max(calculatedTotal, 3000);

    if (extras.express) calculatedTotal *= 1.4;
    if (extras.insurance) calculatedTotal *= 1.15;
    if (extras.oversized) calculatedTotal *= 1.5;

    calculatedTotal = Math.round(calculatedTotal / 100) * 100;
    setTotal(calculatedTotal);
  };

  const handleExtraChange = (e) => {
    const { name, checked } = e.target;
    setExtras(prev => ({ ...prev, [name]: checked }));
  };

  return (
    <div className={styles.calculator}>
      <h2>КАЛЬКУЛЯТОР СТОИМОСТИ</h2>
      <div className={styles.dividerline}></div>

      <form className={styles.calcform}>
        <div className={styles.inputgroup}>
          <label htmlFor="distance">Расстояние (км):</label>
          <input 
            type="range" 
            id="distance" 
            min="30" 
            max="500" 
            step="10" 
            value={distance}
            onChange={(e) => setDistance(parseInt(e.target.value))}
            className={styles.rangeslider}
          />
          <div className={styles.slidervalue}>{distance} км</div>
        </div>

        <div className={styles.inputgroup}>
          <label htmlFor="ship">Тип транспорта:</label>
          <select 
            id="ship" 
            className={styles.formselect}
            value={pricePerKm}
            onChange={(e) => setPricePerKm(parseInt(e.target.value))}
          >
            <option value="50">Газель (до 1.5т) - 50₽/км</option>
            <option value="80">Бортовой грузовик (до 5т) - 80₽/км</option>
            <option value="120">Фура (до 20т) - 120₽/км</option>
          </select>
        </div>

        <div className={styles.inputgroup}>
          <label>Дополнительные услуги:</label>
          <div className={styles.optionslist}>
            <label>
              <input 
                type="checkbox" 
                name="express" 
                checked={extras.express}
                onChange={handleExtraChange}
              /> Срочная доставка (+40%)
            </label>
            <label>
              <input 
                type="checkbox" 
                name="insurance" 
                checked={extras.insurance}
                onChange={handleExtraChange}
              /> Страховка груза (+15%)
            </label>
            <label>
              <input 
                type="checkbox" 
                name="oversized" 
                checked={extras.oversized}
                onChange={handleExtraChange}
              /> Негабаритный груз (+50%)
            </label>
          </div>
        </div>
      </form>

      <div className={styles.resultblock}>
        <div className={styles.scananimation}>
          <div className={styles.scanline}></div>
        </div>
        <h3>ИТОГОВАЯ СТОИМОСТЬ:</h3>
        <div className={styles.priceresult}>{total.toLocaleString('ru-RU')} ₽</div>
        <div className={styles.currencytext}>*Минимальный тариф 3 000 ₽</div>
      </div>
    </div>
  );
};

export default Calculator;