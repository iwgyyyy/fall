import React, { useState } from 'react';
import { Button, Space, Toast } from '@douyinfe/semi-ui';
import useClientRect from '@/hooks/use-client-rect';
import FallCard from '@/components/fall-card';
import { v4 as uuid } from 'uuid';
import styles from './Home.module.less';

const Home: React.FC = () => {
  const [parentRect, parentRef] = useClientRect();

  const [stop, setStop] = useState(false);
  const [cards, setCards] = useState(() => [
    { speed: 1, key: uuid() },
    { speed: 2, key: uuid() },
    { speed: 3, key: uuid() },
    { speed: 4, key: uuid() },
    { speed: 5, key: uuid() }
  ]);

  const handleAdd = (): void => {
    const speed = Math.ceil(Math.random() * 10);
    setCards([...cards, { speed, key: uuid() }]);
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
          <FallCard key={card.key} parentRect={parentRect} speed={card.speed} stop={stop} />
        ))}
      </div>
    </div>
  );
};

export default Home;
