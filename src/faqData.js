export const categories = [
  {
    id: 'hr',
    name: '인사·휴가',
    examples: ['연차는 언제부터 쓸 수 있나요?', '병가 신청은 어떻게 하나요?'],
  },
  {
    id: 'it',
    name: 'IT·계정',
    examples: ['사내 메일 비밀번호를 잊어버렸어요.', 'VPN 접속 방법이 궁금해요.'],
  },
  {
    id: 'expense',
    name: '경비·정산',
    examples: ['법인카드 영수증은 어디에 올리나요?', '출장비 정산 기한이 있나요?'],
  },
]

export const faqs = [
  {
    id: 1,
    categoryId: 'hr',
    question: '연차는 언제부터 쓸 수 있나요?',
    answer: '입사 후 1개월마다 1일씩 발생하며, 발생한 다음 날부터 사용할 수 있습니다.',
    source: '인사규정 제12조 (더미)',
  },
  {
    id: 2,
    categoryId: 'it',
    question: '사내 메일 비밀번호를 잊어버렸어요.',
    answer: '로그인 화면의 "비밀번호 재설정"을 누르고 사번으로 본인 인증을 하면 됩니다.',
    source: 'IT 지원 안내서 2장 (더미)',
  },
  {
    id: 3,
    categoryId: 'expense',
    question: '법인카드 영수증은 어디에 올리나요?',
    answer: '그룹웨어 > 경비정산 메뉴에서 사용 내역을 선택하고 영수증 사진을 첨부합니다.',
    source: '경비처리 매뉴얼 p.5 (더미)',
  },
]
