import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { FileContextProvider, SettingsContextProvider } from './context';
import { Homepage, PalettesPage } from './pages';

import './App.scss';

function App() {
  return (
    <Router>
      <FileContextProvider>
        <SettingsContextProvider>
          <div className="App">
            <Routes>
              <Route path="*" element={<Homepage />} />
              <Route path="/palettes" element={<PalettesPage />} />
            </Routes>
          </div>
        </SettingsContextProvider>
      </FileContextProvider>
    </Router>
  );
}

export default App;
