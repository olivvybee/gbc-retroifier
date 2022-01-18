import { useContext, useEffect, useRef } from 'react';
import { OUTPUT_SIZE } from '../../constants';
import { FileContext } from '../../context';
import { useDimensions } from '../../hooks';
import { cropToSquare } from '../../image-manipulation';

export const ResultCanvas = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [wrapperRef, wrapperDimensions] = useDimensions<HTMLDivElement>();

  const { file } = useContext(FileContext);

  const canvasSize = wrapperDimensions
    ? Math.min(wrapperDimensions.width, OUTPUT_SIZE)
    : OUTPUT_SIZE;

  useEffect(() => {
    if (!file || !canvas.current) {
      return;
    }

    const ctx = canvas.current.getContext('2d');
    if (!ctx) {
      return;
    }

    const image = new Image();
    image.onload = () => {
      const { x, y, size } = cropToSquare(image);
      ctx.drawImage(image, x, y, size, size, 0, 0, canvasSize, canvasSize);
      URL.revokeObjectURL(image.src);
    };

    const url = URL.createObjectURL(file);
    image.src = url;
  }, [file, canvasSize]);

  return (
    <div ref={wrapperRef}>
      <canvas
        className="result-canvas"
        ref={canvas}
        width={canvasSize}
        height={canvasSize}
      />
    </div>
  );
};
