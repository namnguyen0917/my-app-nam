export type GmTabKey = 
  "gem" | "gemListTrac" | "gemListTinhHoa" | "petListSkill" | "humanListSkill" |
  "fullList6x" | "fullList7x" | "fullList8x" | "fullList9x" | "fullList10x"

export type GmTabType = {
  key: GmTabKey;
  label: string;
  sort: number;
  icon?: string;
};

export interface CategoryItemType {
  id: number;
  level?: number;
  label?: string;
  startIndex?: number;
  faction?: string;
  img?: string;
}

export interface CategoryType {
  id: string;
  name: string;
  title?: string;
  color: string;
  items?: CategoryItemType[];
}