import { Palette } from '../../types';

import './PalettePreview.scss';

interface PalettePreviewProps {
  palette: Palette;
}

export const PalettePreview: React.FC<PalettePreviewProps> = ({ palette }) => (
  <div
    id="preview-wrapper"
    className="d-flex flex-direction-row align-items-center">
    {palette.colours.map((colour) => (
      <div
        key={colour}
        className="preview-block"
        title={colour}
        style={{ backgroundColor: colour }}
      />
    ))}
  </div>
);
