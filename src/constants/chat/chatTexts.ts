export const CHAT_TEXTS = {
  header: '채팅',
  groupInfo: '참여인원',
  announcement: '공지',
  copy: '복사',
  register: '공지',
  annList: '공지목록',
  inDetail: '상세보기',
  sendImg: '이미지 전송하기',
  sendFile: '파일 전송하기'
}
export const CHAT_TABS = [
  { text: '단체톡', path: '/chatlist' },
  { text: '개인톡', path: '/chatlist' }
]

export const CHATON_TEXTS = {
  chatRoomExit: '채팅방 나가기',
  memberWarn:
    '채팅방을 나가시면 대화내용이 모두 삭제되며 가입된 모임에서도 나가집니다.',
  hostWarn:
    '참여중인 모임원들에게 알린 후 모임을 삭제하셔야 이후 모임활동에 불이익이 없어요! ',
  cancel: '취소',
  exit: '나가기',
  delete: '삭제',
  maintain: '유지하기'
}

export const STATUS_TEXTS = {
  noGroup: '주최자가 삭제한 모임입니다.',
  noTrade: '주최자가 삭제한 거래입니다.',
  noPurchase: '판매자가 삭제한 거래입니다.'
}

export const messages = [
  {
    type: 'text',
    sender: 'sender',
    text: '보내는사람이매우긴메시지를보내는경우입니다띄어쓰기없이몇글자인지확인하실수있게안띄우고씁니다.근데이거길이제한은있어야할것같은데...',
    createdAt: '23.09.25 10:23'
  },
  {
    type: 'image',
    sender: 'sender',
    text: '안녕하세요',
    createdAt: '23.09.25 10:28'
  },

  {
    type: 'text',
    sender: 'sender',
    text: '안녕하세요',
    createdAt: '23.09.25 10:28'
  },
  {
    type: 'text',
    sender: 'sender',
    text: '10:28 같은 시간에 한번 더 안녕하세요. 시간이 보이지 않습니다. 근데 이러면 이렇게 너비를 풀로 차지하는 게 맞나......?',
    createdAt: '23.09.25 10:28'
  },
  {
    type: 'text',
    sender: 'sender',
    text: '안녕하세요',
    createdAt: '23.09.25 10:49'
  },
  {
    type: 'text',
    sender: 'recipient',
    text: '다른사람이매우긴메시지를보내는경우입니다띄어쓰기없이몇글자인지확인하실수있게안띄우고씁니다.',
    createdAt: '23.09.25 11:13'
  },
  {
    type: 'image',
    sender: 'recipient',
    text: '다른 사람이 메세지를 연속적으로 보냈을 때 11:23 같은 시간이 보이지 않습니다.',
    createdAt: '23.09.25 11:23'
  },
  {
    type: 'text',
    sender: 'recipient',
    text: '다른 사람이 메세지를 연속적으로 보냈을 때 11:23 같은 시간이 보이지 않습니다.',
    createdAt: '23.09.25 11:23'
  },
  {
    type: 'text',
    sender: 'recipient',
    text: '다른 사람이 메세지를 연속적으로 보냈을 때 프로필사진이 보이지 않습니다.',
    createdAt: '23.09.25 11:23'
  },
  {
    type: 'text',
    sender: 'sender',
    text: '아 시간 조건 까다롭네',
    createdAt: '23.09.25 11:25'
  },
  {
    type: 'text',
    sender: 'recipient',
    text: '11:47에 다른 사람이 안녕하세요',
    createdAt: '23.09.25 11:47'
  },
  {
    type: 'text',
    sender: 'sender',
    text: '11:47에 내가 같은 시간에 한번 더 안녕하세요를 입력할 때는 다른 사람이 보냈으므로 시간이 나타납니다.',
    createdAt: '23.09.26 11:47'
  }
]
