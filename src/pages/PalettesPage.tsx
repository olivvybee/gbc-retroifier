import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { PalettePreview } from '../components/PalettePreview';
import { COLOUR_PALETTES } from '../constants';
import { SettingsContext } from '../context';
import { Palette } from '../types';

export const PalettesPage = () => {
  const { palette: selectedPallete, setPalette } = useContext(SettingsContext);

  const createOnClick = (palette: Palette) => (e: React.MouseEvent) => {
    e.preventDefault();
    setPalette(palette);
  };

  return (
    <div className="container-md my-4">
      <h2 className="mb-4">Colour palettes</h2>

      <p>Click a palette to select it next time you generate an image.</p>
      <p>Hover over the colour swatches to see the hex code for each colour.</p>

      <div className="row my-4">
        {COLOUR_PALETTES.map((palette) => (
          <a href="#" onClick={createOnClick(palette)}>
            <div className="d-flex flex-direction-row align-items-center mb-2">
              <PalettePreview palette={palette} />
              <span className="ms-2">{palette.name}</span>
              {palette.name === selectedPallete.name && (
                <FontAwesomeIcon icon={faCheckCircle} className="ms-2" />
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
