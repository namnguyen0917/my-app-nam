This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Demo_Structure
├─ src/
│  ├─ app/                         # App Router (route-level)
│  │  ├─ layout.tsx               # Root layout – import globals.css, Redux Provider
│  │  ├─ page.tsx                 # Trang Landing/Index
│  │  ├─ (marketing)/             # Group routes công khai
│  │  │  └─ about/
│  │  │     └─ page.tsx
│  │  └─ (dashboard)/             # Group routes cần auth (middleware protect)
│  │     ├─ layout.tsx            # Layout riêng cho dashboard
│  │     └─ page.tsx
│  ├─ features/                   # TÁCH THEO CHỨC NĂNG (Redux + UI + service)
│  │  ├─ auth/
│  │  │  ├─ components/
│  │  │  │  ├─ LoginForm.tsx
│  │  │  │  └─ RegisterForm.tsx
│  │  │  ├─ slices/               # Redux slice
│  │  │  │  └─ authSlice.ts
│  │  │  ├─ hooks/
│  │  │  │  └─ useAuth.ts
│  │  │  └─ services/             # API calls (fetch/axios/tRPC client)
│  │  │     └─ authApi.ts
│  │  ├─ products/
│  │  │  ├─ components/
│  │  │  │  └─ ProductCard.tsx
│  │  │  ├─ slices/
│  │  │  │  └─ productSlice.ts
│  │  │  └─ services/
│  │  │     └─ productApi.ts
│  │  └─ cart/
│  │     └─ …
│  ├─ shared/
│  │  ├─ components/
│  │  │  ├─ ui/                   # Button, Input… (shadcn hoặc tùy)
│  │  │  └─ layout/               # Header, Footer, Sidebar
│  │  ├─ hooks/                   # useDebounce, useWindowSize…
│  │  ├─ lib/                     # axiosClient.ts, formatters.ts
│  │  └─ types/
│  │     └─ index.ts
│  ├─ store/                      # Redux Toolkit store
│  │  ├─ index.ts                 # configureStore + rootReducer
│  │  └─ middleware.ts            # logger, authGuard…
│  ├─ styles/
│  │  ├─ globals.css              # Tailwind base + custom
│  │  └─ tailwind.config.cjs
│  ├─ middleware.ts               # Next.js edge middleware (auth, i18n…)
│  └─ utils/                      # small pure helpers không phụ thuộc React
├─ public/                        # ảnh, font, favicon
├─ .env.local
├─ tsconfig.json                  # alias path: @features/*, @shared/*
└─ next.config.mjs
