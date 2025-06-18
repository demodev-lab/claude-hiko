import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, MessageCircle, Share2, MapPin, Eye, Shield, Globe, Search, Bell } from 'lucide-react';

const CommunityDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 더미 데이터 - 실제로는 id를 기반으로 API에서 가져와야 함
  const post = {
    id: id || '1',
    title: '서울 진짜 맛있는 베트남 식당 리스트 🍜',
    content: `고향 맛 그리운 베트남 형제자매들! 서울에서 찾은 진짜 맛있는 베트남 식당들 공유해요

1. 미스사이공 (강남)
- 위치: 강남역 11번 출구 도보 5분
- 추천메뉴: 분보후에, 반쎄오
- 가격대: 12,000-18,000원
- 특징: 베트남 현지 셰프가 직접 요리, 향신료 직수입

2. 포메인 (홍대)
- 위치: 홍대입구역 9번 출구
- 추천메뉴: 쌀국수, 스프링롤
- 가격대: 10,000-15,000원  
- 특징: 24시간 영업, 베트남어 가능한 직원 상주

3. 사이공바구엣 (이태원)
- 위치: 이태원역 3번 출구
- 추천메뉴: 반미 샌드위치
- 가격대: 7,000-9,000원
- 특징: 하노이 스타일 반미, 아침 7시부터 영업

4. 베트남쌀국수 (신촌)
- 위치: 신촌역 2번 출구
- 추천메뉴: 포보, 분짜
- 가격대: 9,000-13,000원
- 특징: 베트남인 사장님, 양 많고 친절함

5. 안안 (대림동)
- 위치: 대림역 12번 출구
- 추천메뉴: 반쎄오, 분티트느엉
- 가격대: 8,000-12,000원
- 특징: 현지인들이 가장 많이 가는 곳, 100% 베트남 맛

여러분들이 아는 다른 맛집도 댓글로 공유해주세요! 🇻🇳❤️`,
    author: {
      name: 'Nguyen Minh',
      avatar: '🇻🇳',
      isVerified: true,
      country: '베트남'
    },
    time: '30분 전',
    date: '2024.01.09',
    views: 234,
    likes: 67,
    comments: 23,
    category: '고향맛집',
    subcategory: '마이타운',
    tags: ['베트남식당', '쌀국수', '분보'],
    isPinned: true,
    images: []
  };

  const comments = [
    {
      id: 1,
      author: {
        name: 'Tran Van Duc',
        avatar: '🇻🇳',
        country: '베트남'
      },
      date: '2024.01.09',
      content: '와 정말 유용한 정보네요! 저는 미스사이공 자주 가는데 진짜 고향 맛이에요. 대림동 안안도 강추합니다!',
      likes: 12
    },
    {
      id: 2,
      author: {
        name: 'Le Thi Mai',
        avatar: '🇻🇳',
        country: '베트남'
      },
      date: '2024.01.09',
      content: '건대입구역 근처에 "하노이의 아침"이라는 곳도 있어요! 분짜가 정말 맛있습니다 ㅎㅎ',
      likes: 8
    },
    {
      id: 3,
      author: {
        name: 'Pham Hong',
        avatar: '🇻🇳',
        country: '베트남'
      },
      date: '2024.01.10',
      content: '포메인은 체인점이라 맛이 좀 한국화된 것 같아요. 저는 대림동 쪽을 더 추천해요! 거기 진짜 베트남 분위기 나요',
      likes: 15
    },
    {
      id: 4,
      author: {
        name: 'Nguyen Tuan',
        avatar: '🇻🇳',
        country: '베트남'
      },
      date: '2024.01.10',
      content: '노원역 근처 "사이공 마켓" 아시는 분? 거기도 식당이 있는데 반세오 맛집이에요!',
      likes: 6
    },
    {
      id: 5,
      author: {
        name: 'Hoang Kim',
        avatar: '🇻🇳',
        country: '베트남'
      },
      date: '2024.01.10',
      content: '감사합니다! 이런 정보 정말 필요했어요. 혹시 베트남 음식 재료 파는 마트도 추천해주실 수 있나요?',
      likes: 3
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">Hi</span>
              </div>
              <span className="text-lg font-bold text-gray-800">하이코</span>
            </div>
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
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
            
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </button>
          </div>
        </div>
      </div>

      {/* 게시글 내용 */}
      <div className="bg-white">
        {/* 카테고리 */}
        <div className="px-4 pt-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="text-blue-600 font-medium">{post.subcategory}</span>
            <span>{'>'}</span>
            <span>{post.category}</span>
            {post.isPinned && (
              <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs font-medium">
                📌 중요
              </span>
            )}
          </div>
        </div>

        {/* 제목 */}
        <div className="px-4 pt-3">
          <h2 className="text-xl font-bold">{post.title}</h2>
        </div>

        {/* 작성자 정보 */}
        <div className="px-4 pt-3 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl">{post.author.avatar}</div>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-medium">{post.author.name}</p>
                {post.author.isVerified && <Shield className="w-3 h-3 text-blue-500" />}
                <span className="text-xs text-gray-500">({post.author.country})</span>
              </div>
              <p className="text-sm text-gray-500">{post.time} • {post.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{post.views}</span>
            </div>
          </div>
        </div>

        {/* 본문 */}
        <div className="px-4 pb-4">
          <p className="whitespace-pre-wrap text-gray-800 leading-relaxed">
            {post.content}
          </p>
        </div>

        {/* 태그 */}
        <div className="px-4 pb-4">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* 좋아요/댓글 버튼 */}
        <div className="px-4 pb-4">
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                <Heart className="w-4 h-4" />
                <span className="text-sm">{post.likes}</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">{post.comments}</span>
              </button>
              <span className="text-sm text-gray-400">조회 {post.views}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 댓글 섹션 */}
      <div className="bg-white mt-2 mb-20">
        <div className="px-4 py-3 border-b">
          <h3 className="font-semibold">댓글 {comments.length}</h3>
        </div>

        {/* 댓글 목록 */}
        {comments.map((comment) => (
          <div key={comment.id} className="px-4 py-4 border-b">
            <div className="flex items-start gap-3">
              <div className="text-xl flex-shrink-0">{comment.author.avatar}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-sm">{comment.author.name}</p>
                  <p className="text-xs text-gray-500">{comment.date}</p>
                </div>
                <p className="text-gray-800 text-sm leading-relaxed">
                  {comment.content}
                </p>
                <button className="mt-2 flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-xs">{comment.likes}</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* 댓글 작성 */}
        <div className="px-4 py-3 border-t bg-gray-50">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="댓글을 입력하세요..."
              className="flex-1 px-4 py-2 bg-white border rounded-full text-sm focus:outline-none focus:border-blue-500"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
              등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetail;