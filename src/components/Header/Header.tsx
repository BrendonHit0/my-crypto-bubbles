import LogoIcon from '../../assets/images/logo64.png';
import SearchInput from '../SearchInput/SearchInput';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={LogoIcon} alt="logo" />
      <h1 className={styles.title}>My Crypto Bubbles</h1>
      <div className={styles.gap} />
      <SearchInput />
    </div>
  )
}

export default Header;