export const scale = (pixels: ImageData, targetSize: number) => {
  const oldData = pixels.data;
  const oldSize = pixels.width;

  const newPixels = new ImageData(targetSize, targetSize);
  const newData = newPixels.data;

  const scaleFactor = targetSize / oldSize;

  let newIndex = 0;

  for (let y = 0; y < targetSize; y++) {
    for (let x = 0; x < targetSize; x++) {
      const oldX = Math.floor(x / scaleFactor);
      const oldY = Math.floor(y / scaleFactor);

      const oldIndex = (oldX + oldY * oldSize) * 4;

      newData[newIndex] = oldData[oldIndex];
      newData[newIndex + 1] = oldData[oldIndex + 1];
      newData[newIndex + 2] = oldData[oldIndex + 2];
      newData[newIndex + 3] = oldData[oldIndex + 3];

      newIndex += 4;
    }
  }

  return newPixels;
};
