import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import { DownloadContext } from '../../context';

export const DownloadButton = () => {
  const { downloadResult } = useContext(DownloadContext);

  return (
    <button
      className="btn btn-primary d-flex align-items-center"
      onClick={downloadResult}>
      <FontAwesomeIcon icon={faDownload} className="me-2" />
      Download result
    </button>
  );
};
