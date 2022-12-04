import React, { useState } from 'react';
import { Button, Space, Toast } from '@douyinfe/semi-ui';
import useClientRect from '@/hooks/use-client-rect';
import styles from './Home.module.less';
import FallCard from '@/components/fall-card';

const Home: React.FC = () => {
  const [parentRect, parentRef] = useClientRect();

  const [stop, setStop] = useState(false);
  const [cards, setCards] = useState([1, 2, 3, 4, 5]);

  const handleAdd = (): void => {
    if (cards.length >= 20) {
      Toast.warning('最多只能添加至20个');
      return;
    }
    const speed = Math.ceil(Math.random() * 10);
    setCards([...cards, speed]);
  };

  const handleReduce = (): void => {
    if (cards.length === 0) {
      Toast.warning('不能再减少了!');
      return;
    };
    const newCards = [...cards];
    newCards.splice(-1, 1);
    setCards(newCards);
  };

  return (
    <div className={styles.home}>
      <Space className={styles.options}>
        <Button type="primary" theme="solid" onClick={() => setStop(!stop)}>
          {stop ? 'start' : 'stop'}
        </Button>
        <Button type="warning" theme="solid" onClick={handleAdd}>+</Button>
        <Button type="danger" theme="solid" onClick={handleReduce}>-</Button>
      </Space>
      <div ref={parentRef} className={styles.fallWrapper}>
        {cards.map(card => (
          <FallCard key={card} parentRect={parentRect} speed={card} stop={stop} />
        ))}
      </div>
    </div>
  );
};

export default Home;
