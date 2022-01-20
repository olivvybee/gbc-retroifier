import { useContext } from 'react';
import { DownloadButton } from '../components/DownloadButton';
import { ImageSelectionForm } from '../components/ImageSelectionForm';
import { ResultCanvas } from '../components/ResultCanvas';
import { SettingsPanel } from '../components/SettingsPanel';
import { FileContext } from '../context';

export const Homepage = () => {
  const { file } = useContext(FileContext);

  return (
    <div className="container-md my-4">
      <div className="row mb-4">
        <div className="col-12">
          <ImageSelectionForm />
        </div>
      </div>

      <div className="row">
        <div className="col d-flex flex-column align-items-center mb-3">
          <ResultCanvas />
        </div>

        <div className="col-md-4 d-flex flex-column align-items-center">
          {!!file && (
            <div className="mb-3">
              <p>
                Tap and hold the image to save, or <DownloadButton />.
              </p>
            </div>
          )}
          {!!file && <SettingsPanel />}
        </div>
      </div>
    </div>
  );
};
