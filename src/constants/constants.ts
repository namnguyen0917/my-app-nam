type ColorType =
  | 'YELLOW'
  | 'BLUE'
  | 'RED'
  | 'GREEN'
  | 'PURPLE'
  | 'ORANGE'
  | 'PINK'
  | 'GRAY'
  | 'BROWN'
  | 'CYAN'
  | 'TEAL'
  | 'INDIGO'
  | 'ROSE'
  | 'AMBER';

export const TEXT_COLOR: Record<ColorType, string> = {
  // YELLOW: 'text-yellow-100',
  // BLUE: 'text-sky-300',
  // RED: 'text-red-400',
  // GREEN: 'text-lime-500',
  // PURPLE: 'text-purple-300',
  // ORANGE: 'text-orange-300',
  // PINK: 'text-pink-300',
  // GRAY: 'text-gray-300',

  // BROWN: 'text-amber-800',
  // CYAN: 'text-cyan-300',
  // TEAL: 'text-teal-300',
  // INDIGO: 'text-indigo-300',
  // ROSE: 'text-rose-300',
  // AMBER: 'text-amber-300',

  YELLOW: 'text-white',
  BLUE: 'text-white',
  RED: 'text-white',
  GREEN: 'text-white',
  PURPLE: 'text-white',
  ORANGE: 'text-white',
  PINK: 'text-white',
  GRAY: 'text-white',

  BROWN: 'text-white',
  CYAN: 'text-white',
  TEAL: 'text-white',
  INDIGO: 'text-white',
  ROSE: 'text-white',
  AMBER: 'text-white',
};

export const BG_COLOR: Record<ColorType, string> = {
  YELLOW: 'bg-amber-400/10',
  BLUE: 'bg-sky-400/10',
  RED: 'bg-rose-400/10',
  GREEN: 'bg-emerald-200/10',
  PURPLE: 'bg-purple-400/10',
  ORANGE: 'bg-orange-400/10',
  PINK: 'bg-pink-400/10',
  GRAY: 'bg-gray-400/10',

  BROWN: 'bg-amber-800/10',
  CYAN: 'bg-cyan-400/10',
  TEAL: 'bg-teal-400/10',
  INDIGO: 'bg-indigo-400/10',
  ROSE: 'bg-rose-400/10',
  AMBER: 'bg-amber-400/10',
};

export const BG_HOVER_COLOR: Record<ColorType, string> = {
  YELLOW: 'hover:bg-amber-400/20',
  BLUE: 'hover:bg-sky-400/20',
  RED: 'hover:bg-rose-400/20',
  GREEN: 'hover:bg-emerald-200/20',
  PURPLE: 'hover:bg-purple-400/20',
  ORANGE: 'hover:bg-orange-400/20',
  PINK: 'hover:bg-pink-400/20',
  GRAY: 'hover:bg-gray-400/20',

  BROWN: 'hover:bg-amber-800/20',
  CYAN: 'hover:bg-cyan-400/20',
  TEAL: 'hover:bg-teal-400/20',
  INDIGO: 'hover:bg-indigo-400/20',
  ROSE: 'hover:bg-rose-400/20',
  AMBER: 'hover:bg-amber-400/20',
};

export const BORDER_COLOR: Record<ColorType, string> = {
  YELLOW: 'border-amber-400/30 bg-amber-100/30',
  BLUE: 'border-sky-400/30 bg-sky-400/30',
  RED: 'border-rose-400/30 bg-rose-400/30',
  GREEN: 'border-emerald-200/30 bg-emerald-200/30',
  PURPLE: 'border-purple-400/30 bg-purple-100/30',
  ORANGE: 'border-orange-400/30 bg-orange-100/30',
  PINK: 'border-pink-400/30 bg-pink-100/30',
  GRAY: 'border-gray-400/30 bg-gray-100/30',

  BROWN: 'border-amber-800/30 bg-amber-800/20',
  CYAN: 'border-cyan-400/30 bg-cyan-100/30',
  TEAL: 'border-teal-400/30 bg-teal-100/30',
  INDIGO: 'border-indigo-400/30 bg-indigo-100/30',
  ROSE: 'border-rose-400/30 bg-rose-100/30',
  AMBER: 'border-amber-400/30 bg-amber-100/30',
};
