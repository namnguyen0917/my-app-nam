"use client";
import Link from "next/link";
import { Section } from "@/components/shared";
import { CTASection } from "@/components/shared/CTASection";

export default function IntroductionPage() {
  return (
    <div className="flex flex-col glass p-6 rounded-2xl w-full space-y-6">
      <Section
        title="Giới Thiệu"
        content="Khám phá thế giới Tàng Kinh Các - Nơi chứa đựng tất cả kiến thức về game TLBB"
      />

      <section className="space-y-6">
        <div className="glass p-6 rounded-2xl">
          <h3 className="text-xl font-semibold text-amber-300 mb-4">📖 Về Tàng Kinh Các</h3>
          <p className="text-gray-100 leading-relaxed mb-4">
            Tàng Kinh Các là công cụ toàn diện được thiết kế dành cho những người chơi TLBB muốn tối ưu hóa nhân vật của mình.
            Với giao diện thân thiện và dữ liệu cập nhật liên tục, chúng tôi giúp bạn hiểu rõ hơn về các class, build, trang bị và quest.
          </p>
          <p className="text-gray-100 leading-relaxed">
            Nền tảng này được xây dựng bởi những game thủ TLBB giàu kinh nghiệm,
            những người hiểu rõ nhu cầu của cộng đồng và luôn sẵn sàng chia sẻ kiến thức quý báu.
          </p>
        </div>

        <div className="glass p-6 rounded-2xl">
          <h3 className="text-xl font-semibold text-amber-300 mb-4">🎯 Sứ Mệnh</h3>
          <p className="text-gray-100 leading-relaxed mb-3">
            Tàng Kinh Các mang sứ mệnh là:
          </p>
          <ul className="text-gray-100 space-y-2">
            <li className="flex gap-2">
              <span className="text-amber-400">•</span>
              <span><strong>Cung cấp thông tin:</strong> Tập hợp và cập nhật tất cả dữ liệu game TLBB chính xác, đầy đủ</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-400">•</span>
              <span><strong>Hỗ trợ cộng đồng:</strong> Giúp game thủ mới tìm hiểu game, game thủ cũ tối ưu hóa build</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-400">•</span>
              <span><strong>Xây dựng cộng đồng:</strong> Tạo không gian cho cộng đồng TLBB kết nối, chia sẻ kinh nghiệm</span>
            </li>
          </ul>
        </div>

        <div className="glass p-6 rounded-2xl">
          <h3 className="text-xl font-semibold text-amber-300 mb-4">🎮 Tính Năng Chính</h3>
          <div className="grid gap-4">
            <div className="flex gap-3">
              <span className="text-amber-400 text-2xl">✓</span>
              <div>
                <p className="font-semibold text-amber-100">Hướng Dẫn Builds Chi Tiết</p>
                <p className="text-sm text-gray-300">Khám phá các build tối ưu cho từng class, với trang bị, kỹ năng, và chiến lược chơi đầy đủ. Mỗi build đều được kiểm chứng bởi game thủ giàu kinh nghiệm.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-400 text-2xl">✓</span>
              <div>
                <p className="font-semibold text-amber-100">Game Master - Kho Báu Kiến Thức</p>
                <p className="text-sm text-gray-300">Truy cập danh sách toàn diện về vật phẩm, kỹ năng, tài nguyên quý giá và công thức craft. Tìm kiếm nhanh chóng, sao chép dữ liệu dễ dàng.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-400 text-2xl">✓</span>
              <div>
                <p className="font-semibold text-amber-100">Dữ Liệu Cập Nhật Thường Xuyên</p>
                <p className="text-sm text-gray-300">Thông tin game được cập nhật liên tục theo các bản vá mới nhất, balancing patch và sự kiện mới, đảm bảo bạn luôn có thông tin tươi mới.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-400 text-2xl">✓</span>
              <div>
                <p className="font-semibold text-amber-100">Giao Diện Thân Thiện</p>
                <p className="text-sm text-gray-300">Thiết kế đơn giản, dễ sử dụng và tương thích mọi thiết bị. Bạn có thể truy cập trên máy tính, tablet hoặc điện thoại di động.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-6 rounded-2xl">
          <h3 className="text-xl font-semibold text-amber-300 mb-4">🌟 Tại Sao Chọn Tàng Kinh Các?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border border-amber-400/20 rounded-lg">
              <p className="font-semibold text-amber-100 mb-2">🎓 Xây Dựng Bởi Game Thủ</p>
              <p className="text-sm text-gray-300">Được phát triển bởi những người chơi TLBB thực tế, người hiểu rõ nhu cầu của cộng đồng.</p>
            </div>
            <div className="p-4 border border-amber-400/20 rounded-lg">
              <p className="font-semibold text-amber-100 mb-2">⚡ Hiệu Suất Cao</p>
              <p className="text-sm text-gray-300">Trang web tải nhanh, tìm kiếm mượt mà, không quảng cáo xâm phạm.</p>
            </div>
            <div className="p-4 border border-amber-400/20 rounded-lg">
              <p className="font-semibold text-amber-100 mb-2">🤝 Cộng Đồng Tích Cực</p>
              <p className="text-sm text-gray-300">Tham gia và chia sẻ kinh nghiệm với hàng nghìn game thủ TLBB khác.</p>
            </div>
            <div className="p-4 border border-amber-400/20 rounded-lg">
              <p className="font-semibold text-amber-100 mb-2">🔄 Miễn Phí & Mở</p>
              <p className="text-sm text-gray-300">Hoàn toàn miễn phí, không có phí ẩn, và mở cửa cho tất cả mọi người.</p>
            </div>
          </div>
        </div>

        <div className="glass p-6 rounded-2xl">
          <h3 className="text-xl font-semibold text-amber-300 mb-4">🚀 Bắt Đầu Ngay</h3>
          <p className="text-gray-100 mb-4">
            Để tận dụng tối đa Tàng Kinh Các, hãy bắt đầu bằng việc:
          </p>
          <ol className="text-gray-100 space-y-2 mb-6 ml-4">
            <li>1. Xem qua các <strong>Builds</strong> để tìm hướng dẫn phù hợp với class của bạn</li>
            <li>2. Truy cập <strong>GameMaster</strong> để tra cứu vật phẩm, kỹ năng và tài nguyên</li>
            <li>3. Tối ưu hóa nhân vật theo hướng dẫn và phát triển chiến lược chơi riêng</li>
          </ol>
          <div className="flex gap-3">
            <Link
              href="/build"
              className="px-4 py-2 rounded-lg bg-amber-400 text-gray-900 font-semibold hover:bg-amber-300 transition"
            >
              Xem Builds →
            </Link>
            <Link
              href="/game-master"
              className="px-4 py-2 rounded-lg border border-amber-400 text-amber-300 font-semibold hover:bg-amber-400/10 transition"
            >
              Mở Game Master →
            </Link>
          </div>
        </div>

        <div className="glass p-6 rounded-2xl">
          <h3 className="text-xl font-semibold text-amber-300 mb-4">💡 Mẹo & Thủ Thuật</h3>
          <ul className="text-gray-100 space-y-3">
            <li className="flex gap-2">
              <span className="text-amber-400">💎</span>
              <span>Sử dụng tính năng sao chép (copy) trong Game Master để nhanh chóng chia sẻ thông tin hoặc ghi chú</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-400">📊</span>
              <span>Theo dõi danh sách vật phẩm quý hiếm để lên kế hoạch nâng cấp và farming</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-400">🎯</span>
              <span>Tham khảo các build khác nhau để tìm phong cách chơi phù hợp với kỹ năng và sở thích của bạn</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-400">🔖</span>
              <span>Bookmark các trang yêu thích để truy cập nhanh lần sau</span>
            </li>
          </ul>
        </div>

        <div className="glass p-6 rounded-2xl bg-amber-400/10 border border-amber-400/30">
          <h3 className="text-xl font-semibold text-amber-300 mb-4">📢 Phản Hồi & Đề Xuất</h3>
          <p className="text-gray-100 mb-4">
            Tàng Kinh Các liên tục phát triển dựa trên phản hồi của cộng đồng.
            Nếu bạn có bất kỳ đề xuất, báo cáo lỗi, hoặc ý kiến cải thiện,
            hãy <Link href="/contact" className="text-amber-300 hover:underline font-semibold">liên hệ với chúng tôi</Link>.
          </p>
          <p className="text-sm text-amber-100">
            Mỗi đóng góp của bạn đều giúp Tàng Kinh Các trở nên tốt hơn cho toàn bộ cộng đồng! 🙏
          </p>
        </div>

        <CTASection />
      </section>
    </div>
  );
}

