import { useContext, useEffect, useRef } from 'react';

import { OUTPUT_SIZE, RENDER_SIZE } from '../../constants';
import { FileContext } from '../../context';
import { useDimensions } from '../../hooks';
import { cropToSquare, retroify, scale } from '../../image-manipulation';

import './ResultCanvas.scss';

export const ResultCanvas = () => {
  const renderCanvas = useRef<HTMLCanvasElement>(null);
  const outputCanvas = useRef<HTMLCanvasElement>(null);

  const [wrapperRef, wrapperDimensions] = useDimensions<HTMLDivElement>();
  const outputCanvasSize = wrapperDimensions
    ? Math.min(wrapperDimensions.width, OUTPUT_SIZE)
    : OUTPUT_SIZE;

  const { file } = useContext(FileContext);

  useEffect(() => {
    if (!file || !renderCanvas.current || !outputCanvas.current) {
      return;
    }

    const renderCtx = renderCanvas.current.getContext('2d');
    const outputCtx = outputCanvas.current.getContext('2d');

    if (!renderCtx || !outputCtx) {
      return;
    }

    const image = new Image();
    image.onload = () => {
      const { x, y, size } = cropToSquare(image);
      renderCtx.drawImage(
        image,
        x,
        y,
        size,
        size,
        0,
        0,
        RENDER_SIZE,
        RENDER_SIZE
      );
      URL.revokeObjectURL(image.src);

      const pixels = renderCtx.getImageData(0, 0, RENDER_SIZE, RENDER_SIZE);

      const retroified = retroify(pixels);
      const scaled = scale(retroified, OUTPUT_SIZE);

      outputCtx.putImageData(scaled, 0, 0);
    };

    const url = URL.createObjectURL(file);
    image.src = url;
  }, [file]);

  return (
    <div id="canvas-wrapper" ref={wrapperRef}>
      <canvas
        id="render-canvas"
        ref={renderCanvas}
        width={RENDER_SIZE}
        height={RENDER_SIZE}
      />
      <canvas
        id="result-canvas"
        ref={outputCanvas}
        width={OUTPUT_SIZE}
        height={OUTPUT_SIZE}
        style={{
          width: outputCanvasSize,
          height: outputCanvasSize,
          maxWidth: '100%',
        }}
      />
    </div>
  );
};
