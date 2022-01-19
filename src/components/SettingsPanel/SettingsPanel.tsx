import { useContext, useState, useEffect } from 'react';
import { COLOUR_PALETTES } from '../../constants';
import { SettingsContext } from '../../context';
import { Palette } from '../../types';
import { PalettePreview } from '../PalettePreview';
import { Stepper } from '../Stepper';
import './SettingsPanel.scss';

const BRIGHTNESS_STEPS = [2.5, 2, 1.5, 1, 0.8, 0.6, 0.4];
const CONTRAST_STEPS = [0.6, 0.9, 1.2, 1.5, 1.8, 2.1, 2.4];

export const SettingsPanel = () => {
  const {
    brightness,
    contrast,
    palette,
    setBrightness,
    setContrast,
    setPalette,
  } = useContext(SettingsContext);

  const getLabel = (_: number, currentIndex: number) => (
    <span className="stepper-label">{currentIndex}</span>
  );

  const getPalettePreview = (value: Palette) => (
    <div className="px-3">
      <PalettePreview palette={value} />
    </div>
  );

  return (
    <div id="settings-panel" className="p-3">
      <span className="fs-5">Settings</span>

      <div className="my-3">
        <span className="fs-6">Brightness</span>
        <Stepper
          value={brightness}
          possibleValues={BRIGHTNESS_STEPS}
          onChange={setBrightness}
          allowWrapping={false}
          getLabel={getLabel}
        />
      </div>

      <div className="my-3">
        <span className="fs-6">Contrast</span>
        <Stepper
          value={contrast}
          possibleValues={CONTRAST_STEPS}
          onChange={setContrast}
          allowWrapping={false}
          getLabel={getLabel}
        />
      </div>

      <div className="my-3">
        <span className="fs-6">Colour palette</span>
        <Stepper<Palette>
          value={palette}
          possibleValues={COLOUR_PALETTES}
          onChange={setPalette}
          allowWrapping={true}
          getLabel={getPalettePreview}
        />
      </div>
    </div>
  );
};
