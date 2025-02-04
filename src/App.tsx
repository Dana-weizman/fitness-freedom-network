import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GymSelection } from './components/GymSelection';
import { Schedule } from './components/Schedule';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GymSelection />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
}

export default App;