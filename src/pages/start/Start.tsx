import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';

import styles from './Start.module.css';
import { fetchCoinmarketcapList } from '../../effects/cryptocurrency-list';

const Start = () => {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    fetchCoinmarketcapList(100).then((data) => {
      setList(data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        List of cryptocurrencies
      {list}
      </div>
    </div>
  );
};

export default Start;
