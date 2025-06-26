import styles from './Footer.module.css';
import './global.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container"> 
        <div className={styles.footerContent}>
          <div className={styles.contactInfo}>
            <p>8-913-958-27-76</p>
            <p>г. Чулым, Кооперативная д. 25Б</p>
          </div>
          <div className={styles.copyright}>
            <p>2025 Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;