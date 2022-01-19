import React, { useContext } from 'react';

import { PalettePreview } from '../components/PalettePreview';
import { COLOUR_PALETTES } from '../constants';
import { SettingsContext } from '../context';
import { Palette } from '../types';

export const PalettesPage = () => {
  const { setPalette } = useContext(SettingsContext);

  const createOnClick = (palette: Palette) => (e: React.MouseEvent) => {
    e.stopPropagation();
    setPalette(palette);
  };

  return (
    <div className="container-md my-4">
      <h2>All colour palettes</h2>
      <div className="row my-4">
        {COLOUR_PALETTES.map((palette) => (
          <a href="#" onClick={createOnClick(palette)}>
            <div className="d-flex flex-direction-row align-items-center mb-1">
              <PalettePreview palette={palette} />
              <span className="ms-2">{palette.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
