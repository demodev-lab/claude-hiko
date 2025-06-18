import React, { useState } from 'react';
import { Search, Bell, Menu, Heart, MessageCircle, Eye, Share2, ChevronDown, Globe, Plus, Filter, Map, Star, Train, Clock, Shield } from 'lucide-react';

const HikoIntegratedApp = () => {
  const [activeTab, setActiveTab] = useState('홈');
  const [selectedRegion, setSelectedRegion] = useState('전체보기');
  const [showRegionDropdown, setShowRegionDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('🇰🇷 한국');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedSort, setSelectedSort] = useState('추천순');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedFilter, setSelectedFilter] = useState('추천순');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  // 한국 지역 목록 (시/도 및 주요 구/군) - 외국인 친화적 구조
  const koreanRegions = [
    '전체보기',
    '서울특별시',
    '서울 강남구', '서울 강북구', '서울 강서구', '서울 관악구', '서울 광진구',
    '서울 구로구', '서울 금천구', '서울 노원구', '서울 도봉구', '서울 동대문구',
    '서울 동작구', '서울 마포구', '서울 서대문구', '서울 서초구', '서울 성동구',
    '서울 성북구', '서울 송파구', '서울 양천구', '서울 영등포구', '서울 용산구',
    '서울 은평구', '서울 종로구', '서울 중구', '서울 중랑구',
    '부산광역시',
    '부산 해운대구', '부산 부산진구', '부산 동래구', '부산 남구', '부산 북구',
    '부산 사상구', '부산 사하구', '부산 서구', '부산 영도구', '부산 중구',
    '부산 강서구', '부산 금정구', '부산 동구', '부산 연제구', '부산 수영구', '부산 기장군',
    '대구광역시',
    '대구 중구', '대구 동구', '대구 서구', '대구 남구', '대구 북구', '대구 수성구', '대구 달서구', '대구 달성군',
    '인천광역시',
    '인천 중구', '인천 동구', '인천 미추홀구', '인천 연수구', '인천 남동구',
    '인천 부평구', '인천 계양구', '인천 서구', '인천 강화군', '인천 옹진군',
    '광주광역시',
    '광주 동구', '광주 서구', '광주 남구', '광주 북구', '광주 광산구',
    '대전광역시',
    '대전 동구', '대전 중구', '대전 서구', '대전 유성구', '대전 대덕구',
    '울산광역시',
    '울산 중구', '울산 남구', '울산 동구', '울산 북구', '울산 울주군',
    '세종특별자치시',
    '경기도',
    '경기 수원시', '경기 성남시', '경기 고양시', '경기 용인시', '경기 부천시',
    '경기 안산시', '경기 안양시', '경기 남양주시', '경기 화성시', '경기 평택시',
    '경기 의정부시', '경기 시흥시', '경기 파주시', '경기 김포시', '경기 광명시',
    '경기 광주시', '경기 군포시', '경기 오산시', '경기 이천시', '경기 양주시',
    '경기 구리시', '경기 안성시', '경기 포천시', '경기 의왕시', '경기 하남시',
    '경기 여주시', '경기 동두천시', '경기 과천시',
    '경기 연천군', '경기 가평군', '경기 양평군',
    '강원특별자치도',
    '강원 춘천시', '강원 원주시', '강원 강릉시', '강원 동해시', '강원 태백시',
    '강원 속초시', '강원 삼척시',
    '강원 홍천군', '강원 횡성군', '강원 영월군', '강원 평창군', '강원 정선군',
    '강원 철원군', '강원 화천군', '강원 양구군', '강원 인제군', '강원 고성군', '강원 양양군',
    '충청북도',
    '충북 청주시', '충북 충주시', '충북 제천시',
    '충북 보은군', '충북 옥천군', '충북 영동군', '충북 증평군', '충북 진천군',
    '충북 괴산군', '충북 음성군', '충북 단양군',
    '충청남도',
    '충남 천안시', '충남 공주시', '충남 보령시', '충남 아산시', '충남 서산시',
    '충남 논산시', '충남 계룡시', '충남 당진시',
    '충남 금산군', '충남 부여군', '충남 서천군', '충남 청양군', '충남 홍성군',
    '충남 예산군', '충남 태안군',
    '전라북도',
    '전북 전주시', '전북 군산시', '전북 익산시', '전북 정읍시', '전북 남원시',
    '전북 김제시',
    '전북 완주군', '전북 진안군', '전북 무주군', '전북 장수군', '전북 임실군',
    '전북 순창군', '전북 고창군', '전북 부안군',
    '전라남도',
    '전남 목포시', '전남 여수시', '전남 순천시', '전남 나주시', '전남 광양시',
    '전남 담양군', '전남 곡성군', '전남 구례군', '전남 고흥군', '전남 보성군',
    '전남 화순군', '전남 장흥군', '전남 강진군', '전남 해남군', '전남 영암군',
    '전남 무안군', '전남 함평군', '전남 영광군', '전남 장성군', '전남 완도군',
    '전남 진도군', '전남 신안군',
    '경상북도',
    '경북 포항시', '경북 경주시', '경북 김천시', '경북 안동시', '경북 구미시',
    '경북 영주시', '경북 영천시', '경북 상주시', '경북 문경시', '경북 경산시',
    '경북 군위군', '경북 의성군', '경북 청송군', '경북 영양군', '경북 영덕군',
    '경북 청도군', '경북 고령군', '경북 성주군', '경북 칠곡군', '경북 예천군',
    '경북 봉화군', '경북 울진군', '경북 울릉군',
    '경상남도',
    '경남 창원시', '경남 진주시', '경남 통영시', '경남 사천시', '경남 김해시',
    '경남 밀양시', '경남 거제시', '경남 양산시',
    '경남 의령군', '경남 함안군', '경남 창녕군', '경남 고성군', '경남 남해군',
    '경남 하동군', '경남 산청군', '경남 함양군', '경남 거창군', '경남 합천군',
    '제주특별자치도',
    '제주 제주시', '제주 서귀포시'
  ];

  const countries = [
    '🇰🇷 한국', '🇺🇸 미국', '🇯🇵 일본', '🇨🇳 중국', 
    '🇻🇳 베트남', '🇹🇭 태국', '🇲🇳 몽골', '🇵🇭 필리핀',
    '🇮🇳 인도', '🇸🇬 싱가포르', '🇲🇾 말레이시아', '🇮🇩 인도네시아',
    '🇷🇺 러시아', '🇺🇿 우즈베키스탄', '🇰🇿 카자흐스탄',
    '🇫🇷 프랑스', '🇩🇪 독일', '🇮🇹 이탈리아', '🇪🇸 스페인',
    '🇬🇧 영국', '🇨🇦 캐나다', '🇦🇺 호주', '🇳🇿 뉴질랜드',
    '🇧🇷 브라질', '🇲🇽 멕시코', '🇳🇬 나이지리아', '🇿🇦 남아프리카공화국'
  ];

  // 홈 탭 카테고리와 중고거래 탭 카테고리
  const homeCategories = ['전체', '핫딜', '생활정보', '뷰티', '취업', '유머', '맛집'];
  const marketCategories = ['전체', '생활용품', '전자기기', '의류/잡화', '한국문화상품', '학용품', '가구/인테리어', '뷰티'];

  const sortOptions = [
    '추천순',
    '최신순', 
    '저가순',
    '고가순',
    '거리순'
  ];

  // 홈 탭 핫딜 데이터
  const hotDeals = [
    {
      id: 1,
      title: '쿠팡 로켓배송 생수 2L 12개입 할인!',
      originalTitle: '쿠팡 로켓배송 생수 2L×12개 특가세일',
      price: '12,900원',
      originalPrice: '19,900원',
      discount: '35%',
      image: '/api/placeholder/120/120',
      source: '뽐뿌',
      time: '2분 전',
      views: 156,
      likes: 23,
      comments: 8,
      category: '핫딜',
      isTranslated: true
    },
    {
      id: 2,
      title: '외국인 필수! 한국 의료보험 가입 완벽 가이드',
      originalTitle: '외국인 건강보험 가입방법 총정리',
      image: '/api/placeholder/120/120',
      source: '네이트판',
      time: '15분 전',
      views: 89,
      likes: 31,
      comments: 12,
      category: '생활정보',
      isTranslated: true
    },
    {
      id: 3,
      title: '올리브영 세일! 한국 화장품 최대 50% 할인',
      originalTitle: '올리브영 더블세일 화장품 반값딜',
      price: '각종 할인',
      image: '/api/placeholder/120/120',
      source: '알구몬',
      time: '32분 전',
      views: 234,
      likes: 67,
      comments: 19,
      category: '뷰티',
      isTranslated: true
    },
    {
      id: 4,
      title: '서울 지하철 무료 와이파이 사용법 꿀팁',
      originalTitle: '지하철 공짜 와이파이 연결하는 법',
      image: '/api/placeholder/120/120',
      source: '커뮤니티',
      time: '1시간 전',
      views: 445,
      likes: 89,
      comments: 27,
      category: '생활정보',
      isTranslated: true
    },
    {
      id: 5,
      title: 'GS25 편의점 1+1 행사 완전정리 (매주 업데이트)',
      originalTitle: 'GS25 원플러스원 이번주 품목정리',
      image: '/api/placeholder/120/120',
      source: '뽐뿌',
      time: '2시간 전',
      views: 678,
      likes: 156,
      comments: 43,
      category: '핫딜',
      isTranslated: true
    }
  ];

  // 중고거래 상품 데이터
  const marketItems = [
    {
      id: 1,
      title: '아이폰 15 Pro 256GB (한국내 사용가능)',
      originalTitle: '아이폰15프로 256기가 팝니다',
      price: '1,200,000원',
      originalPrice: '1,600,000원',
      location: '강남구 역삼동',
      distance: '2.3km',
      time: '3분 전',
      image: '/api/placeholder/120/120',
      likes: 23,
      chats: 8,
      views: 156,
      seller: {
        name: '김하이코',
        rating: 4.8,
        foreignerFriendly: true,
        languages: ['한국어', 'English'],
        reviewCount: 34,
        isVerified: true
      },
      tags: ['외국인거래경험', '직거래선호', '택배가능'],
      isTranslated: true,
      transitAccess: '지하철 2호선 역삼역 5분',
      condition: '상급',
      description: '해외 출국으로 급매합니다. 박스, 충전기 모두 있어요.'
    },
    {
      id: 2,
      title: '한국 전통 찻잔 세트 (선물포장 가능)',
      originalTitle: '전통 찻잔 세트 팔아요',
      price: '80,000원',
      originalPrice: '120,000원',
      location: '서울 중구 명동',
      distance: '4.1km',
      time: '15분 전',
      image: '/api/placeholder/120/120',
      likes: 12,
      chats: 5,
      views: 89,
      seller: {
        name: 'Sarah Kim',
        rating: 4.9,
        foreignerFriendly: true,
        languages: ['English', '한국어'],
        reviewCount: 28,
        isVerified: true
      },
      tags: ['선물포장가능', '영어소통', '관광지근처'],
      isTranslated: true,
      transitAccess: '지하철 4호선 명동역 3분',
      condition: '새상품',
      description: '외국인 친구들 선물용으로 최적! 포장 서비스 무료.'
    },
    {
      id: 3,
      title: '삼성 노트북 갤럭시북 (한영 키보드)',
      originalTitle: '갤럭시북 판매합니다',
      price: '650,000원',
      location: '마포구 홍대입구',
      distance: '1.8km',
      time: '1시간 전',
      image: '/api/placeholder/120/120',
      likes: 45,
      chats: 23,
      views: 234,
      seller: {
        name: '이글로벌',
        rating: 4.7,
        foreignerFriendly: true,
        languages: ['한국어', '中文', 'English'],
        reviewCount: 52,
        isVerified: true
      },
      tags: ['다국어가능', '정품인증서', '무료배송'],
      isTranslated: true,
      transitAccess: '지하철 2호선 홍대입구역 도보 8분',
      condition: '중급',
      description: '학업용으로 사용. 한영 키보드로 외국인분들께 편리해요.'
    }
  ];

  const currentCategories = activeTab === '홈' ? homeCategories : marketCategories;
  const currentData = activeTab === '홈' ? hotDeals : marketItems;

  const renderHeader = () => (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* 좌측: 브랜드 로고 */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">Hi</span>
          </div>
          <span className="text-lg font-bold text-gray-800">하이코</span>
        </div>

        {/* 우측: 외국인 필수 기능들 - 모든 탭에서 고정 */}
        <div className="flex items-center space-x-1">
          {/* 긴급통역 - 최우선 고정 */}
          <button className="flex items-center space-x-1 px-3 py-1 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors">
            <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">!</span>
            </div>
            <span className="text-xs text-red-600 font-medium">긴급통역</span>
          </button>
          
          {/* 번역상태 - 모든 탭에서 고정 */}
          <button className="flex items-center space-x-1 px-2 py-1 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <Globe className="w-4 h-4 text-blue-500" />
            <span className="text-xs text-blue-600">한→베</span>
          </button>
          
          {/* 검색 - 모든 탭에서 고정 */}
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          
          {/* 알림 - 모든 탭에서 고정 */}
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </button>
        </div>
      </div>
    </div>
  );

  const renderAdditionalFeatures = () => {
    if (activeTab !== '중고거래') return null;
    
    return (
      <div className="bg-white px-4 py-2 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <button className="flex items-center space-x-1 px-3 py-1 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors">
            <Map className="w-4 h-4 text-green-600" />
            <span className="text-xs text-green-600">지도보기</span>
          </button>
          <span className="text-sm text-gray-500">총 1,247개 상품</span>
        </div>
      </div>
    );
  };

  const renderCategoryFilter = () => (
    <div className="bg-white px-4 py-3 border-b border-gray-100">
      {/* 카테고리 필터만 표시 */}
      <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
        {currentCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );

  const renderLocationTabs = () => {
    if (activeTab !== '중고거래') return null;

    return (
      <div className="bg-white px-4 py-3 border-b border-gray-100">
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {/* 지역 선택 탭 */}
          <button 
            onClick={() => setShowRegionDropdown(!showRegionDropdown)}
            className="flex-1 flex items-center justify-center py-2 px-2 bg-white rounded-md shadow-sm transition-colors relative"
          >
            <span className="text-xs font-medium text-gray-800 truncate">{selectedRegion}</span>
            <ChevronDown className={`w-3 h-3 ml-1 text-gray-500 transition-transform ${showRegionDropdown ? 'rotate-180' : ''}`} />
            
            {showRegionDropdown && (
              <div className="absolute top-12 left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                {koreanRegions.map((region, index) => {
                  // 지역 타입 구분 (외국인 친화적)
                  const isMainRegion = region === '전체보기' || region.includes('특별시') || region.includes('광역시') || region.includes('도');
                  const isDistrict = region.includes('구') || region.includes('군');
                  
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedRegion(region);
                        setShowRegionDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-2 hover:bg-gray-50 text-sm ${
                        isMainRegion
                          ? 'font-bold text-blue-800 bg-blue-50 border-b border-blue-200' 
                          : isDistrict
                          ? 'text-gray-700 pl-6 hover:bg-blue-50'
                          : 'text-gray-600 pl-4'
                      } ${index === 0 ? 'rounded-t-lg' : ''} ${index === koreanRegions.length - 1 ? 'rounded-b-lg' : ''}`}
                    >
                      {region}
                    </button>
                  );
                })}
              </div>
            )}
          </button>
          
          {/* 국가 선택 탭 */}
          <button 
            onClick={() => setShowCountryDropdown(!showCountryDropdown)}
            className="flex-1 flex items-center justify-center py-2 px-2 hover:bg-white hover:rounded-md transition-colors relative"
          >
            <span className="text-xs font-medium text-gray-600 truncate">{selectedCountry}</span>
            <ChevronDown className={`w-3 h-3 ml-1 text-gray-500 transition-transform ${showCountryDropdown ? 'rotate-180' : ''}`} />
            
            {showCountryDropdown && (
              <div className="absolute top-12 left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                {countries.map((country, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedCountry(country);
                      setShowCountryDropdown(false);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg text-sm"
                  >
                    {country}
                  </button>
                ))}
              </div>
            )}
          </button>

          {/* 정렬 필터 탭 */}
          <button 
            onClick={() => setShowSortDropdown(!showSortDropdown)}
            className="flex-1 flex items-center justify-center py-2 px-2 hover:bg-white hover:rounded-md transition-colors relative"
          >
            <span className="text-xs font-medium text-gray-600 truncate">{selectedSort}</span>
            <ChevronDown className={`w-3 h-3 ml-1 text-gray-500 transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
            
            {showSortDropdown && (
              <div className="absolute top-12 left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                {sortOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedSort(option);
                      setShowSortDropdown(false);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg text-sm"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </button>
        </div>
      </div>
    );
  };

  const renderTranslationNotice = () => (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4 flex items-center">
      <Globe className="w-5 h-5 text-blue-500 mr-2" />
      <span className="text-blue-700 text-sm">
        {activeTab === '홈' 
          ? '한국 커뮤니티 콘텐츠가 베트남어로 번역되었습니다.' 
          : `${selectedRegion !== '전체보기' ? selectedRegion + '에 거주하는 ' : ''}${selectedCountry.split(' ')[1]} 사용자들의 상품이 베트남어로 번역되었습니다.`
        }
        <button className="text-blue-600 underline ml-1">한국어 원문보기</button>
      </span>
    </div>
  );

  const renderHomeContent = () => (
    <div className="space-y-4">
      {hotDeals.map((deal) => (
        <div key={deal.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-4 pb-3">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                {/* 카테고리 및 출처 */}
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                    {deal.category}
                  </span>
                  <span className="text-gray-500 text-xs">{deal.source}</span>
                  <span className="text-gray-400 text-xs">•</span>
                  <span className="text-gray-500 text-xs">{deal.time}</span>
                </div>
                
                {/* 제목 */}
                <h3 className="text-gray-800 font-medium text-sm leading-5 mb-2">
                  {deal.title}
                </h3>

                {/* 가격 정보 (있는 경우) */}
                {deal.price && (
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-red-500">{deal.price}</span>
                    {deal.originalPrice && (
                      <>
                        <span className="text-sm text-gray-400 line-through">{deal.originalPrice}</span>
                        <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
                          {deal.discount} 할인
                        </span>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* 이미지 */}
              <div className="ml-3">
                <img 
                  src={deal.image} 
                  alt={deal.title}
                  className="w-20 h-20 rounded-lg object-cover"
                />
              </div>
            </div>

            {/* 번역 정보 - 외국인 친화적 표현 */}
            {deal.isTranslated && (
              <div className="text-xs text-gray-500 mb-3 flex items-center">
                <Globe className="w-3 h-3 mr-1" />
                한국어 원문: {deal.originalTitle}
              </div>
            )}

            {/* 액션 버튼들 */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">{deal.likes}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">{deal.comments}</span>
                </button>
                <div className="flex items-center space-x-1 text-gray-400">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">{deal.views}</span>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Share2 className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderMarketContent = () => (
    <div className="space-y-4">
      {marketItems.map((item) => (
        <div key={item.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-4">
            <div className="flex gap-4">
              {/* 상품 이미지 */}
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                {item.seller.foreignerFriendly && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Globe className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>

              {/* 상품 정보 */}
              <div className="flex-1 min-w-0">
                {/* 상품명 */}
                <h3 className="text-gray-800 font-medium text-sm leading-5 mb-1">
                  {item.title}
                </h3>

                {/* 번역 정보 - 외국인 사용자 우선 */}
                {item.isTranslated && (
                  <div className="text-xs text-gray-500 mb-2 flex items-center">
                    <Globe className="w-3 h-3 mr-1" />
                    한국어 원문: {item.originalTitle}
                  </div>
                )}

                {/* 가격 */}
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-lg font-bold text-gray-900">{item.price}</span>
                  {item.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">{item.originalPrice}</span>
                  )}
                </div>

                {/* 판매자 정보 */}
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm text-gray-600">{item.seller.name}</span>
                    {item.seller.isVerified && (
                      <Shield className="w-3 h-3 text-blue-500" />
                    )}
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-500" />
                    <span className="text-xs text-gray-600">{item.seller.rating}</span>
                    <span className="text-xs text-gray-400">({item.seller.reviewCount})</span>
                  </div>
                </div>

                {/* 위치 및 교통 */}
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-xs text-gray-500">{item.location} · {item.distance}</span>
                  <div className="flex items-center space-x-1">
                    <Train className="w-3 h-3 text-green-600" />
                    <span className="text-xs text-green-600">{item.transitAccess}</span>
                  </div>
                </div>

                {/* 태그들 */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {item.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 하단 정보 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-xs text-gray-400">
                    <Clock className="w-3 h-3" />
                    <span>{item.time}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">{item.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-xs">{item.chats}</span>
                    </button>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Eye className="w-4 h-4" />
                      <span className="text-xs">{item.views}</span>
                    </div>
                    <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                      <Share2 className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 상단 헤더 */}
      {renderHeader()}

      {/* 추가 기능 (중고거래만) */}
      {renderAdditionalFeatures()}

      {/* 지역/국가 선택 탭 (중고거래만) */}
      {renderLocationTabs()}

      {/* 카테고리 필터 */}
      {renderCategoryFilter()}

      {/* 메인 콘텐츠 */}
      <div className="px-4 py-4">
        {/* 콘텐츠 영역 */}
        {activeTab === '홈' ? renderHomeContent() : renderMarketContent()}

        {/* 더보기 버튼 */}
        <div className="mt-6 text-center">
          <button className="px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            {activeTab === '홈' ? '더 많은 핫딜 보기' : '더 많은 상품 보기'}
          </button>
        </div>
      </div>

      {/* 플로팅 글쓰기 버튼 (중고거래만) */}
      {activeTab === '중고거래' && (
        <button className="fixed bottom-20 right-4 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors">
          <Plus className="w-6 h-6 text-white" />
        </button>
      )}

      {/* 하단 네비게이션 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          {['홈', '중고거래', '커뮤니티', '채팅', '내관리'].map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(tab);
                // 탭 변경시 카테고리 초기화
                setSelectedCategory('전체');
              }}
              className={`flex flex-col items-center py-2 px-3 ${
                activeTab === tab ? 'text-blue-500' : 'text-gray-400'
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

export default HikoIntegratedApp;