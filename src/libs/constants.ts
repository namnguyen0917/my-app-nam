type ColorType = 'YELLOW' | 'BLUE' | 'RED' | 'GREEN';

export const TEXT_COLOR:Record<ColorType, string> = {
  YELLOW: 'text-yellow-100',
  BLUE: 'text-sky-300',
  RED: 'text-red-400',
  GREEN: 'text-lime-500',
};

export const BG_COLOR:Record<ColorType, string> = {
  YELLOW: 'bg-amber-400/10',
  BLUE: 'bg-sky-400/10',
  RED: 'bg-rose-400/10',
  GREEN: 'bg-emerald-200/10',
};

export const BG_HOVER_COLOR:Record<ColorType, string> = {
  YELLOW: 'hover:bg-amber-400/20',
  BLUE: 'hover:bg-sky-400/20',
  RED: 'hover:bg-rose-400/20',
  GREEN: 'hover:bg-emerald-200/20',
};

export const BORDER_COLOR:Record<ColorType, string> = {
  YELLOW: 'border-amber-400/30 bg-amber-100/30',
  BLUE: 'border-sky-400/30 bg-sky-400/30',
  RED: 'border-rose-400/30 bg-rose-400/30',
  GREEN: 'border-emerald-200/30 bg-emerald-200/30',
};

type TitleType = 'HOANG_TINH_THACH' | 'LAM_TINH_THACH' | 'HONG_TINH_THACH' | 'LUC_TINH_THACH';

export const GEM_TITLE:Record<TitleType, string> = {
  HOANG_TINH_THACH: 'Hoàng Tinh Thạch',
  LAM_TINH_THACH: 'lam Tinh Thạch',
  HONG_TINH_THACH: 'Hồng Tinh Thạch',
  LUC_TINH_THACH: 'Lục Tinh Thạch',
};
