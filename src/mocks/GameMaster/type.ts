export type GmTabKey = "gem" | "gemListTrac" | "gemListTinhHoa" | "petListSkill" | "humanListSkill";

export type GmTabType = {
  key: GmTabKey;
  label: string;
  sort: number;
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