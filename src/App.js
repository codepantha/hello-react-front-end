import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Greeting />} />
        <Route exact path="/greeting" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
