import { useState, useRef } from 'react';
import CN from 'classnames';

import { ReactComponent as SearchIcon } from '../../assets/svg/search_24.svg';

import styles from './SearchInput.module.css';

const SearchInput = () => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleFocus = () => {
    setIsActive(true);
  }

  const handleBlur = () => {
    setIsActive(false);
  }

  const handleInputAreaClick = () => {
    inputRef.current?.focus();
  }

  return (
    <div
      className={CN(styles.container, isActive && styles.active)}
      onClick={handleInputAreaClick}
    >
      <SearchIcon className={styles.icon} />
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="Search cryptocurrency"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  )
}

export default SearchInput;