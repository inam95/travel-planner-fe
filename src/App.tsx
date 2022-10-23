import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppPage from './pages/AppPage';
import LoginPage from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import ProtectedPage from './utils/guards/ProtectedPage';
import PlanPage from './pages/plans/PlanPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="app" element={<ProtectedPage children={<AppPage />} />}>
          <Route path="plans" element={<PlanPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
