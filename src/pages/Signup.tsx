import React, { useState } from 'react';
import { ChevronDown, ArrowRight, MessageCircle, Heart, Globe, Check, Shield, Clock } from 'lucide-react';

const HikoOptimizedSignup = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userName, setUserName] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('한국어');
  const [userCountry, setUserCountry] = useState('');
  const [signupMethod, setSignupMethod] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [showLanguageSelect, setShowLanguageSelect] = useState(false);
  const [showUserCountrySelect, setShowUserCountrySelect] = useState(false);

  const languages = [
    { flag: '🇰🇷', name: '한국어' },
    { flag: '🇺🇸', name: 'English' },
    { flag: '🇯🇵', name: '日本語' },
    { flag: '🇨🇳', name: '中文' },
    { flag: '🇻🇳', name: 'Tiếng Việt' },
    { flag: '🇹🇭', name: 'ไทย' },
    { flag: '🇲🇳', name: 'Монгол' }
  ];

  const countries = [
    { flag: '🇰🇷', name: '대한민국', lang: '한국어' },
    { flag: '🇺🇸', name: '미국', lang: 'English' },
    { flag: '🇬🇧', name: '영국', lang: 'English' },
    { flag: '🇨🇦', name: '캐나다', lang: 'English' },
    { flag: '🇦🇺', name: '호주', lang: 'English' },
    { flag: '🇳🇿', name: '뉴질랜드', lang: 'English' },
    { flag: '🇿🇦', name: '남아프리카공화국', lang: 'English' },
    { flag: '🇮🇪', name: '아일랜드', lang: 'English' },
    { flag: '🇯🇵', name: '일본', lang: '日本語' },
    { flag: '🇨🇳', name: '중국', lang: '中文' },
    { flag: '🇹🇼', name: '대만', lang: '中文' },
    { flag: '🇭🇰', name: '홍콩', lang: '中文' },
    { flag: '🇻🇳', name: '베트남', lang: 'Tiếng Việt' },
    { flag: '🇹🇭', name: '태국', lang: 'ไทย' },
    { flag: '🇲🇳', name: '몽골', lang: 'Монгол' },
    { flag: '🇵🇭', name: '필리핀', lang: 'English' },
    { flag: '🇮🇳', name: '인도', lang: 'English' },
    { flag: '🇸🇬', name: '싱가포르', lang: 'English' },
    { flag: '🇲🇾', name: '말레이시아', lang: 'English' },
    { flag: '🇮🇩', name: '인도네시아', lang: 'Bahasa Indonesia' },
    { flag: '🇷🇺', name: '러시아', lang: 'Русский' },
    { flag: '🇺🇿', name: '우즈베키스탄', lang: 'O\'zbek' },
    { flag: '🇰🇿', name: '카자흐스탄', lang: 'Қазақ' },
    { flag: '🇫🇷', name: '프랑스', lang: 'Français' },
    { flag: '🇩🇪', name: '독일', lang: 'Deutsch' },
    { flag: '🇮🇹', name: '이탈리아', lang: 'Italiano' },
    { flag: '🇪🇸', name: '스페인', lang: 'Español' },
    { flag: '🇧🇷', name: '브라질', lang: 'Português' },
    { flag: '🇲🇽', name: '멕시코', lang: 'Español' },
    { flag: '🇳🇬', name: '나이지리아', lang: 'English' }
  ];

  const steps = [
    // Step 0: 스플래시 + 빠른 매몰비용 생성
    {
      component: (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
          <div className="flex-1 flex flex-col justify-center items-center px-6">
            
            {/* 로고 영역 */}
            <div className="mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                  <div className="text-white text-3xl font-bold">Hi</div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🇰🇷</span>
                </div>
              </div>
            </div>

            {/* 간결한 타이틀 */}
            <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
              한국 생활의 하이코
            </h1>
            <p className="text-gray-600 mb-8 text-center">
              진짜 한국인들만 아는 정보를 당신의 언어로
            </p>

            {/* 사용할 명칭과 언어 선택 */}
            <div className="w-full max-w-sm space-y-4 mb-6">
              {/* 사용할 명칭 입력 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  사용할 명칭을 입력해주세요
                </label>
                <input 
                  type="text" 
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="닉네임 또는 이름"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* 사용 언어 선택 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  사용할 언어를 선택해주세요
                </label>
                <div className="relative">
                  <button
                    onClick={() => setShowLanguageSelect(!showLanguageSelect)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-xl hover:border-blue-300 transition-colors"
                  >
                    <span className="text-gray-700">{selectedLanguage}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showLanguageSelect ? 'rotate-180' : ''}`} />
                  </button>

                  {showLanguageSelect && (
                    <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-10 max-h-48 overflow-y-auto">
                      {languages.map((language, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedLanguage(language.name);
                            setShowLanguageSelect(false);
                          }}
                          className="w-full flex items-center px-4 py-3 hover:bg-blue-50 first:rounded-t-xl last:rounded-b-xl transition-colors"
                        >
                          <span className="text-lg mr-3">{language.flag}</span>
                          <span className="text-gray-700">{language.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 간단한 가치 제안 */}
            <div className="w-full max-w-sm bg-blue-50 rounded-lg p-3 mb-6">
              <div className="flex items-center justify-center space-x-4 text-sm">
                <span className="flex items-center text-blue-600">
                  <Heart className="w-4 h-4 mr-1" />
                  핫딜
                </span>
                <span className="flex items-center text-blue-600">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  소통
                </span>
                <span className="flex items-center text-blue-600">
                  <Globe className="w-4 h-4 mr-1" />
                  번역
                </span>
              </div>
            </div>
          </div>

          {/* 하단 버튼 */}
          <div className="px-6 pb-8">
            <button 
              onClick={() => setCurrentStep(1)}
              disabled={!userName.trim()}
              className="w-full bg-blue-500 text-white py-4 rounded-xl text-lg font-semibold mb-4 hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center"
            >
              다음
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>

            <div className="text-center">
              <span className="text-gray-500 text-sm">이미 계정이 있나요? </span>
              <button className="text-blue-500 font-semibold text-sm hover:text-blue-600 transition-colors">
                로그인
              </button>
            </div>
          </div>
        </div>
      )
    },

    // Step 1: 가입 방법 선택 (소셜 로그인 메인)
    {
      component: (
        <div className="min-h-screen bg-white flex flex-col">
          {/* 상단 헤더 */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <button 
              onClick={() => setCurrentStep(0)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              ←
            </button>
            <span className="text-gray-600 text-sm">2/4</span>
          </div>

          <div className="flex-1 flex flex-col justify-center px-6">
            {/* 제목 */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {userName}님, 가장 편한 방법으로 시작하세요
              </h1>
              <p className="text-gray-600">
                30초 만에 가입하고 바로 이용할 수 있어요
              </p>
            </div>

            {/* 소셜 로그인 버튼들 (메인) */}
            <div className="space-y-3 mb-8">
              <button 
                onClick={() => {
                  setSignupMethod('social');
                  setCurrentStep(2);
                }}
                className="w-full bg-white border border-gray-300 rounded-xl py-4 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
              >
                <div className="w-5 h-5 bg-red-500 rounded mr-3"></div>
                <span className="font-medium text-gray-800">Google로 30초 가입</span>
              </button>
              
              <button 
                onClick={() => {
                  setSignupMethod('social');
                  setCurrentStep(2);
                }}
                className="w-full bg-black rounded-xl py-4 flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm"
              >
                <div className="w-5 h-5 bg-white rounded mr-3"></div>
                <span className="font-medium text-white">Apple로 30초 가입</span>
              </button>
              
              <button 
                onClick={() => {
                  setSignupMethod('social');
                  setCurrentStep(2);
                }}
                className="w-full bg-yellow-400 rounded-xl py-4 flex items-center justify-center hover:bg-yellow-500 transition-colors shadow-sm"
              >
                <div className="w-5 h-5 bg-brown-600 rounded mr-3"></div>
                <span className="font-medium text-gray-800">KakaoTalk으로 30초 가입</span>
              </button>
              
              <button 
                onClick={() => {
                  setSignupMethod('social');
                  setCurrentStep(2);
                }}
                className="w-full bg-blue-600 rounded-xl py-4 flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm"
              >
                <div className="w-5 h-5 bg-white rounded mr-3"></div>
                <span className="font-medium text-white">Facebook으로 30초 가입</span>
              </button>
            </div>

            {/* 구분선 */}
            <div className="flex items-center mb-6">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-gray-500 text-sm">또는</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            {/* 전화번호 가입 */}
            <button 
              onClick={() => {
                setSignupMethod('phone');
                setCurrentStep(3);
              }}
              className="w-full border border-gray-300 rounded-xl py-4 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              전화번호로 가입하기
            </button>

            {/* 소셜 가입 장점 안내 */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-6">
              <p className="text-green-700 text-sm text-center">
                <Check className="w-4 h-4 inline mr-1" />
                소셜 가입시 즉시 핫딜 정보와 커뮤니티 이용 가능
              </p>
            </div>
          </div>
        </div>
      )
    },

    // Step 2: 소셜 로그인 후 SMS 인증 선택
    {
      component: (
        <div className="min-h-screen bg-white flex flex-col">
          {/* 상단 헤더 */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <button 
              onClick={() => setCurrentStep(1)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              ←
            </button>
            <span className="text-gray-600 text-sm">3/4</span>
          </div>

          <div className="flex-1 flex flex-col justify-center px-6">
            {/* 가입 완료 축하 */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-blue-500" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {userName}님, 가입이 완료되었습니다!
              </h1>
              <p className="text-gray-600">
                추가 인증으로 더 많은 기능을 이용하세요
              </p>
            </div>

            {/* 현재 이용 가능한 기능 */}
            <div className="bg-green-50 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-green-800 mb-3">✅ 지금 바로 이용 가능</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li className="flex items-start">
                  <Check className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>실시간 핫딜 정보 확인</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>커뮤니티 글 읽기</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>실시간 번역 서비스</span>
                </li>
              </ul>
            </div>

            {/* SMS 인증으로 추가 가능한 기능 */}
            <div className="bg-blue-50 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-blue-800 mb-3">📱 휴대폰 인증시 추가 이용</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">+</span>
                  <span>게시글 작성, 댓글 참여</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">+</span>
                  <span>커뮤니티 가입 및 채팅</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">+</span>
                  <span>안전한 중고거래 참여</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">+</span>
                  <span>핫딜 알림 받기</span>
                </li>
              </ul>
            </div>

            {/* 인증 선택 버튼들 */}
            <div className="space-y-3 mb-6">
              <button 
                onClick={() => setCurrentStep(3)}
                className="w-full bg-blue-500 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                <Shield className="w-5 h-5 inline mr-2" />
                지금 휴대폰 인증하기
              </button>
              
              <button 
                onClick={() => setCurrentStep(4)}
                className="w-full border border-gray-300 rounded-xl py-4 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                <Clock className="w-4 h-4 inline mr-2" />
                나중에 인증하기
              </button>
            </div>

            {/* 안내 문구 */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-yellow-700 text-sm text-center">
                💡 언제든지 설정에서 휴대폰 인증을 완료할 수 있어요
              </p>
            </div>
          </div>
        </div>
      )
    },

    // Step 3: 휴대폰 번호 입력 + SMS 인증
    {
      component: (
        <div className="min-h-screen bg-white flex flex-col">
          {/* 상단 헤더 */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <button 
              onClick={() => setCurrentStep(signupMethod === 'social' ? 2 : 1)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              ←
            </button>
            <span className="text-gray-600 text-sm">{signupMethod === 'social' ? '4/4' : '3/4'}</span>
          </div>

          <div className="flex-1 flex flex-col justify-center px-6">
            {!phoneNumber ? (
              // 휴대폰 번호 입력
              <>
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    안전한 하이코 이용을 위해
                  </h1>
                  <p className="text-gray-600">
                    휴대폰 인증을 진행할게요
                  </p>
                </div>

                {/* 국가 선택 */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    어느 나라에서 오셨나요?
                  </label>
                  <div className="relative">
                    <button
                      onClick={() => setShowUserCountrySelect(!showUserCountrySelect)}
                      className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-xl hover:border-blue-300 transition-colors"
                    >
                      <span className="text-gray-700">{userCountry || '국가를 선택해주세요'}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showUserCountrySelect ? 'rotate-180' : ''}`} />
                    </button>

                    {showUserCountrySelect && (
                      <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-10 max-h-48 overflow-y-auto">
                        {countries.map((country, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setUserCountry(`${country.flag} ${country.name}`);
                              setShowUserCountrySelect(false);
                            }}
                            className="w-full flex items-center px-4 py-3 hover:bg-blue-50 first:rounded-t-xl last:rounded-b-xl transition-colors"
                          >
                            <span className="text-lg mr-3">{country.flag}</span>
                            <span className="text-gray-700">{country.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* 왜 필요한지 설명 */}
                <div className="bg-blue-50 rounded-xl p-4 mb-6">
                  <h3 className="font-semibold text-blue-800 mb-2">🛡️ 휴대폰 인증이 필요한 이유</h3>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>• 스팸 계정 차단으로 안전한 커뮤니티 유지</li>
                    <li>• 중고거래 시 사기 방지</li>
                    <li>• 중요한 알림 전송</li>
                  </ul>
                </div>

                {/* 휴대폰 번호 입력 */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    휴대폰 번호 (해외번호도 가능)
                  </label>
                  <input 
                    type="tel" 
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+82 10-1234-5678"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button 
                  onClick={() => setPhoneNumber(phoneNumber || '+82 10-1234-5678')}
                  disabled={!phoneNumber.trim() || !userCountry}
                  className="w-full bg-blue-500 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  인증번호 받기
                </button>
              </>
            ) : (
              // SMS 인증번호 입력
              <>
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    인증번호를 입력해주세요
                  </h1>
                  <p className="text-gray-600">
                    {phoneNumber}로 전송된 6자리 숫자
                  </p>
                </div>

                {/* 인증번호 입력 */}
                <div className="mb-6">
                  <input 
                    type="text" 
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    placeholder="123456"
                    maxLength="6"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-center text-2xl tracking-widest text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* 타이머 */}
                <div className="text-center mb-6">
                  <span className="text-blue-600 font-medium">04:59</span>
                  <span className="text-gray-500 text-sm ml-2">남음</span>
                </div>

                <button 
                  onClick={() => setCurrentStep(4)}
                  disabled={verificationCode.length !== 6}
                  className="w-full bg-blue-500 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed mb-4"
                >
                  인증 완료
                </button>

                <button className="w-full text-gray-600 py-2 text-sm hover:text-gray-800 transition-colors">
                  인증번호를 받지 못하셨나요? 다시 받기
                </button>
              </>
            )}
          </div>
        </div>
      )
    },

    // Step 4: 최종 완료
    {
      component: (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <Check className="w-10 h-10 text-green-500" />
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
            {phoneNumber ? '모든 준비가 완료되었습니다!' : '하이코에 오신 것을 환영합니다!'}
          </h1>
          <p className="text-gray-600 mb-8 text-center">
            {userName}님, {phoneNumber ? '하이코의 모든 서비스를' : '핫딜 정보를 바로'} 이용하세요
          </p>

          {/* 이용 가능 서비스 */}
          <div className="w-full max-w-sm space-y-3 mb-8">
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-gray-700">실시간 핫딜 정보 확인</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-gray-700">커뮤니티 글 읽기</span>
            </div>
            {phoneNumber && (
              <>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">게시글 작성 및 댓글</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">중고거래 및 채팅</span>
                </div>
              </>
            )}
          </div>

          {!phoneNumber && (
            <div className="w-full max-w-sm bg-blue-50 rounded-lg p-3 mb-6">
              <p className="text-blue-700 text-sm text-center">
                💡 설정에서 언제든지 휴대폰 인증으로 모든 기능을 이용할 수 있어요
              </p>
            </div>
          )}

          <button 
            onClick={() => window.location.href = '/home'}
            className="w-full max-w-sm bg-blue-500 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-600 transition-colors">
            하이코 홈으로 가기
          </button>
        </div>
      )
    }
  ];

  return steps[currentStep].component;
};

export default HikoOptimizedSignup;