import { FileContextProvider } from './context';
import { ImageSelectionForm } from './components/ImageSelectionForm';
import { ResultCanvas } from './components/ResultCanvas';

import './App.scss';
import { SettingsPanel } from './components/SettingsPanel';

function App() {
  return (
    <FileContextProvider>
      <div className="App">
        <div className="container-md my-4">
          <div className="row mb-4">
            <div className="col-12">
              <ImageSelectionForm />
            </div>
          </div>

          <div className="row">
            <div className="col d-flex flex-column align-items-center">
              <ResultCanvas />
            </div>

            <div className="col-md-4">
              <SettingsPanel />
            </div>
          </div>
        </div>
      </div>
    </FileContextProvider>
  );
}

export default App;
