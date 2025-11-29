export interface VideoContent {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  date: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}