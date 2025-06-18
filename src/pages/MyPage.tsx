import React from 'react';
import { ChevronRight, User, Bell, Shield, HelpCircle, LogOut, Globe, Heart, MessageSquare, FileText } from 'lucide-react';

const MyPage: React.FC = () => {
  const menuItems = [
    {
      section: '프로필',
      items: [
        { icon: User, label: '내 프로필', badge: null },
        { icon: Heart, label: '찜한 상품', badge: '12' },
        { icon: MessageSquare, label: '내가 쓴 글', badge: null },
      ]
    },
    {
      section: '설정',
      items: [
        { icon: Bell, label: '알림 설정', badge: null },
        { icon: Globe, label: '언어 설정', badge: 'English' },
        { icon: Shield, label: '개인정보 보호', badge: null },
      ]
    },
    {
      section: '지원',
      items: [
        { icon: HelpCircle, label: '도움말', badge: null },
        { icon: FileText, label: '이용약관', badge: null },
        { icon: LogOut, label: '로그아웃', badge: null, isDestructive: true },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-6 border-b">
        <h1 className="text-2xl font-bold mb-4">내관리</h1>
        
        {/* User Profile Card */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-blue-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">John Smith</h2>
            <p className="text-sm text-gray-500">john.smith@email.com</p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Menu Sections */}
      <div className="mt-4 space-y-4">
        {menuItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-white">
            <div className="px-4 py-2">
              <h3 className="text-sm font-medium text-gray-500">{section.section}</h3>
            </div>
            <div className="divide-y">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <button
                    key={itemIndex}
                    className="w-full px-4 py-3 flex items-center hover:bg-gray-50 transition-colors"
                  >
                    <Icon className={`w-5 h-5 mr-3 ${item.isDestructive ? 'text-red-500' : 'text-gray-600'}`} />
                    <span className={`flex-1 text-left ${item.isDestructive ? 'text-red-500' : ''}`}>
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="text-sm text-gray-500 mr-2">{item.badge}</span>
                    )}
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* App Version */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>하이코 v1.0.0</p>
      </div>
    </div>
  );
};

export default MyPage;