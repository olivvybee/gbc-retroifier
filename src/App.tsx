import { FileContextProvider } from './context';
import { ImageSelectionForm } from './components/ImageSelectionForm';
import { ResultCanvas } from './components/ResultCanvas';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container-md">
        <div className="row">
          <div className="col-md-8 d-flex flex-column align-items-center">
            <FileContextProvider>
              <ImageSelectionForm />
              <ResultCanvas />
            </FileContextProvider>
          </div>

          <div className="col-md-4">hi</div>
        </div>
      </div>
    </div>
  );
}

export default App;
