export interface GemItem {
  id: number;
  level: number;
}

export interface GemCategory {
  id: string;
  name: string;
  title: string;
  color: string;
  items: GemItem[];
}

export const gemCategories = [
  {
    tab: { key: "gem", label: "Bảo Thạch" },
    data: [
      {
        id: "huyen_cong",
        name: "Huyền Công",
        title: "Hoàng Tinh Thạch",
        color: "#FFD700",
        items: [
          { id: 50102001, level: 1 },
          { id: 50202001, level: 2 },
          { id: 50302001, level: 3 },
          { id: 50402001, level: 4 },
          { id: 50502001, level: 5 },
          { id: 50602001, level: 6 },
          { id: 50702001, level: 7 },
          { id: 50802001, level: 8 },
          { id: 50902001, level: 9 },
        ],
      },
      {
        id: "bang_cong",
        name: "Băng Công",
        title: "Lam Tinh Thạch",
        color: "#00BFFF",
        items: [
          { id: 50102002, level: 1 },
          { id: 50202002, level: 2 },
          { id: 50302002, level: 3 },
          { id: 50402002, level: 4 },
          { id: 50502002, level: 5 },
          { id: 50602002, level: 6 },
          { id: 50702002, level: 7 },
          { id: 50802002, level: 8 },
          { id: 50902002, level: 9 },
        ],
      },
      {
        id: "hoa_cong",
        name: "Hoả Công",
        title: "Hồng Tinh Thạch",
        color: "#FF4500",
        items: [
          { id: 50102003, level: 1 },
          { id: 50202003, level: 2 },
          { id: 50302003, level: 3 },
          { id: 50402003, level: 4 },
          { id: 50502003, level: 5 },
          { id: 50602003, level: 6 },
          { id: 50702003, level: 7 },
          { id: 50802003, level: 8 },
          { id: 50902003, level: 9 },
        ],
      },
      {
        id: "doc_cong",
        name: "Độc Công",
        title: "Lục Tinh Thạch",
        color: "#32CD32",
        items: [
          { id: 50102004, level: 1 },
          { id: 50202004, level: 2 },
          { id: 50302004, level: 3 },
          { id: 50402004, level: 4 },
          { id: 50502004, level: 5 },
          { id: 50602004, level: 6 },
          { id: 50702004, level: 7 },
          { id: 50802004, level: 8 },
          { id: 50902004, level: 9 },
        ],
      },
    ],
  },
  {
    tab: { key: "item", label: "vật phâm" },
    data: [
      {
        id: "huyen_cong",
        name: "Huyền Công",
        title: "Hoàng Tinh Thạch",
        color: "#FFD700",
        items: [
          { id: 50102001, level: 1 },
          { id: 50202001, level: 2 },
          { id: 50302001, level: 3 },
          { id: 50402001, level: 4 },
          { id: 50502001, level: 5 },
          { id: 50602001, level: 6 },
          { id: 50702001, level: 7 },
          { id: 50802001, level: 8 },
          { id: 50902001, level: 9 },
        ],
      },
      {
        id: "bang_cong",
        name: "Băng Công",
        title: "Lam Tinh Thạch",
        color: "#00BFFF",
        items: [
          { id: 50102002, level: 1 },
          { id: 50202002, level: 2 },
          { id: 50302002, level: 3 },
          { id: 50402002, level: 4 },
          { id: 50502002, level: 5 },
          { id: 50602002, level: 6 },
          { id: 50702002, level: 7 },
          { id: 50802002, level: 8 },
          { id: 50902002, level: 9 },
        ],
      },
      {
        id: "hoa_cong",
        name: "Hoả Công",
        title: "Hồng Tinh Thạch",
        color: "#FF4500",
        items: [
          { id: 50102003, level: 1 },
          { id: 50202003, level: 2 },
          { id: 50302003, level: 3 },
          { id: 50402003, level: 4 },
          { id: 50502003, level: 5 },
          { id: 50602003, level: 6 },
          { id: 50702003, level: 7 },
          { id: 50802003, level: 8 },
          { id: 50902003, level: 9 },
        ],
      },
      {
        id: "doc_cong",
        name: "Độc Công",
        title: "Lục Tinh Thạch",
        color: "#32CD32",
        items: [
          { id: 50102004, level: 1 },
          { id: 50202004, level: 2 },
          { id: 50302004, level: 3 },
          { id: 50402004, level: 4 },
          { id: 50502004, level: 5 },
          { id: 50602004, level: 6 },
          { id: 50702004, level: 7 },
          { id: 50802004, level: 8 },
          { id: 50902004, level: 9 },
        ],
      },
    ],
  }
];
