import { useCallback, useContext, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

import { FileContext } from '../../context';

import './ImageSelectionForm.css';

export const ImageSelectionForm: React.FC = () => {
  const [previewUrl, setPreviewUrl] = useState<string>();
  const { file, setFile } = useContext(FileContext);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) {
        return;
      }

      setFile(acceptedFiles[0]);
    },
    [setFile]
  );

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  }, [file, setPreviewUrl]);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      accept: 'image/jpeg, image/png',
      multiple: false,
    });

  return (
    <div
      {...getRootProps()}
      className={classnames('dropzone', 'btn', 'btn-primary', {
        active: isDragActive,
      })}>
      <input {...getInputProps()} />
      {acceptedFiles.length > 0 ? (
        <>
          <img className="preview" src={previewUrl} alt="" />
          <span>Change image</span>
        </>
      ) : (
        <>
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faImage} size="2x" />
          </div>
          <span>Choose an image</span>
        </>
      )}
    </div>
  );
};

ImageSelectionForm.displayName = 'ImageSelectionForm';
