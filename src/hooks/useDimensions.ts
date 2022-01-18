import { RefObject, useLayoutEffect, useRef, useState } from 'react';

interface Dimensions {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const useDimensions = <T extends HTMLElement>(): [
  RefObject<T>,
  Dimensions | undefined
] => {
  const ref = useRef<T>(null);
  const [dimensions, setDimensions] = useState<Dimensions>();

  const measure = () => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const { x, y, width, height } = rect;
      setDimensions({ x, y, width, height });
    }
  };

  useLayoutEffect(() => {
    measure();
    window.addEventListener('resize', measure);

    return () => {
      window.removeEventListener('resize', measure);
    };
  }, []);

  return [ref, dimensions];
};
