import { CONFIG_IMG } from "@/libs/constants"

// Hàm lấy img
export function getConfigImage( type: keyof typeof CONFIG_IMG, level = 1): { nameImg: string | undefined } {
  const group = CONFIG_IMG[type] || CONFIG_IMG['default_icon'];
  const item = group.data.find(i => i.level.includes(level));
  return { nameImg: item?.img };
}