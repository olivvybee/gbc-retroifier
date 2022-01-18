import { useContext, useState, useEffect } from 'react';
import { SettingsContext } from '../../context';
import './SettingsPanel.scss';

const BRIGHTNESS_STEPS = [2.5, 2, 1.5, 1, 0.8, 0.6, 0.4];
const CONTRAST_STEPS = [0.6, 0.9, 1.2, 1.5, 1.8, 2.1, 2.4];

export const SettingsPanel = () => {
  const { setBrightness, setContrast } = useContext(SettingsContext);

  const [brightnessStep, setBrightnessStep] = useState(3);
  const [contrastStep, setContrastStep] = useState(3);

  const canIncreaseBrightness = brightnessStep < BRIGHTNESS_STEPS.length - 1;
  const canDecreaseBrightness = brightnessStep > 0;

  const canIncreaseContrast = contrastStep < CONTRAST_STEPS.length - 1;
  const canDecreaseContrast = contrastStep > 0;

  useEffect(() => {
    setBrightness(BRIGHTNESS_STEPS[brightnessStep]);
    setContrast(CONTRAST_STEPS[contrastStep]);
  }, [brightnessStep, contrastStep]);

  return (
    <div id="settings-panel" className="p-3">
      <span className="fs-5">Settings</span>

      <div className="my-3">
        <span className="fs-6">Brightness</span>
        <div className="d-flex align-items-center gx-3 mt-1">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setBrightnessStep(brightnessStep - 1)}
            disabled={!canDecreaseBrightness}>
            -
          </button>
          <span className="mx-3">{brightnessStep}</span>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setBrightnessStep(brightnessStep + 1)}
            disabled={!canIncreaseBrightness}>
            +
          </button>
        </div>
      </div>

      <div className="my-3">
        <span className="fs-6">Contrast</span>
        <div className="d-flex align-items-center gx-3 mt-1">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setContrastStep(contrastStep - 1)}
            disabled={!canDecreaseContrast}>
            -
          </button>
          <span className="mx-3">{contrastStep}</span>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setContrastStep(contrastStep + 1)}
            disabled={!canIncreaseContrast}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
