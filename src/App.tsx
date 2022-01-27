import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  ResultContextProvider,
  FileContextProvider,
  SettingsContextProvider,
} from './context';
import { AboutPage, Homepage, PalettesPage } from './pages';

import './App.scss';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <Router>
      <FileContextProvider>
        <SettingsContextProvider>
          <ResultContextProvider>
            <Navbar />
            <div className="App">
              <Routes>
                <Route path="*" element={<Homepage />} />
                <Route path="/palettes" element={<PalettesPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </div>
          </ResultContextProvider>
        </SettingsContextProvider>
      </FileContextProvider>
    </Router>
  );
}

export default App;
