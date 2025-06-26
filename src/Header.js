import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import './global.css'; 

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container"> 
        <div className={styles.logo}>
          <div className={styles.logoText}>CHUVAKIN TRANSPORT</div> 
        </div>
        <nav>
          <ul className={styles.navList}>
            <li><Link to="/" className={styles.navLink}>Главная</Link></li> 
            <li><Link to="/prices" className={styles.navLink}>Тарифы</Link></li>
            <li><Link to="/contacts" className={styles.navLink}>Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;