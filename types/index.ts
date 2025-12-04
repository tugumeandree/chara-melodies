// TypeScript interfaces for the Hymns App

export interface LyricSection {
  type: 'verse' | 'chorus' | 'bridge' | 'intro' | 'outro';
  number?: number;
  lines: string[];
}

export interface Hymn {
  number: number;
  title: string;
  language: Language;
  category: Category;
  lyrics: LyricSection[];
  note?: string;
  tags?: string[];
  audioUrl?: string;
  youtubeUrl?: string;
}

export type Language = 
  | 'English' 
  | 'Luganda' 
  | 'Runyankore' 
  | 'Rukiga'
  | 'Swahili' 
  | 'French'
  | 'Multilingual';

export type Category = 
  | 'Praise' 
  | 'Worship' 
  | 'Prayer' 
  | 'Thanksgiving' 
  | 'Instrumental'
  | 'Invocation'
  | 'Processional'
  | 'Recessional'
  | 'Communion'
  | 'Adoration';

export interface Session {
  id: string;
  name: string;
  hymnNumbers: number[];
  createdAt: Date;
  updatedAt: Date;
}

export interface UserSettings {
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  theme: 'light' | 'dark';
  offlineMode: boolean;
}

export interface FavoriteHymn {
  hymnNumber: number;
  addedAt: Date;
}

export interface SearchFilters {
  languages?: Language[];
  categories?: Category[];
  query?: string;
}
