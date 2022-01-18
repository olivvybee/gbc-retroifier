import { FileContextProvider } from './context';
import { ImageSelectionForm } from './components/ImageSelectionForm';
import { ResultCanvas } from './components/ResultCanvas';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container-md">
        <FileContextProvider>
          <ImageSelectionForm />
          <ResultCanvas />
        </FileContextProvider>
      </div>
    </div>
  );
}

export default App;
