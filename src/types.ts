export interface SidenavTab {
  id: string;
  icon: string;
  title: string;
}

export interface TimelinePost {
  author: User;
  image?: string;
  content: string;
  likes: number;
  shares: number;
  comments: number;
  createdAt: Date;
}

export interface User {
  name: string;
  handle: string;
  profile: string;
}
