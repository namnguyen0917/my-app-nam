type Item = { level: number[]; img: string };

const CONFIG_ICON_DEFAULT: Item[] = [
  { level: [1, 2, 3, 4, 5, 6, 7, 8, 9], img: "Gem9_2" },
];

const GEM_CONFIG: Item[] = [
  { level: [1, 2], img: "Gem1_1" },
  { level: [3, 4, 5], img: "Gem3_1" },
  { level: [6, 7, 8], img: "Gem6_1" },
  { level: [9], img: "Gem9_1" },
];

const GEM_CONFIG_T: Item[] = [
  { level: [1, 2], img: "Gem1_2" },
  { level: [3, 4, 5], img: "Gem3_2" },
  { level: [6, 7, 8], img: "Gem6_2" },
  { level: [9], img: "Gem9_2" },
];

const GEM_CONFIG_GK: Item[] = [
  { level: [1, 2, 3, 4, 5, 6, 7, 8, 9], img: "Gemjiankang" },
];

const GEM_CONFIG_TT: Item[] = [
  { level: [1, 2, 3, 4, 5, 6, 7, 8, 9], img: "Gem9_3" },
];

const GEM_CONFIG_TTT: Item[] = [
  { level: [1, 2, 3, 4, 5, 6, 7, 8, 9], img: "Gem1_2" },
];

const GEM_CONFIG_TTH: Item[] = [
  { level: [1, 2, 3, 4, 5, 6, 7, 8, 9], img: "Gem3_2" },
];

const CONFIG_BK_PET: Item[] = [
  { level: [1], img: "PetSkill1" },
  { level: [2], img: "PetSkill2" },
  { level: [3], img: "PetSkill3" },
  { level: [4], img: "PetSkill4" },
  { level: [5], img: "PetSkill5" },
  { level: [6], img: "PetSkill6" },
  { level: [7], img: "PetSkill7" },
  { level: [8], img: "PetSkill8" },
  { level: [9], img: "PetSkill9" },
  { level: [10], img: "MenpaiLiveSkill2" },

];

export const CONFIG_IMG: Record<string, { data: Item[]}> = {
  huyen_cong: { data: GEM_CONFIG },
  bang_cong: { data: GEM_CONFIG },
  hoa_cong: { data: GEM_CONFIG },
  doc_cong: { data: GEM_CONFIG },

  khang_huyen: { data: GEM_CONFIG },
  khang_bang: { data: GEM_CONFIG },
  khang_hoa: { data: GEM_CONFIG },
  khang_doc: { data: GEM_CONFIG_T },

  ngoai_cong: { data: GEM_CONFIG },
  noi_cong: { data: GEM_CONFIG_T },
  mau_gioi_han: { data: GEM_CONFIG_T },

  cuong_luc: { data: GEM_CONFIG },
  noi_luc: { data: GEM_CONFIG },
  the_luc: { data: GEM_CONFIG_T },
  tri_luc: { data: GEM_CONFIG_T },
  than_phap: { data: GEM_CONFIG },
  
  ne_tranh: { data: GEM_CONFIG },
  hoi_cong: { data: GEM_CONFIG },
  chinh_xac: { data: GEM_CONFIG },
  
  ngoai_thu: { data: GEM_CONFIG },
  noi_thu: { data: GEM_CONFIG },

  trac_huyen: { data: GEM_CONFIG_T },
  trac_bang: { data: GEM_CONFIG_T },
  trac_hoa: { data: GEM_CONFIG_T  },
  trac_doc: { data: GEM_CONFIG_T },

  trac_khang_huyen: { data: GEM_CONFIG_T},
  trac_khang_bang: { data: GEM_CONFIG_T },
  trac_khang_hoa: { data: GEM_CONFIG_T },
  trac_khang_doc: { data: GEM_CONFIG_T },

  giam_khang_huyen: { data: GEM_CONFIG_GK},
  giam_khang_bang: { data: GEM_CONFIG_GK },
  giam_khang_hoa: { data: GEM_CONFIG_GK },
  giam_khang_doc: { data: GEM_CONFIG_GK },

  ho_nhan_tinh: { data: GEM_CONFIG_TT },
  mieu_nhan_tinh: { data: GEM_CONFIG_TT },
  tu_ngoc_tinh: { data: GEM_CONFIG_TT },
  to_mau_luc_tinh: { data: GEM_CONFIG_TT },
  hong_tinh_thach_tinh: { data: GEM_CONFIG_TT },
  lam_tinh_thach_tinh: { data: GEM_CONFIG_TT },
  hoang_tinh_thach_tinh: { data: GEM_CONFIG_TT },
  luc_tinh_thach_tinh: { data: GEM_CONFIG_TT },
  huyet_tinh_thach_tinh: { data: GEM_CONFIG_TTH },
  hong_bao_thach_tinh: { data: GEM_CONFIG_TTT },

  bi_kip_sơ_cap: { data: CONFIG_BK_PET },
  bi_kip_cao_cap: { data: CONFIG_BK_PET },
  bi_kip_aoe_cong: { data: CONFIG_BK_PET },

  default_icon: { data: CONFIG_ICON_DEFAULT },
} as const;
