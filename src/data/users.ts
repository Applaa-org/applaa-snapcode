export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  status: 'online' | 'offline' | 'away';
  snapScore: number;
  streak?: number;
  lastSeen?: string;
}

export const mockUsers: User[] = [
  {
    id: '1',
    username: 'alex_chen',
    displayName: 'Alex Chen',
    avatar: 'https://picsum.photos/64/64?random=1',
    status: 'online',
    snapScore: 15420,
    streak: 12
  },
  {
    id: '2',
    username: 'sarah_miller',
    displayName: 'Sarah Miller',
    avatar: 'https://picsum.photos/64/64?random=2',
    status: 'online',
    snapScore: 8930,
    streak: 5
  },
  {
    id: '3',
    username: 'mike_jones',
    displayName: 'Mike Jones',
    avatar: 'https://picsum.photos/64/64?random=3',
    status: 'away',
    snapScore: 23100,
    lastSeen: '2m ago'
  },
  {
    id: '4',
    username: 'emma_wilson',
    displayName: 'Emma Wilson',
    avatar: 'https://picsum.photos/64/64?random=4',
    status: 'offline',
    snapScore: 5670,
    lastSeen: '1h ago'
  },
  {
    id: '5',
    username: 'david_lee',
    displayName: 'David Lee',
    avatar: 'https://picsum.photos/64/64?random=5',
    status: 'online',
    snapScore: 31200,
    streak: 28
  },
  {
    id: '6',
    username: 'lisa_garcia',
    displayName: 'Lisa Garcia',
    avatar: 'https://picsum.photos/64/64?random=6',
    status: 'online',
    snapScore: 12890,
    streak: 8
  }
];