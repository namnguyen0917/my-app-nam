import Link from "next/link";

export const CTASection = () => {
  return (
    <section className="glass p-8 rounded-2xl bg-gradient-to-r from-amber-500/15 to-rose-500/15 border border-amber-400/20">
      <h2 className="text-2xl font-bold text-amber-300 mb-4">🚀 Sẵn Sàng Bắt Đầu?</h2>
      <p className="text-gray-100 mb-6">
        Chọn một trong những lựa chọn dưới đây để khám phá thế giới TLBB cùng chúng tôi:
      </p>
      <div className="grid md:grid-cols-3 gap-3">
        <Link
          href="/build"
          className="p-4 text-center rounded-lg bg-amber-400/10 border border-amber-400/30 hover:bg-amber-400/20 transition"
        >
          <p className="font-semibold text-amber-200">📚 Xem Builds</p>
          <p className="text-xs text-gray-300 mt-1">Hướng dẫn chi tiết cho từng môn</p>
        </Link>
        <Link
          href="/game-master"
          className="p-4 text-center rounded-lg bg-amber-400/10 border border-amber-400/30 hover:bg-amber-400/20 transition"
        >
          <p className="font-semibold text-amber-200">💎 Game Master</p>
          <p className="text-xs text-gray-300 mt-1">Kho báu toàn diện</p>
        </Link>
        <Link
          href="/introduction"
          className="p-4 text-center rounded-lg bg-amber-400/10 border border-amber-400/30 hover:bg-amber-400/20 transition"
        >
          <p className="font-semibold text-amber-200">📖 Giới Thiệu</p>
          <p className="text-xs text-gray-300 mt-1">Tìm hiểu thêm về Tàng Kinh Các</p>
        </Link>
      </div>
    </section>
  );
};
