# 📜 Tàng Kinh Các TLBB

> **Kho kiến thức toàn diện cho game thủ Tiên Kiếm Bố Bố**

Tàng Kinh Các là nền tảng trực tuyến cung cấp hướng dẫn chi tiết, build guides, và kho báu dữ liệu game cho tất cả game thủ TLBB từ cơ bản đến nâng cao.

🌐 **Website:** [Tàng Kinh Các TLBB](https://tangkinh-cac.com)

---

## ✨ Tính Năng Chính

- 📚 **Build Guides** - Hướng dẫn chi tiết build cho 10 môn phái
- 💎 **Game Master** - Kho báu với toàn bộ vật phẩm, kỹ năng, tài nguyên game
- 📖 **Giới Thiệu** - Tìm hiểu chi tiết về TLBB và cách sử dụng platform
- 📞 **Liên Hệ** - Form liên hệ, FAQ, và thông tin hỗ trợ
- 🎨 **Giao Diện Thân Thiện** - Design responsive, dễ sử dụng trên mọi thiết bị
- 🔄 **Dữ Liệu Cập Nhật** - Thông tin được cập nhật khi có patch/balancing mới

---

## 🚀 Bắt Đầu Nhanh

### Yêu Cầu
- Node.js 18+ hoặc Bun
- npm, yarn, pnpm, hoặc bun

### Cài Đặt

```bash
# Clone repository
git clone https://github.com/yourusername/tangkinh-cac.git
cd tangkinh-cac

# Cài đặt dependencies
npm install
# hoặc
yarn install
# hoặc
pnpm install
# hoặc
bun install
```

### Chạy Development Server

```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
# hoặc
bun dev
```

Mở [http://localhost:3000](http://localhost:3000) trong browser để xem kết quả.

### Build Production

```bash
npm run build
npm run start
```

---

## 📁 Cấu Trúc Dự Án

```
src/
├─ app/                              # Next.js App Router
│  ├─ page.tsx                       # Trang chủ - Tổng quan game
│  ├─ build/page.tsx                 # Trang Build Guides
│  ├─ game-master/page.tsx           # Trang Game Master
│  ├─ introduction/page.tsx          # Trang Giới thiệu
│  ├─ contact/page.tsx               # Trang Liên hệ
│  └─ layout.tsx                     # Root layout
├─ components/
│  ├─ shared/                        # Shared components
│  │  ├─ Header.tsx                  # Navigation header
│  │  ├─ Footer.tsx                  # Footer
│  │  ├─ CTASection.tsx              # Call-to-action section
│  │  └─ Sidebar.tsx                 # Sidebar thêm info
│  ├─ dashboard/
│  │  └─ DashBoardPage.tsx           # Trang chủ content
│  ├─ build/
│  │  └─ BuildPage.tsx               # Build guides page
│  ├─ game-master/
│  │  ├─ GameMasterPage.tsx          # Game master main
│  │  ├─ TabItem.tsx                 # Tab buttons with icons
│  │  ├─ ToggleSection.tsx           # Collapsible sections
│  │  └─ ListItem.tsx                # Item list display
│  ├─ introduction/
│  │  └─ IntroductionPage.tsx        # Introduction page
│  └─ contact/
│     └─ ContactPage.tsx             # Contact form & info
├─ hooks/
│  └─ game-master/
│     └─ useGameMaster.ts            # Game Master logic hook
├─ mocks/
│  └─ game-master/
│     ├─ type.ts                     # TypeScript types
│     ├─ data.ts                     # Menu & tab data
│     ├─ gemList.ts                  # Bảo Thạch data
│     ├─ gemListTrac.ts              # Bảo Thạch Điêu Trác
│     ├─ gemListTinhHoa.ts           # Bảo Thạch Tinh Hoa
│     ├─ petListSkill.ts             # Bí Kíp Trân Thú
│     ├─ humanListSkill.ts           # Bí Tịch & Yếu Quyết
│     ├─ fullList6x.ts               # Trang bị 6x (10 môn phái)
│     ├─ fullList7x.ts               # Trang bị 7x
│     ├─ fullList8x.ts               # Trang bị 8x
│     ├─ fullList9x.ts               # Trang bị 9x
│     └─ fullList10x.ts              # Trang bị 10x
├─ styles/
│  └─ globals.css                    # Tailwind CSS + custom styles
└─ utils/
   └─ ...                            # Utility functions
```

---

## 🛠️ Công Nghệ Sử Dụng

- **Framework:** [Next.js 14+](https://nextjs.org/) - React server components
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type safety
- **Runtime:** Node.js 18+ / Bun
- **Package Manager:** npm / yarn / pnpm / bun

---

## 📊 10 Môn Phái Trong Game

Game Master hiển thị trang bị cho 10 môn phái:

1. **⚔️ Cái Bang** - Tù Long
2. **⚔️ Võ Đang** - Âm Dương
3. **⚔️ Tinh Túc** - Đoạt Hồn
4. **⚔️ Thiếu Lâm** - La Hán
5. **⚔️ Tiêu Dao** - Lạc Anh
6. **⚔️ Mộ Dung** - Lôi Tập
7. **⚔️ Thiên Sơn** - Lục Dương
8. **⚔️ Nga My** - Phiêu Tuyết
9. **⚔️ Minh Giáo** - Quy Trần
10. **⚔️ Thiên Long** - Thương Dương

---

## 🎯 Tính Năng Chính Của Từng Trang

### 🏠 Trang Chủ (Dashboard)
- Hero banner với CTA buttons
- Tổng quan game TLBB
- Giới thiệu 10 môn phái
- Thống kê game (120 level, 10 môn, ...)
- Highlights tính năng chính

### 📚 Builds
- Hướng dẫn build chi tiết cho từng môn phái
- Trang bị, kỹ năng, chiến lược
- CTA để truy cập Game Master

### 💎 Game Master
- 10 tabs với icon cho dễ nhận biết:
  - 💎 Bảo Thạch
  - 🔍 Bảo Thạch Điêu Trác
  - ✨ Bảo Thạch Tinh Hoa
  - 🐾 Bí Kíp Trân Thú
  - 📜 Bí Tịch & Yếu Quyết
  - 📦 Full 6x-10x (Trang bị 6x-10x)
- Collapsible sections cho mỗi danh mục
- Nút sao chép để chia sẻ dữ liệu
- CTA section

### 📖 Giới Thiệu
- Về Tàng Kinh Các
- Sứ mệnh & tầm nhìn
- Tính năng chính
- Lý do chọn Tàng Kinh Các
- Hướng dẫn bắt đầu
- Mẹo & thủ thuật
- Phản hồi & đề xuất

### 📞 Liên Hệ
- Form liên hệ
- Thông tin liên lạc (email, Facebook, Discord)
- Giờ làm việc
- FAQ

---

## 💡 Mẹo Phát Triển

### Chỉnh Sửa Pages
- Edit các file trong `src/app/*/page.tsx` để thay đổi nội dung trang

### Thêm Components Mới
- Tạo file trong `src/components/` và import vào các page

### Cập Nhật Dữ Liệu Game
- Chỉnh sửa các file trong `src/mocks/game-master/` để thêm/cập nhật dữ liệu

### Styling
- Sử dụng Tailwind CSS classes
- Custom CSS trong `src/styles/globals.css`

---

## 🤝 Đóng Góp

Chúng tôi hoan nghênh mọi đóng góp từ cộng đồng!

1. Fork repository
2. Tạo branch cho feature của bạn (`git checkout -b feature/amazing-feature`)
3. Commit thay đổi (`git commit -m 'Add amazing feature'`)
4. Push lên branch (`git push origin feature/amazing-feature`)
5. Mở Pull Request

---

## 📧 Liên Hệ & Hỗ Trợ

- **Email:** support@tangkinh-cac.com
- **Facebook:** [@TangKinhCac.TLBB](https://facebook.com/TangKinhCac.TLBB)
- **Discord:** [Tàng Kinh Các Community](https://discord.gg/tangkinh-cac)

---

## 📄 License

Dự án này được cấp phép dưới MIT License - xem file [LICENSE](LICENSE) để biết chi tiết.

---

## 🙏 Cảm Ơn

Cảm ơn tất cả những game thủ TLBB đã yêu thích và hỗ trợ Tàng Kinh Các!

**Tàng Kinh Các - Báu vật trong thiên hạ, đều có ở đây!** 📜✨

---

*Cập nhật lần cuối: 2026*
