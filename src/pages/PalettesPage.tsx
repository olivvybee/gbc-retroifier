import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { PalettePreview } from '../components/PalettePreview';
import { COLOUR_PALETTES } from '../constants';
import { SettingsContext } from '../context';
import { Palette } from '../types';

export const PalettesPage = () => {
  const { palette: selectedPalette, setPalette } = useContext(SettingsContext);

  const createOnClick = (palette: Palette) => (e: React.MouseEvent) => {
    e.preventDefault();
    setPalette(palette);
  };

  return (
    <div className="container-md my-4">
      <h2 className="mb-4">Colour palettes</h2>

      <p>Click a palette to apply it on the main page.</p>
      <p>Hover over the colour swatches to see the hex code for each colour.</p>
      <p>
        Click the{' '}
        <FontAwesomeIcon className="text-primary" icon={faInfoCircle} /> to
        visit the source for a palette.
      </p>

      <div className="row my-4">
        {COLOUR_PALETTES.map((palette) => (
          <div className="d-flex flex-direction-row align-items-center mb-3">
            {palette.name === selectedPalette.name ? (
              <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
            ) : (
              <div className="me-2" style={{ width: 16 }} />
            )}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={createOnClick(palette)}>
              <PalettePreview palette={palette} />
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={createOnClick(palette)}>
              <span className="ms-2">{palette.name}</span>
            </a>
            {palette.source && (
              <a href={palette.source}>
                <FontAwesomeIcon icon={faInfoCircle} className="ms-2" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
