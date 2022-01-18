export const cropToSquare = (image: HTMLImageElement) => {
  const { width, height } = image;

  const size = Math.min(width, height);

  const x = (width - size) / 2;
  const y = (height - size) / 2;

  return { x, y, size };
};
