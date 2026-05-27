'use client';
import Link from "next/link";
import { FULL_LIST_6x } from "@/mocks/game-master/fullList6x";
import { CTASection } from "@/components/shared/CTASection";

export default function DashBoardPage() {
  const sects = FULL_LIST_6x.slice(0, 10);

  return (
    <>
      {/* Content */}
      <div className="md:col-span-2 space-y-6 order-2 md:order-none">
        {/* Hero Banner */}
        <section className="glass p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-400/30">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent mb-4">
              Tàng Kinh Các TLBB
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed mb-6">
              Kho kiến thức toàn diện cho game thủ Tiên Kiếm Bố Bố. Khám phá guides, builds tối ưu,
              và trở thành tướng tài của bạn!
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/build"
                className="px-6 py-3 rounded-lg bg-amber-400 text-gray-900 font-semibold hover:bg-amber-300 transition"
              >
                Xem Builds →
              </Link>
              <Link
                href="/game-master"
                className="px-6 py-3 rounded-lg border border-amber-400 text-amber-300 font-semibold hover:bg-amber-400/10 transition"
              >
                Game Master →
              </Link>
            </div>
          </div>
        </section>

        {/* Game Overview */}
        <section id="overview" className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-bold text-amber-300 mb-4">📖 Tổng Quan Game</h2>
          <div className="space-y-4">
            <p className="text-gray-100 leading-relaxed">
              <strong className="text-amber-200">Tiên Kiếm Bố Bố (TLBB)</strong> là MMORPG huyền thoại đề cao cốt truyện sâu sắc
              và hệ thống môn phái phong phú. Bạn sẽ bước vào một thế giới võ hiệp rộng lớn, gặp gỡ các nhân vật nổi tiếng
              và tham gia những trận chiến hoành tráng với 10 môn phái độc đáo.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 bg-amber-400/5 border border-amber-400/20 rounded-lg">
                <p className="text-amber-200 font-semibold">Max Level</p>
                <p className="text-2xl font-bold text-white mt-2">120</p>
              </div>
              <div className="p-4 bg-sky-400/5 border border-sky-400/20 rounded-lg">
                <p className="text-sky-200 font-semibold">Môn Phái</p>
                <p className="text-2xl font-bold text-white mt-2">10 Môn</p>
              </div>
              <div className="p-4 bg-rose-400/5 border border-rose-400/20 rounded-lg">
                <p className="text-rose-200 font-semibold">PvE/PvP</p>
                <p className="text-2xl font-bold text-white mt-2">Cân Bằng</p>
              </div>
            </div>
          </div>
        </section>

        {/* 10 Sects Section */}
        <section id="classes" className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-bold text-amber-300 mb-4">⚔️ 10 Môn Phái Chính</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {sects.map((sect, idx) => (
              <div
                key={sect.id}
                className="p-4 border border-amber-400/20 rounded-lg hover:bg-amber-400/5 transition group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-amber-100 group-hover:text-amber-200">
                      {`${idx + 1}. ${sect.name}`}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{sect.title}</p>
                  </div>
                  <span className="text-2xl">⚔️</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-300 mt-4">
            💡 Tìm hiểu chi tiết về từng môn phái trong phần <Link href="/game-master" className="text-amber-300 hover:underline">Game Master</Link>
          </p>
        </section>

        {/* Features Highlight */}
        <section className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-bold text-amber-300 mb-4">✨ Tính Năng Nổi Bật</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="font-semibold text-amber-100">Build Guides Chuyên Sâu</p>
                <p className="text-sm text-gray-300">Hướng dẫn chi tiết cách build cho từng môn phái, từ cơ bản đến nâng cao.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">💎</span>
              <div>
                <p className="font-semibold text-amber-100">Game Master - Kho Báu</p>
                <p className="text-sm text-gray-300">Tra cứu toàn bộ vật phẩm, kỹ năng, tài nguyên chỉ trong vài click.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <p className="font-semibold text-amber-100">Dữ Liệu Cập Nhật Realtime</p>
                <p className="text-sm text-gray-300">Tất cả thông tin được cập nhật khi có patch mới hoặc balancing.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">👥</span>
              <div>
                <p className="font-semibold text-amber-100">Cộng Đồng Hoạt Động</p>
                <p className="text-sm text-gray-300">Kết nối với hàng ngàn game thủ, chia sẻ kinh nghiệm và mẹo chơi.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="glass p-6 rounded-2xl bg-gradient-to-br from-amber-400/5 to-yellow-400/5">
          <h2 className="text-2xl font-bold text-amber-300 mb-6">🎮 Thống Kê Game</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-amber-300">120</p>
              <p className="text-sm text-gray-300 mt-2">Level Tối Đa</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-amber-300">10</p>
              <p className="text-sm text-gray-300 mt-2">Môn Phái</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-amber-300">∞</p>
              <p className="text-sm text-gray-300 mt-2">Vật Phẩm & Kỹ Năng</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-amber-300">24/7</p>
              <p className="text-sm text-gray-300 mt-2">Hỗ Trợ</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  );
}
