import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { FallCardProps } from '@/types';
import { randomColor, randomNumber } from '@/utils';
import styles from './FallCard.module.less';

const FallCard: React.FC<FallCardProps> = (props) => {
  const { parentRect, speed = 3, stop = false } = props;

  const cardRef = useRef<any>();

  const [backgroundColor, setBackgroundColor] = useState(() => randomColor());
  const [left, setLeft] = useState<string | number>(() => `calc(${Math.random() * 100}% - 500px)`);
  const [width, setWidth] = useState(() => randomNumber(50, 500));

  const handleAnimationIteration = useCallback((e: any): void => {
    if (parentRect) {
      e.target.style.animationPlayState = 'paused';
      const randomWidth = Math.max(50, Math.ceil(Math.random() * 300));
      const randomLeft = Math.min(Math.random() * parentRect.width, parentRect.width - randomWidth);
      setLeft(randomLeft);
      setWidth(randomWidth);
      setBackgroundColor(randomColor());
      e.target.style.animationPlayState = 'running';
    }
  }, [parentRect]);

  useLayoutEffect(() => {
    const card = cardRef.current;
    card.addEventListener('animationiteration', handleAnimationIteration, false);
    return () => card.removeEventListener('animationiteration', handleAnimationIteration);
  }, [handleAnimationIteration]);

  useLayoutEffect(() => {
    const card = cardRef.current;
    if (stop) {
      card.style.animationPlayState = 'paused';
    } else {
      card.style.animationPlayState = 'running';
    }
  }, [stop]);

  return (
    <div
      ref={cardRef}
      className={styles.fallCard}
      style={{ width, height: width * 1.2, backgroundColor, left, animationDuration: `${speed}s` }}
    />
  );
};

export default FallCard;
