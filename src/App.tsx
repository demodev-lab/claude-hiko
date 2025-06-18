import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Signup from './pages/Signup';
import MainLayout from './components/MainLayout';
import CommunityDetail from './pages/CommunityDetail';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* 회원가입 */}
        <Route path="/signup" element={<Signup />} />
        
        {/* 메인 앱 라우트들 */}
        <Route path="/home" element={<MainLayout />} />
        <Route path="/community" element={<MainLayout />} />
        <Route path="/community/:id" element={<CommunityDetail />} />
        <Route path="/chat" element={<MainLayout />} />
        <Route path="/mypage" element={<MainLayout />} />
        
        {/* 기본 경로 - 회원가입으로 리다이렉트 */}
        <Route path="/" element={<Navigate to="/signup" replace />} />
      </Routes>
    </Router>
  );
}

export default App;