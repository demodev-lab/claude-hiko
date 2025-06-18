import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Community from '../pages/Community';
import Chat from '../pages/Chat';
import MyPage from '../pages/MyPage';

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // 현재 활성 탭을 URL 기반으로 결정
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/home') return '홈';
    if (path === '/community') return '커뮤니티';
    if (path === '/chat') return '채팅';
    if (path === '/mypage') return '내관리';
    return '홈';
  };
  
  const [activeTab, setActiveTab] = useState(getActiveTab());

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    switch(tab) {
      case '홈':
        navigate('/home');
        break;
      case '중고거래':
        navigate('/home');
        break;
      case '커뮤니티':
        navigate('/community');
        break;
      case '채팅':
        navigate('/chat');
        break;
      case '내관리':
        navigate('/mypage');
        break;
    }
  };

  const renderContent = () => {
    const path = location.pathname;
    if (path === '/home') return <Home />;
    if (path === '/community') return <Community />;
    if (path === '/chat') return <Chat />;
    if (path === '/mypage') return <MyPage />;
    return <Home />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 콘텐츠 영역 */}
      <div className="pb-16">
        {renderContent()}
      </div>

      {/* 하단 네비게이션 - 모든 페이지에서 공통으로 사용 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          {['홈', '중고거래', '커뮤니티', '채팅', '내관리'].map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(tab)}
              className={`flex flex-col items-center py-2 px-3 ${
                (activeTab === tab || (activeTab === '홈' && tab === '중고거래') || (activeTab === '중고거래' && tab === '홈')) 
                  ? 'text-blue-500' 
                  : 'text-gray-400'
              }`}
            >
              <div className="w-6 h-6 mb-1 bg-current rounded opacity-20"></div>
              <span className="text-xs">{tab}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;