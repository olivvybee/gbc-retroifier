import { useCallback, useContext } from 'react';

import { FileContext, ResultContext } from '../../context';

import './DownloadButton.scss';

export const DownloadButton = () => {
  const { resultDataUrl } = useContext(ResultContext);
  const { file } = useContext(FileContext);

  const download = useCallback(() => {
    if (!resultDataUrl) {
      return;
    }

    const previousFilename = file
      ? file.name.substring(0, file.name.lastIndexOf('.'))
      : 'image';
    const filename = `${previousFilename}-retroified.png`;

    const element = document.createElement('a');
    element.style.display = 'none';
    element.setAttribute('href', resultDataUrl);
    element.setAttribute('download', filename);

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }, [resultDataUrl, file]);

  return (
    <button id="download-button" onClick={download}>
      download it
    </button>
  );
};
