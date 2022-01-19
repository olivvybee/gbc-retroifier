import { createContext } from 'react';

import { COLOUR_PALETTES } from '../constants';
import { useLocalStorage } from '../hooks';
import { Palette } from '../types';

interface SettingsContextShape {
  brightness: number;
  contrast: number;
  palette: Palette;
  setBrightness: (brightness: number) => void;
  setContrast: (contrast: number) => void;
  setPalette: (palette: Palette) => void;
}

export const SettingsContext = createContext<SettingsContextShape>({
  brightness: 50,
  contrast: 50,
  palette: COLOUR_PALETTES[0],
  setBrightness: () => null,
  setContrast: () => null,
  setPalette: () => null,
});

export const SettingsContextProvider: React.FC = ({ children }) => {
  const [brightness, setBrightness] = useLocalStorage('brightness', 1);
  const [contrast, setContrast] = useLocalStorage('contrast', 1.5);
  const [palette, setPalette] = useLocalStorage('palette', COLOUR_PALETTES[0]);

  return (
    <SettingsContext.Provider
      value={{
        brightness,
        contrast,
        palette,
        setBrightness,
        setContrast,
        setPalette,
      }}>
      {children}
    </SettingsContext.Provider>
  );
};
