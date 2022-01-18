import { FileContextProvider } from './context';
import { ImageSelectionForm } from './components/ImageSelectionForm';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container-md">
        <FileContextProvider>
          <ImageSelectionForm />
        </FileContextProvider>
      </div>
    </div>
  );
}

export default App;
