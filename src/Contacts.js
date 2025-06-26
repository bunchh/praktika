import React, { useState } from 'react';
import styles from './Contacts.module.css';
import './global.css';

const Contacts = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Ваша заявка отправлена");
    e.target.reset();
  };

  return (
    <section className={styles.contactss}>
      <div className={styles.container1}>
        <div className={styles.contactpanel}>
          <div className={styles.contactheader}>
            <h2>СВЯЗАТЬСЯ С НАМИ</h2>
          </div>

          <div className={styles.contactbody}>
            <form className={styles.contactform} onSubmit={handleSubmit}>
              <div className={styles.formrow}>
                <div className={styles.formgroup}>
                  <label htmlFor="from"><span className={styles.inputprefix}>ОТКУДА</span></label>
                  <input type="text" id="from" placeholder="Станция отправления" required className={styles.formInput} />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="to"><span className={styles.inputprefix}>КУДА</span></label>
                  <input type="text" id="to" placeholder="Станция назначения" required className={styles.formInput} />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="cargo"><span className={styles.inputprefix}>ГРУЗ</span></label>
                <textarea 
                  id="cargo" 
                  placeholder="Описание груза (масса, габариты, особые условия)" 
                  required
                  className={styles.formTextarea}
                ></textarea>
              </div>

              <div className={styles.formrow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name"><span className={styles.inputLabel}>ВАШЕ ИМЯ</span></label>
                  <input type="text" id="name" placeholder="Ваше имя" required className={styles.formInput} />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="comm"><span className={styles.inputLabel}>НОМЕР ТЕЛЕФОНА</span></label>
                  <input type="text" id="comm" placeholder="Номер телефона" required className={styles.formInput} />
                </div>
              </div>

              <div className={styles.formActions}>
                <button type="submit" className={`${styles.btn} ${styles.submitbtn}`}>
                  ОТПРАВИТЬ СООБЩЕНИЕ
                </button>
                {status && <div className={styles.statusmessage}>{status}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;