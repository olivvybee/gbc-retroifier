import { useContext, useState, useEffect } from 'react';
import { SettingsContext } from '../../context';
import { Stepper } from '../Stepper';
import './SettingsPanel.scss';

const BRIGHTNESS_STEPS = [2.5, 2, 1.5, 1, 0.8, 0.6, 0.4];
const CONTRAST_STEPS = [0.6, 0.9, 1.2, 1.5, 1.8, 2.1, 2.4];

export const SettingsPanel = () => {
  const { brightness, contrast, setBrightness, setContrast } =
    useContext(SettingsContext);

  const getLabel = (value: number, currentIndex: number) =>
    String(currentIndex);

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
    </div>
  );
};
