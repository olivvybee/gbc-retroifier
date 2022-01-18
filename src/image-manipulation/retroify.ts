import { RENDER_SIZE } from '../constants';

// 8 x 8 Bayer constants Matrix
const bayer8 = [
  [0, 48, 12, 60, 3, 51, 15, 63],
  [32, 16, 44, 28, 35, 19, 47, 31],
  [8, 56, 4, 52, 11, 59, 7, 55],
  [40, 24, 36, 20, 43, 27, 39, 23],
  [2, 50, 14, 62, 1, 49, 13, 61],
  [34, 18, 46, 30, 33, 17, 45, 29],
  [10, 58, 6, 54, 9, 57, 5, 53],
  [42, 26, 38, 22, 41, 25, 37, 21],
];

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(n, max));

export const retroify = (pixels: ImageData) => {
  const { width, height } = pixels;
  let data = pixels.data;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // Location in the pixel array for the start of the current pixel
      // Each pixel is represented by 4 values in the array (hence multiplying by 4)
      const i = (x + y * width) * 4;

      // Look up the bayer constant for this pixel
      const bayer = bayer8[y % 8][x % 8];

      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      const greyscale = r * 0.3 + g * 0.59 + b * 0.11;

      // Apply the bayer filter
      const filtered = clamp(greyscale + (bayer - 32) * 0.75, 0, 255);

      // Quantise to 4 possible values
      // 64 is 256 / 4 so dividing the greyscale values by 64 and rounding
      // gives results in the range 0-3.
      // Multiplying by 64 again spreads the four values out across 0-255.
      const quantised = Math.round(filtered / 64) * 64;

      const finalValue = quantised;

      data[i] = finalValue;
      data[i + 1] = finalValue;
      data[i + 2] = finalValue;
    }
  }

  return pixels;
};
