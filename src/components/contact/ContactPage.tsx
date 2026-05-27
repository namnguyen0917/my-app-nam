"use client";
import { Section } from "@/components/shared";
import { CTASection } from "@/components/shared/CTASection";

export default function ContactPage() {
  return (
    <div className="flex flex-col glass p-6 rounded-2xl w-full space-y-6">
      <Section
        title="Liên Hệ"
        content="Hãy kết nối với chúng tôi để chia sẻ ý kiến, báo cáo lỗi hoặc đề xuất tính năng mới"
      />

      <section className="space-y-6">
        <div className="glass p-6 rounded-2xl">
          <h3 className="text-xl font-semibold text-amber-300 mb-4">📧 Gửi Tin Nhắn</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-amber-100 mb-2">Tên của bạn</label>
              <input
                type="text"
                placeholder="Nhập tên..."
                className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-amber-400/20 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-amber-400/50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-amber-100 mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-amber-400/20 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-amber-400/50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-amber-100 mb-2">Chủ đề</label>
              <input
                type="text"
                placeholder="Chủ đề của bạn..."
                className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-amber-400/20 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-amber-400/50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-amber-100 mb-2">Nội dung</label>
              <textarea
                placeholder="Nhập tin nhắn của bạn..."
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-amber-400/20 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-amber-400/50 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-xl bg-amber-400 text-gray-900 font-semibold hover:bg-amber-300 transition"
            >
              Gửi Tin Nhắn
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-amber-300 mb-4">📱 Liên Hệ Trực Tiếp</h3>
            <div className="space-y-3 text-gray-100 text-sm">
              <div>
                <p className="text-amber-200 font-semibold">Email</p>
                <p className="text-amber-100/80">support@tangkinh-cac.com</p>
              </div>
              <div>
                <p className="text-amber-200 font-semibold">Facebook</p>
                <p className="text-amber-100/80">@TangKinhCac.TLBB</p>
              </div>
              <div>
                <p className="text-amber-200 font-semibold">Discord</p>
                <p className="text-amber-100/80">discord.gg/tangkinh-cac</p>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-amber-300 mb-4">⏰ Giờ Làm Việc</h3>
            <div className="space-y-2 text-gray-100 text-sm">
              <div className="flex justify-between">
                <span className="text-amber-200">Thứ 2 - Thứ 6</span>
                <span className="text-amber-100/80">9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-200">Thứ 7</span>
                <span className="text-amber-100/80">10:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-200">Chủ Nhật</span>
                <span className="text-amber-100/80">Nghỉ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-6 rounded-2xl">
          <h3 className="text-lg font-semibold text-amber-300 mb-4">💬 Câu Hỏi Thường Gặp</h3>
          <div className="space-y-4 text-sm text-gray-100">
            <div>
              <p className="font-semibold text-amber-100 mb-2">Tôi sẽ nhận phản hồi trong bao lâu?</p>
              <p className="text-gray-300">Chúng tôi sẽ phản hồi trong vòng 24-48 giờ làm việc.</p>
            </div>
            <div>
              <p className="font-semibold text-amber-100 mb-2">Làm cách nào để báo cáo lỗi?</p>
              <p className="text-gray-300">Vui lòng gửi chi tiết lỗi qua form liên hệ hoặc email trực tiếp với chủ đề "Bug Report".</p>
            </div>
            <div>
              <p className="font-semibold text-amber-100 mb-2">Có thể đề xuất tính năng mới không?</p>
              <p className="text-gray-300">Chắc chắn rồi! Chúng tôi luôn hoan nghênh những đề xuất từ cộng đồng.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
