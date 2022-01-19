import { Palette } from '../types';

const chunkString = (str: string, chunkSize: number) => {
  const numChunks = Math.ceil(str.length / chunkSize);
  const chunks = new Array(numChunks);
  for (let i = 0; i < numChunks; i++) {
    chunks[i] = str.substring(i * chunkSize, i * chunkSize + chunkSize);
  }
  return chunks;
};

export const recolour = (pixels: ImageData, palette: Palette) => {
  const { data } = pixels;
  const { colours } = palette;

  for (let i = 0; i < data.length; i += 4) {
    const colourIndex = Math.floor(data[i] / 64);

    const hex = colours[colourIndex];
    const [r, g, b] = chunkString(hex.slice(1), 2).map((str) =>
      parseInt(str, 16)
    );

    data[i] = r;
    data[i + 1] = g;
    data[i + 2] = b;
  }

  return pixels;
};
