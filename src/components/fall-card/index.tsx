import React, { useState, useEffect, useRef, useMemo } from 'react';
import useClientRect from '@/hooks/use-client-rect';
import { FallCardProps } from '@/types';
import { randomColor } from '@/utils';
import styles from './FallCard.module.less';

const FallCard: React.FC<FallCardProps> = (props) => {
  const { parentRect, speed = 3, stop = false } = props;

  const intervalRef = useRef<any>();

  const [width, setWidth] = useState(Math.max(50, Math.ceil(Math.random() * 300)));
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState<string | number>(() => `${Math.random() * 100}%`);
  const [background, setBackground] = useState(() => randomColor());

  const [cardRect, cardRef] = useClientRect(top);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTop((pre) => pre + speed);
    }, 5);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (stop) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    } else if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTop((pre) => pre + speed);
      }, 5);
    } else if (cardRect && parentRect && (cardRect.top - parentRect.top) > parentRect.height) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
      setTimeout(() => {
        const randomWidth = Math.max(50, Math.ceil(Math.random() * 300));
        const randomLeft = Math.min(Math.random() * parentRect.width, parentRect.width - randomWidth);
        setTop(-cardRect.height);
        setLeft(randomLeft);
        setBackground(randomColor());
        setWidth(randomWidth);
        intervalRef.current = setInterval(() => {
          setTop((pre) => pre + speed);
        }, 10);
      }, 100);
    }
  }, [cardRect, parentRect, stop]);

  return (
    <div
      ref={cardRef}
      className={styles.fallCard}
      style={{ top, backgroundColor: background, left, width, height: width * 1.2 }}
    />
  );
};

export default FallCard;
