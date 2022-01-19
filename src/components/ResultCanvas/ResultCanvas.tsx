import { useContext, useEffect, useRef } from 'react';

import { OUTPUT_SIZE, RENDER_SIZE } from '../../constants';
import { DownloadContext, FileContext, SettingsContext } from '../../context';
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

  const [wrapperRef, wrapperDimensions] = useDimensions<HTMLDivElement>();
  const outputCanvasSize = wrapperDimensions
    ? wrapperDimensions.width
    : OUTPUT_SIZE;

  const { file } = useContext(FileContext);
  const { brightness, contrast, palette } = useContext(SettingsContext);
  const { setDownloadResult } = useContext(DownloadContext);

  useEffect(() => {
    const downloadResult = () => {
      if (!outputCanvas.current) {
        return;
      }

      const content = outputCanvas.current.toDataURL('image/png');

      const element = document.createElement('a');
      element.style.display = 'none';
      element.setAttribute('href', content);
      element.setAttribute('download', 'retro.png');

      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    };

    // setState allows a function to be passed that returns the value to set
    // so to set a function you have to pass it with one extra level of abstraction
    setDownloadResult(() => downloadResult);
  }, [setDownloadResult]);

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
    };

    const url = URL.createObjectURL(file);
    image.src = url;
  }, [file, brightness, contrast, palette]);

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
