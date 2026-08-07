export interface EmergencyContact {
  lawyerName: string;
  oabNumber: string;
  phone: string;
  whatsappNumber: string;
  whatsappMessage: string;
}

export interface VideoPlayerState {
  isPlaying: boolean;
  isMuted: boolean;
  activeSubtitleIndex: number;
}

export interface HeroContent {
  headlineWhitePart1: string;
  headlineGoldPart: string;
  headlineWhitePart2: string;
  subheadline: string;
  buttonText: string;
  description: string;
}

export interface DobraSection {
  id: number;
  title: string;
  subtitle: string;
  status: 'completed' | 'in_progress' | 'planned';
}
