export interface Story {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  mediaUrl: string;
  timestamp: string;
  viewed: boolean;
  expiresAt: string;
}

export const mockStories: Story[] = [
  {
    id: '1',
    userId: '1',
    username: 'alex_chen',
    avatar: 'https://picsum.photos/64/64?random=1',
    mediaUrl: 'https://picsum.photos/400/600?random=101',
    timestamp: '5m ago',
    viewed: false,
    expiresAt: 'in 23h'
  },
  {
    id: '2',
    userId: '2',
    username: 'sarah_miller',
    avatar: 'https://picsum.photos/64/64?random=2',
    mediaUrl: 'https://picsum.photos/400/600?random=102',
    timestamp: '15m ago',
    viewed: true,
    expiresAt: 'in 22h'
  },
  {
    id: '3',
    userId: '3',
    username: 'mike_jones',
    avatar: 'https://picsum.photos/64/64?random=3',
    mediaUrl: 'https://picsum.photos/400/600?random=103',
    timestamp: '1h ago',
    viewed: false,
    expiresAt: 'in 21h'
  },
  {
    id: '4',
    userId: '5',
    username: 'david_lee',
    avatar: 'https://picsum.photos/64/64?random=5',
    mediaUrl: 'https://picsum.photos/400/600?random=104',
    timestamp: '2h ago',
    viewed: true,
    expiresAt: 'in 20h'
  }
];