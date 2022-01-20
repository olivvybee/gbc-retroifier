import { useCallback, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import { FileContext, ResultContext } from '../../context';

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
  }, [resultDataUrl]);

  return (
    <button
      className="btn btn-primary d-flex align-items-center"
      onClick={download}>
      <FontAwesomeIcon icon={faDownload} className="me-2" />
      Download result
    </button>
  );
};
