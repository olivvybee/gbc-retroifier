import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  DownloadContextProvider,
  FileContextProvider,
  SettingsContextProvider,
} from './context';
import { Homepage, PalettesPage } from './pages';

import './App.scss';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <Router>
      <FileContextProvider>
        <SettingsContextProvider>
          <DownloadContextProvider>
            <Navbar />
            <div className="App">
              <Routes>
                <Route path="*" element={<Homepage />} />
                <Route path="/palettes" element={<PalettesPage />} />
              </Routes>
            </div>
          </DownloadContextProvider>
        </SettingsContextProvider>
      </FileContextProvider>
    </Router>
  );
}

export default App;
