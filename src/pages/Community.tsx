import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, Globe, Plus, Users, MessageSquare, Calendar, BookOpen, Coffee, Heart, MapPin, Clock, Star, Shield, ChevronRight, Filter, Zap, Award, HelpCircle, Languages, Briefcase, Home, Camera, ChevronDown, Pin, TrendingUp, UserPlus, Building, Phone } from 'lucide-react';

const HikoCommunityStructure = () => {
  const navigate = useNavigate();
  // 사용자 설정 (가입시 인증한 국가)
  const userCountry = '🇻🇳 베트남';
  const [selectedTab, setSelectedTab] = useState('마이타운');
  const [selectedCountry, setSelectedCountry] = useState('🇻🇳 베트남');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedFilter, setSelectedFilter] = useState('추천');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const countries = [
    '🇻🇳 베트남', '🇺🇸 미국', '🇯🇵 일본', '🇨🇳 중국', 
    '🇹🇭 태국', '🇲🇳 몽골', '🇵🇭 필리핀', '🇮🇳 인도',
    '🇸🇬 싱가포르', '🇲🇾 말레이시아', '🇮🇩 인도네시아',
    '🇷🇺 러시아', '🇺🇿 우즈베키스탄', '🇰🇿 카자흐스탄',
    '🇫🇷 프랑스', '🇩🇪 독일', '🇮🇹 이탈리아', '🇪🇸 스페인'
  ];

  const filterOptions = ['추천', '인기', '최신', '내 관심사'];

  // 3단계 최종 구조 (지역 구분 제거)
  const mainTabs = [
    { 
      id: 'mytown', 
      name: '마이타운', 
      description: `${userCountry.split(' ')[1]}인끼리만`, 
      icon: '🏘️',
      purpose: '같은 국적 소통'
    },
    { 
      id: 'global', 
      name: '글로벌', 
      description: '모든 국적 함께', 
      icon: '🌍',
      purpose: '다국적 소통'
    },
    { 
      id: 'info', 
      name: '정보게시판', 
      description: '업체·전문가·구인', 
      icon: '📋',
      purpose: '비즈니스 정보교류'
    }
  ];

  // 탭별 카테고리 (확정된 주제 구성)
  const getCategoriesForTab = (tab) => {
    const baseCategories = [{ id: 'all', name: '전체', icon: '📋' }];
    
    switch(tab) {
      case '마이타운':
        return [
          ...baseCategories,
          { id: 'daily', name: '일상수다', icon: '💭' },
          { id: 'culture', name: '우리문화', icon: '🎭' },
          { id: 'food', name: '고향맛집', icon: '🍜' },
          { id: 'news', name: '고향소식', icon: '📰' },
          { id: 'help', name: '도움요청', icon: '🤝' },
          { id: 'meetup', name: '소모임', icon: '👥' }
        ];
      case '글로벌':
        return [
          ...baseCategories,
          { id: 'language', name: '언어교환', icon: '💬' },
          { id: 'culture', name: '문화교류', icon: '🌏' },
          { id: 'life', name: '한국생활', icon: '🏠' },
          { id: 'friend', name: '친구만들기', icon: '👫' },
          { id: 'question', name: '궁금해요', icon: '❓' },
          { id: 'meetup', name: '소모임', icon: '👥' }
        ];
      case '정보게시판':
        return [
          ...baseCategories,
          { id: 'business', name: '업체홍보', icon: '🏢' },
          { id: 'expert', name: '전문가상담', icon: '👨‍⚕️' },
          { id: 'job', name: '구인구직', icon: '💼' },
          { id: 'service', name: '서비스찾기', icon: '🔍' },
          { id: 'review', name: '업체후기', icon: '⭐' }
        ];
      default:
        return baseCategories;
    }
  };

  // 마이타운 콘텐츠 - 베트남인끼리만 소통 (확정된 주제)
  const myTownContent = [
    {
      id: 1,
      title: '서울 진짜 맛있는 베트남 식당 리스트 🍜',
      content: '고향 맛 그리운 베트남 형제자매들! 서울에서 찾은 진짜 맛있는 베트남 식당들 공유해요',
      author: {
        name: 'Nguyen Minh',
        avatar: '🇻🇳',
        isVerified: true,
        country: '베트남'
      },
      time: '30분 전',
      views: 234,
      likes: 67,
      comments: 23,
      category: '고향맛집',
      tags: ['베트남식당', '쌀국수', '분보'],
      isPinned: true
    },
    {
      id: 2,
      title: '베트남 설날 테트 준비 모임 할까요? 🎊',
      content: '올해 테트를 한국에서 보내는 베트남인들끼리 모여서 고향처럼 명절 준비해요',
      author: {
        name: 'Le Thi Mai',
        avatar: '🇻🇳',
        isVerified: true
      },
      time: '2시간 전',
      views: 89,
      likes: 28,
      comments: 12,
      category: '소모임',
      tags: ['테트', '명절', '전통'],
      isHot: true,
      participants: 8,
      maxParticipants: 15,
      meetingDate: '2월 10일 토요일 오후 2시',
      location: '서울 관악구 베트남 문화센터'
    },
    {
      id: 3,
      title: '베트남 최신 뉴스 공유해요 📰',
      content: '고향 소식이 궁금한 베트남 동포들을 위해 최신 뉴스와 정보를 공유하는 공간입니다',
      author: {
        name: 'Tran Van Duc',
        avatar: '🇻🇳',
        isVerified: true
      },
      time: '1일 전',
      views: 156,
      likes: 34,
      comments: 8,
      category: '고향소식',
      tags: ['뉴스', '정치', '경제']
    }
  ];

  // 글로벌 콘텐츠 - 모든 국적 소통 (확정된 주제)
  const globalContent = [
    {
      id: 4,
      title: '한국 지하철 이용법 완벽 가이드 🚇',
      content: '처음 한국 온 외국인들을 위한 지하철 이용 꿀팁! 카드 충전부터 환승까지',
      author: {
        name: 'Seoul Helper',
        avatar: '🇰🇷',
        isVerified: true,
        specialty: '생활가이드'
      },
      time: '1시간 전',
      views: 456,
      likes: 89,
      comments: 34,
      category: '한국생활',
      tags: ['교통', '지하철', '가이드'],
      isHelpful: true
    },
    {
      id: 5,
      title: '다국어 언어교환 친구 구해요 🗣️',
      content: '한국어 배우고 싶은데 영어, 일본어, 중국어 가르쳐드릴 수 있어요!',
      author: {
        name: 'Global Friend',
        avatar: '🌍',
        isVerified: true
      },
      time: '3시간 전',
      views: 178,
      likes: 45,
      comments: 18,
      category: '언어교환',
      tags: ['언어교환', '친구', '스터디']
    },
    {
      id: 6,
      title: '🏃‍♂️ 주말 한강 조깅 모임 (초보자 환영)',
      content: '매주 토요일 아침 한강에서 조깅해요. 외국인 친구들 많이 와주세요!',
      author: {
        name: 'Running Seoul',
        avatar: '🏃‍♂️',
        isVerified: true,
        specialty: '운동모임'
      },
      time: '5시간 전',
      views: 234,
      likes: 67,
      comments: 28,
      participants: 12,
      maxParticipants: 20,
      category: '소모임',
      tags: ['조깅', '한강', '주말'],
      meetingDate: '매주 토요일 오전 8시',
      location: '여의도 한강공원',
      isHot: true
    }
  ];

  // 소모임 콘텐츠 - 오프라인 모임 목적
  const meetupContent = [
    {
      id: 5,
      title: '🏃‍♂️ 주말 한강 조깅 모임 (초보자 환영)',
      content: '매주 토요일 아침 한강에서 조깅해요. 외국인 친구들 많이 와주세요!',
      author: {
        name: 'Running Seoul',
        avatar: '🏃‍♂️',
        isVerified: true,
        specialty: '운동모임'
      },
      time: '5시간 전',
      views: 234,
      likes: 67,
      comments: 28,
      participants: 12,
      maxParticipants: 20,
      category: '운동',
      tags: ['조깅', '한강', '주말'],
      meetingDate: '매주 토요일 오전 8시',
      location: '여의도 한강공원',
      isHot: true
    },
    {
      id: 6,
      title: '🍜 명동 맛집 투어 (가이드 동행)',
      content: '명동 숨은 맛집들을 현지인 가이드와 함께 돌아보는 투어입니다',
      author: {
        name: '맛집탐험대',
        avatar: '🍽️',
        isVerified: true,
        specialty: '맛집가이드'
      },
      time: '1일 전',
      views: 189,
      likes: 56,
      comments: 21,
      participants: 8,
      maxParticipants: 12,
      category: '맛집투어',
      tags: ['명동', '맛집', '가이드투어'],
      meetingDate: '이번 주 일요일 2시',
      location: '명동역 2번 출구',
      cost: '1인 25,000원'
    }
  ];

  // 정보게시판 콘텐츠 - 업체/전문가/구인 (확정된 주제)
  const infoContent = [
    {
      id: 7,
      title: '🏥 외국인 전문 병원 - 다국어 진료 가능',
      content: '영어, 중국어, 일본어 가능한 의료진이 있는 종합병원입니다. 건강보험 적용됩니다.',
      author: {
        name: '서울국제병원',
        avatar: '🏥',
        isVerified: true,
        isBusinessAccount: true,
        specialty: '의료서비스'
      },
      time: '6시간 전',
      views: 345,
      likes: 78,
      comments: 15,
      category: '업체홍보',
      tags: ['병원', '다국어진료', '건강보험'],
      contactInfo: '02-1234-5678',
      businessHours: '평일 9-18시, 토 9-13시'
    },
    {
      id: 8,
      title: '💼 IT회사 외국인 개발자 채용 (비자 스폰서)',
      content: '글로벌 IT 기업에서 외국인 개발자를 채용합니다. 비자 스폰서 가능.',
      author: {
        name: 'TechGlobal HR',
        avatar: '💻',
        isVerified: true,
        isBusinessAccount: true,
        specialty: '채용담당'
      },
      time: '1일 전',
      views: 567,
      likes: 123,
      comments: 45,
      category: '구인구직',
      tags: ['IT', '개발자', '비자스폰서'],
      salary: '연봉 4000-6000만원',
      contactInfo: 'hr@techglobal.com'
    },
    {
      id: 9,
      title: '🏠 외국인 전용 부동산 상담 (무료)',
      content: '외국인 부동산 거래 전문 공인중개사가 무료 상담해드립니다.',
      author: {
        name: '글로벌부동산',
        avatar: '🏢',
        isVerified: true,
        isBusinessAccount: true,
        specialty: '부동산전문가'
      },
      time: '2일 전',
      views: 234,
      likes: 67,
      comments: 23,
      category: '전문가상담',
      tags: ['부동산', '무료상담', '외국인전문'],
      consultationType: 'free',
      responseTime: '당일 답변'
    },
    {
      id: 10,
      title: '📱 하이코 앱 번역 서비스 후기 ⭐⭐⭐⭐⭐',
      content: '하이코 앱의 실시간 번역 기능 사용해보니 정말 만족스러워요! 추천합니다.',
      author: {
        name: 'Happy User',
        avatar: '😊',
        isVerified: true
      },
      time: '3일 전',
      views: 189,
      likes: 45,
      comments: 12,
      category: '업체후기',
      tags: ['번역서비스', '앱후기', '추천'],
      rating: 5
    }
  ];

  const getCurrentContent = () => {
    switch(selectedTab) {
      case '마이타운': return myTownContent;
      case '글로벌': return globalContent;
      case '소모임': return meetupContent;
      case '정보게시판': return infoContent;
      default: return [];
    }
  };

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

  const renderMainTabs = () => (
    <div className="bg-white border-b border-gray-100">
      <div className="grid grid-cols-3">
        {mainTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setSelectedTab(tab.name);
              setSelectedCategory('전체');
            }}
            className={`py-4 px-2 text-center border-b-2 transition-colors ${
              selectedTab === tab.name
                ? 'border-blue-500 text-blue-600 bg-blue-50'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            <div className="flex flex-col items-center">
              <span className="text-lg mb-1">{tab.icon}</span>
              <span className="text-xs font-semibold">{tab.name}</span>
              <span className="text-xs text-gray-500 mt-1">{tab.description}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderFilterSection = () => (
    <div className="bg-white px-4 py-3 border-b border-gray-100">
      <div className="flex items-center justify-between mb-3">
        {/* 마이타운에서만 국가 선택 */}
        {selectedTab === '마이타운' && (
          <div className="relative">
            <button
              onClick={() => setShowCountryDropdown(!showCountryDropdown)}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-blue-300 transition-colors"
            >
              <Users className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">{userCountry} 커뮤니티</span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${showCountryDropdown ? 'rotate-180' : ''}`} />
            </button>

            {showCountryDropdown && (
              <div className="absolute top-12 left-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                {countries.map((country, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedCountry(country);
                      setShowCountryDropdown(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-blue-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    <span className="text-gray-700">{country} 커뮤니티</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {selectedTab !== '마이타운' && (
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-gray-800">{selectedTab}</span>
            <span className="text-sm text-gray-500">
              {mainTabs.find(tab => tab.name === selectedTab)?.purpose}
            </span>
          </div>
        )}

        <div className="relative">
          <button
            onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Filter className="w-4 h-4" />
            <span className="text-sm">{selectedFilter}</span>
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

      {/* 탭별 카테고리 */}
      <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
        {getCategoriesForTab(selectedTab).map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.name)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              selectedCategory === category.name
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <span>{category.icon}</span>
            <span className="text-sm font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderContentCard = (content) => (
    <div 
      key={content.id} 
      className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-4 cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => navigate(`/community/${content.id}`)}
    >
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="text-xl">{content.author.avatar}</div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-800">{content.author.name}</span>
                {content.author.isVerified && <Shield className="w-3 h-3 text-blue-500" />}
                {content.author.isBusinessAccount && (
                  <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">
                    업체
                  </span>
                )}
                {content.author.specialty && (
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                    {content.author.specialty}
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xs text-gray-500">{content.time}</span>
                {content.location && (
                  <>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{content.location}</span>
                  </>
                )}
              </div>
            </div>
          </div>
          
          {content.isPinned ? (
            <div className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs font-medium">
              📌 중요
            </div>
          ) : content.isHot ? (
            <div className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium">
              🔥 인기
            </div>
          ) : content.isHelpful ? (
            <div className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">
              💡 도움됨
            </div>
          ) : null}
        </div>

        <h3 className="text-gray-800 font-semibold text-lg leading-6 mb-2">
          {content.title}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {content.content}
        </p>

        {/* 모임 정보 */}
        {content.participants && (
          <div className="bg-green-50 rounded-lg p-3 mb-3">
            <div className="flex items-center justify-between">
              <div className="flex flex-col space-y-1">
                <span className="text-sm text-green-800">
                  📅 {content.meetingDate} | 👥 {content.participants}/{content.maxParticipants}명
                </span>
                <span className="text-xs text-green-600">📍 {content.location}</span>
              </div>
              <button className="px-3 py-1 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition-colors">
                참여
              </button>
            </div>
            {content.cost && (
              <div className="text-sm text-green-600 mt-2">💰 {content.cost}</div>
            )}
          </div>
        )}

        {/* 업체 정보 */}
        {content.author.isBusinessAccount && (
          <div className="bg-blue-50 rounded-lg p-3 mb-3">
            <div className="flex items-center justify-between">
              <div className="flex flex-col space-y-1">
                {content.contactInfo && (
                  <span className="text-sm text-blue-800">📞 {content.contactInfo}</span>
                )}
                {content.businessHours && (
                  <span className="text-xs text-blue-600">🕒 {content.businessHours}</span>
                )}
                {content.salary && (
                  <span className="text-sm text-blue-800">💰 {content.salary}</span>
                )}
                {content.consultationType === 'free' && (
                  <span className="text-sm text-blue-800">💼 무료상담 | ⏱️ {content.responseTime}</span>
                )}
              </div>
              <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors">
                {content.category === '구인구직' ? '지원' : '문의'}
              </button>
            </div>
          </div>
        )}

        {/* 태그들 */}
        <div className="flex flex-wrap gap-2 mb-3">
          {content.tags?.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* 하단 액션 */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
              <Heart className="w-4 h-4" />
              <span className="text-sm">{content.likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm">{content.comments}</span>
            </button>
            <span className="text-sm text-gray-400">조회 {content.views}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {renderHeader()}
      {renderMainTabs()}
      {renderFilterSection()}

      <div className="px-4 py-4">
        <div className="space-y-0">
          {getCurrentContent().map(renderContentCard)}
        </div>

        <div className="mt-6 text-center">
          <button className="px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            더 많은 {selectedTab} 콘텐츠 보기
          </button>
        </div>
      </div>

      {/* 글쓰기 버튼 - 탭별 다른 텍스트 */}
      <button className="fixed bottom-20 right-4 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors">
        <Plus className="w-6 h-6 text-white" />
      </button>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          {['홈', '중고거래', '커뮤니티', '채팅', '내관리'].map((tab, index) => (
            <button
              key={index}
              className={`flex flex-col items-center py-2 px-3 ${
                tab === '커뮤니티' ? 'text-blue-500' : 'text-gray-400'
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

export default HikoCommunityStructure;