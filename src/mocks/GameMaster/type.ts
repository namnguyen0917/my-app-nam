export type GmTabKey = "event" | "item" | "gem";

export type GmTabType = {
  key: GmTabKey;
  label: string;
  sort: number;
};

export interface CategoryItemType {
  id: number;
  level: number;
}

export interface CategoryType {
  id: string;
  name: string;
  title: string;
  color: string;
  items?: CategoryItemType[];
}