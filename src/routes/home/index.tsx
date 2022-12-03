import React, { useEffect, useState, useRef } from 'react';
import { randomColor } from '@/utils';
import { Button } from '@douyinfe/semi-ui';
import useClientRect from '@/hooks/use-client-rect';
import styles from './Home.module.less';

const Home: React.FC = () => {
  const [top, setTop] = useState(0);

  const intervalRef = useRef<any>();

  const [parentRect, parentRef] = useClientRect();
  const [cardRect, cardRef] = useClientRect(top);

  useEffect(() => {
    intervalRef.current =  setInterval(() => {
      setTop((pre) => pre + 5);
    }, 10);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleClick = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    } else {
      intervalRef.current = setInterval(() => {
        setTop((pre) => pre + 5);
      }, 10);
    }
  };

  useEffect(() => {
    if (cardRect && parentRect && (cardRect.top - cardRect.height) > parentRect.height) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
      setTimeout(() => {
        setTop(-cardRect.height);
        intervalRef.current = setInterval(() => {
          setTop((pre) => pre + 5);
        }, 10);
      }, 100);
    }
  }, [cardRect, parentRect]);

  return (
    <div ref={parentRef} className={styles.home}>
      <Button type="primary" theme="light" onClick={handleClick}>
        stop
      </Button>
      <div ref={cardRef} className={styles.card} style={{ top }} />
    </div>
  );
};

export default Home;
