import { FileContextProvider } from './context';
import { ImageSelectionForm } from './components/ImageSelectionForm';
import { ResultCanvas } from './components/ResultCanvas';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container-md">
        <FileContextProvider>
          <div className="col-12">
            <ImageSelectionForm />
          </div>
          <div className="col-12">
            <ResultCanvas />
          </div>
        </FileContextProvider>
      </div>
    </div>
  );
}

export default App;
