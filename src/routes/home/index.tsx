import React from 'react';
import { randomColor } from '@/utils';
import styles from './Home.module.less';

const Home: React.FC = () => {
  return (
    <div className={styles.home} style={{ backgroundColor: randomColor() }}>
      123
    </div>
  );
};

export default Home;
