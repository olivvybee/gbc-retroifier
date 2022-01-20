import { useContext, useEffect, useRef } from 'react';

import { OUTPUT_SIZE, RENDER_SIZE } from '../../constants';
import { ResultContext, FileContext, SettingsContext } from '../../context';
import { useDimensions } from '../../hooks';
import {
  cropToSquare,
  recolour,
  retroify,
  scale,
} from '../../image-manipulation';

import './ResultCanvas.scss';

export const ResultCanvas = () => {
  const renderCanvas = useRef<HTMLCanvasElement>(null);
  const outputCanvas = useRef<HTMLCanvasElement>(null);
  const outputImg = useRef<HTMLImageElement>(null);

  const [wrapperRef, wrapperDimensions] = useDimensions<HTMLDivElement>();
  const outputCanvasSize = wrapperDimensions
    ? wrapperDimensions.width
    : OUTPUT_SIZE;

  const { file } = useContext(FileContext);
  const { brightness, contrast, palette } = useContext(SettingsContext);
  const { setResultDataUrl } = useContext(ResultContext);

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

      retroify(pixels, brightness, contrast);
      recolour(pixels, palette);

      const scaled = scale(pixels, OUTPUT_SIZE);

      outputCtx.putImageData(scaled, 0, 0);

      if (outputCanvas.current && outputImg.current) {
        const url = outputCanvas.current.toDataURL('image/png');
        setResultDataUrl(url);
        outputImg.current.src = url;
        outputImg.current.style.display = 'block';
      }
    };

    const url = URL.createObjectURL(file);
    image.src = url;
  }, [file, brightness, contrast, palette, setResultDataUrl]);

  return (
    <div id="canvas-wrapper" ref={wrapperRef}>
      <canvas
        id="render-canvas"
        ref={renderCanvas}
        width={RENDER_SIZE}
        height={RENDER_SIZE}
      />
      <canvas
        id="output-canvas"
        ref={outputCanvas}
        width={OUTPUT_SIZE}
        height={OUTPUT_SIZE}
      />
      <img
        id="output-img"
        ref={outputImg}
        style={{
          display: 'none',
          width: outputCanvasSize,
          height: outputCanvasSize,
          maxWidth: '100%',
        }}
        alt="Result of the retroifier"
      />
    </div>
  );
};
