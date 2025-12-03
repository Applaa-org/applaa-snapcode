export interface Chat {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  isTyping?: boolean;
}

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  content: string;
  mediaUrl?: string;
  timestamp: string;
  viewed: boolean;
  expiresAt?: string;
}

export const mockChats: Chat[] = [
  {
    id: '1',
    userId: '1',
    username: 'alex_chen',
    avatar: 'https://picsum.photos/64/64?random=1',
    lastMessage: '📸 Snap',
    timestamp: 'now',
    unread: 1,
    isTyping: false
  },
  {
    id: '2',
    userId: '2',
    username: 'sarah_miller',
    avatar: 'https://picsum.photos/64/64?random=2',
    lastMessage: 'Hey! Check out my story',
    timestamp: '2m ago',
    unread: 0,
    isTyping: true
  },
  {
    id: '3',
    userId: '3',
    username: 'mike_jones',
    avatar: 'https://picsum.photos/64/64?random=3',
    lastMessage: '🎮 Game night?',
    timestamp: '15m ago',
    unread: 2,
    isTyping: false
  },
  {
    id: '4',
    userId: '4',
    username: 'emma_wilson',
    avatar: 'https://picsum.photos/64/64?random=4',
    lastMessage: 'Thanks for the snap!',
    timestamp: '1h ago',
    unread: 0,
    isTyping: false
  }
];

export const mockMessages: Message[] = [
  {
    id: '1',
    chatId: '1',
    senderId: '1',
    content: '',
    mediaUrl: 'https://picsum.photos/300/400?random=201',
    timestamp: 'now',
    viewed: false,
    expiresAt: 'in 24h'
  },
  {
    id: '2',
    chatId: '2',
    senderId: '2',
    content: 'Hey! Check out my story',
    timestamp: '2m ago',
    viewed: true
  },
  {
    id: '3',
    chatId: '3',
    senderId: '3',
    content: '🎮 Game night?',
    timestamp: '15m ago',
    viewed: false
  }
];