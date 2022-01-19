import { createContext, useState } from 'react';

interface SettingsContextShape {
  brightness: number;
  contrast: number;
  setBrightness: (brightness: number) => void;
  setContrast: (contrast: number) => void;
}

export const SettingsContext = createContext<SettingsContextShape>({
  brightness: 50,
  contrast: 50,
  setBrightness: () => null,
  setContrast: () => null,
});

export const SettingsContextProvider: React.FC = ({ children }) => {
  const [brightness, setBrightness] = useState(1);
  const [contrast, setContrast] = useState(1.5);

  return (
    <SettingsContext.Provider
      value={{ brightness, contrast, setBrightness, setContrast }}>
      {children}
    </SettingsContext.Provider>
  );
};
