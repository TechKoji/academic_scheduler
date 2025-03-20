import {BrowserRouter , Routes, Route, Navigate} from 'react-router-dom';
import Login from './pages/Login';
import LoginDashboard from './pages/LoginDashboard';
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login-dashboard" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/login-dashboard" element={<LoginDashboard />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App
