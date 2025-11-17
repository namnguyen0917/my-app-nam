export type GmTabKey = "gem" | "gemListTrac" | "gemListTinhHoa" | "petListSkill";

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
}

export interface CategoryType {
  id: string;
  name: string;
  title: string;
  color: string;
  items?: CategoryItemType[];
}