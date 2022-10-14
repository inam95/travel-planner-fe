import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="login" element={<RegisterPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
