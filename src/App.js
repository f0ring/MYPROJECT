import './App.css';
import Sidebar from './components/sidebar';
import Profile from './page/profile';   // or './page/profile' if you keep lowercase
import Articles from './page/articles'; // or './page/articles'


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App d-flex">
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/articles" element={<Articles />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
