import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Rockets from './pages/Rockets';
import Profile from './pages/Profile';
import Missions from './pages/Missions';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
