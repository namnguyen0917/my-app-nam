'use client';

export default function Page() {
  
  return(
    <>
      {/* Content */}
      <div className="md:col-span-2 space-y-6 order-2 md:order-none">
        <section id="overview" className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">Tổng Quan Game</h2>
          <div className="mt-3 text-sm text-amber-100/80">
            TLBB là MMORPG đề cao cốt truyện và hệ thống tộc phái phong phú. Người chơi chọn tộc, học kỹ năng, làm nhiệm vụ, và tham gia chiến trường.
          </div>
        </section>

        <section id="classes" className="glass p-6 rounded-2xl">...</section>
        <section id="builds" className="glass p-6 rounded-2xl">...</section>
        <section id="quests" className="glass p-6 rounded-2xl">...</section>
      </div>
    </>
  );
}
