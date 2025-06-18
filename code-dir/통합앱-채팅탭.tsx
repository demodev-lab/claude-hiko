import React, { useState } from 'react';
import { Search, Bell, Globe, Plus, MessageCircle, Phone, Video, MoreVertical, Shield, Star, Clock, Users, Zap, Languages, AlertCircle, ChevronDown, Filter, Camera, Mic, Send, Paperclip, Smile, Bookmark, X, Circle } from 'lucide-react';

const HikoChatTab = () => {
  const [selectedFilter, setSelectedFilter] = useState('전체');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [translationEnabled, setTranslationEnabled] = useState(true);

  const filterOptions = ['전체', '중고거래', '커뮤니티', '긴급통역', '언어교환', '소모임'];

  // 채팅방 목록 데이터
  const chatList = [
    {
      id: 1,
      type: 'emergency',
      name: '긴급통역 - 의료상담',
      lastMessage: '병원에서 진료받을 때 필요한 표현들을 알려드릴게요',
      avatar: '🚨',
      time: '5분 전',
      unreadCount: 1,
      isOnline: true,
      participants: [
        { name: '김하이코', avatar: '👨‍⚕️', role: '통역사', languages: ['한국어', 'English'] },
        { name: 'User', avatar: '🇻🇳', role: '사용자' }
      ],
      isPriority: true,
      category: '긴급통역'
    },
    {
      id: 2,
      type: 'market',
      name: 'Sarah Kim',
      lastMessage: '아이폰 언제 직거래 가능하신가요?',
      avatar: '🇺🇸',
      time: '12분 전',
      unreadCount: 3,
      isOnline: true,
      userInfo: {
        rating: 4.8,
        reviewCount: 28,
        isVerified: true,
        languages: ['English', '한국어']
      },
      itemInfo: {
        name: '아이폰 15 Pro 256GB',
        price: '1,200,000원',
        image: '/api/placeholder/50/50'
      },
      category: '중고거래'
    },
    {
      id: 3,
      type: 'language_exchange',
      name: 'Global Language Study',
      lastMessage: '한국어-베트남어: "안녕하세요"를 베트남어로?',
      avatar: '🌐',
      time: '1시간 전',
      unreadCount: 12,
      isGroupChat: true,
      memberCount: 8,
      languages: ['한국어', 'Tiếng Việt'],
      category: '언어교환'
    },
    {
      id: 4,
      type: 'community',
      name: 'Nguyen Minh',
      lastMessage: '베트남 식당 추천 감사합니다! 정말 맛있네요',
      avatar: '🇻🇳',
      time: '2시간 전',
      unreadCount: 0,
      isOnline: false,
      userInfo: {
        rating: 4.9,
        isVerified: true,
        languages: ['Tiếng Việt', '한국어']
      },
      category: '커뮤니티'
    },
    {
      id: 5,
      type: 'meetup',
      name: '한강 조깅 모임 🏃‍♂️',
      lastMessage: '이번 주 토요일 모임 참가자 확인부탁드려요!',
      avatar: '🏃‍♂️',
      time: '3시간 전',
      unreadCount: 5,
      isGroupChat: true,
      memberCount: 12,
      nextMeeting: '토요일 8AM',
      category: '소모임'
    },
    {
      id: 6,
      type: 'business',
      name: '서울국제병원',
      lastMessage: '외국인 진료 예약이 가능합니다. 영어 상담 가능해요',
      avatar: '🏥',
      time: '1일 전',
      unreadCount: 0,
      isBusinessAccount: true,
      businessInfo: {
        category: '의료서비스',
        rating: 4.7,
        responseTime: '보통 1시간 이내'
      },
      category: '전문상담'
    }
  ];

  // 개별 채팅 메시지 데이터 (예시)
  const chatMessages = [
    {
      id: 1,
      sender: 'other',
      message: '안녕하세요! 아이폰 아직 판매 중이신가요?',
      translatedMessage: 'Hello! Is the iPhone still for sale?',
      time: '14:30',
      isTranslated: true,
      originalLanguage: '한국어'
    },
    {
      id: 2,
      sender: 'me',
      message: 'Yes, it is! When would you like to meet?',
      translatedMessage: '네, 아직 있어요! 언제 만나실까요?',
      time: '14:32',
      isTranslated: true,
      originalLanguage: 'English'
    },
    {
      id: 3,
      sender: 'other',
      message: '오늘 저녁 7시 강남역에서 만날 수 있을까요?',
      translatedMessage: 'Can we meet at Gangnam Station at 7 PM today?',
      time: '14:35',
      isTranslated: true,
      originalLanguage: '한국어'
    }
  ];

  const renderHeader = () => (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">Hi</span>
          </div>
          <span className="text-lg font-bold text-gray-800">하이코</span>
        </div>

        <div className="flex items-center space-x-1">
          {/* 긴급통역 연결 버튼 - 채팅탭에서 더 강조 */}
          <button className="flex items-center space-x-1 px-3 py-1 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors">
            <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">!</span>
            </div>
            <span className="text-xs text-red-600 font-medium">긴급통역</span>
          </button>
          
          <button className="flex items-center space-x-1 px-2 py-1 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <Globe className="w-4 h-4 text-blue-500" />
            <span className="text-xs text-blue-600">한→베</span>
          </button>
          
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </button>
        </div>
      </div>
    </div>
  );

  const renderFilterSection = () => (
    <div className="bg-white px-4 py-3 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">채팅</h2>
        
        <div className="relative">
          <button
            onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Filter className="w-4 h-4" />
            <span className="text-sm">{selectedFilter}</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${showFilterDropdown ? 'rotate-180' : ''}`} />
          </button>

          {showFilterDropdown && (
            <div className="absolute top-10 right-0 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
              {filterOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedFilter(option);
                    setShowFilterDropdown(false);
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg text-sm transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderChatListItem = (chat) => (
    <div 
      key={chat.id} 
      onClick={() => setSelectedChat(chat)}
      className="flex items-center p-4 hover:bg-gray-50 border-b border-gray-100 cursor-pointer transition-colors"
    >
      <div className="relative mr-3">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg">
          {chat.avatar}
        </div>
        {chat.isOnline && (
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        )}
        {chat.isPriority && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <AlertCircle className="w-2 h-2 text-white" />
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center space-x-2">
            <span className="font-medium text-gray-900 truncate">{chat.name}</span>
            {chat.userInfo?.isVerified && <Shield className="w-3 h-3 text-blue-500" />}
            {chat.isBusinessAccount && (
              <span className="px-1 py-0.5 bg-orange-100 text-orange-600 text-xs rounded">업체</span>
            )}
            {chat.isGroupChat && (
              <span className="px-1 py-0.5 bg-blue-100 text-blue-600 text-xs rounded">
                👥 {chat.memberCount}
              </span>
            )}
          </div>
          <span className="text-xs text-gray-500">{chat.time}</span>
        </div>

        {/* 상품 정보 (중고거래) */}
        {chat.itemInfo && (
          <div className="flex items-center space-x-2 mb-1 p-2 bg-gray-50 rounded">
            <img src={chat.itemInfo.image} alt={chat.itemInfo.name} className="w-8 h-8 rounded object-cover" />
            <div>
              <span className="text-xs text-gray-600">{chat.itemInfo.name}</span>
              <span className="text-xs text-blue-600 font-medium ml-2">{chat.itemInfo.price}</span>
            </div>
          </div>
        )}

        {/* 언어교환 정보 */}
        {chat.languages && (
          <div className="flex items-center space-x-1 mb-1">
            <Languages className="w-3 h-3 text-purple-500" />
            <span className="text-xs text-purple-600">{chat.languages.join(' ↔ ')}</span>
          </div>
        )}

        {/* 모임 정보 */}
        {chat.nextMeeting && (
          <div className="flex items-center space-x-1 mb-1">
            <Clock className="w-3 h-3 text-green-500" />
            <span className="text-xs text-green-600">다음 모임: {chat.nextMeeting}</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 truncate flex-1">{chat.lastMessage}</p>
          {chat.unreadCount > 0 && (
            <span className="ml-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full min-w-[20px] text-center">
              {chat.unreadCount > 99 ? '99+' : chat.unreadCount}
            </span>
          )}
        </div>

        {/* 평점 정보 */}
        {chat.userInfo?.rating && (
          <div className="flex items-center space-x-1 mt-1">
            <Star className="w-3 h-3 text-yellow-500" />
            <span className="text-xs text-gray-500">{chat.userInfo.rating} ({chat.userInfo.reviewCount})</span>
          </div>
        )}
      </div>
    </div>
  );

  const renderChatRoom = () => {
    if (!selectedChat) return null;

    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col">
        {/* 채팅방 헤더 */}
        <div className="bg-white border-b border-gray-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setSelectedChat(null)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                ←
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  {selectedChat.avatar}
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="font-medium text-gray-900">{selectedChat.name}</span>
                    {selectedChat.userInfo?.isVerified && <Shield className="w-3 h-3 text-blue-500" />}
                  </div>
                  <div className="flex items-center space-x-2">
                    {selectedChat.isOnline ? (
                      <span className="text-xs text-green-600">온라인</span>
                    ) : (
                      <span className="text-xs text-gray-500">오프라인</span>
                    )}
                    {selectedChat.userInfo?.languages && (
                      <span className="text-xs text-blue-600">
                        {selectedChat.userInfo.languages.join(', ')}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {/* 번역 토글 */}
              <button 
                onClick={() => setTranslationEnabled(!translationEnabled)}
                className={`flex items-center space-x-1 px-2 py-1 rounded-lg transition-colors ${
                  translationEnabled ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs">번역</span>
              </button>

              {/* 통화/영상 버튼 */}
              {selectedChat.type !== 'emergency' && (
                <>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Phone className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Video className="w-5 h-5 text-gray-600" />
                  </button>
                </>
              )}

              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* 번역 안내 */}
          {translationEnabled && (
            <div className="mt-2 bg-blue-50 border border-blue-200 rounded-lg p-2">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-500" />
                <span className="text-xs text-blue-700">
                  실시간 번역이 활성화되었습니다 (한국어 ↔ 베트남어)
                </span>
              </div>
            </div>
          )}
        </div>

        {/* 메시지 영역 */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {chatMessages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.sender === 'me' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-800'
              }`}>
                <p className="text-sm">{message.message}</p>
                {message.isTranslated && translationEnabled && (
                  <div className="mt-2 pt-2 border-t border-opacity-20 border-gray-500">
                    <p className="text-xs opacity-75">{message.translatedMessage}</p>
                    <span className="text-xs opacity-60">번역됨 ({message.originalLanguage})</span>
                  </div>
                )}
                <span className="text-xs opacity-75 block mt-1">{message.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 메시지 입력 */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Paperclip className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Camera className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex-1 relative">
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="메시지를 입력하세요..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
              />
              {translationEnabled && (
                <div className="absolute -top-8 left-2 text-xs text-blue-600">
                  자동 번역됨
                </div>
              )}
            </div>

            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Mic className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Smile className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full">
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderHeader()}
      {renderFilterSection()}

      <div className="bg-white">
        {chatList.map(renderChatListItem)}
      </div>

      {/* 긴급통역 빠른 연결 */}
      <div className="fixed bottom-20 left-4 right-4 bg-red-50 border border-red-200 rounded-lg p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-sm font-medium text-red-800">긴급상황인가요?</span>
              <p className="text-xs text-red-600">24시간 전문 통역사와 연결됩니다</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors">
            즉시 연결
          </button>
        </div>
      </div>

      {/* 하단 네비게이션 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          {['홈', '중고거래', '커뮤니티', '채팅', '내관리'].map((tab, index) => (
            <button
              key={index}
              className={`flex flex-col items-center py-2 px-3 ${
                tab === '채팅' ? 'text-blue-500' : 'text-gray-400'
              }`}
            >
              <div className="w-6 h-6 mb-1 bg-current rounded opacity-20"></div>
              <span className="text-xs">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 채팅방 모달 */}
      {renderChatRoom()}
    </div>
  );
};

export default HikoChatTab;