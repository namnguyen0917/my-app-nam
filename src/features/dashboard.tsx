'use client';

export default function Dashboard() {
  
  return(
    <>
      {/* MAIN CONTENT  */}
  <main className="max-w-6xl mx-auto  px-6 py-10  grid grid-cols-1 md:grid-cols-3 gap-8">
    
   {/* Sidebar */}
    <aside className="space-y-6 md:col-span-1 order-1 md:order-none">
      <div className="glass p-4 rounded-2xl">
        <h4 className="font-semibold">Bảng Tóm Tắt</h4>
        <div className="mt-3 text-sm grid grid-cols-2 gap-2">
          <div className="text-xs text-amber-200/70">Max Level</div>
          <div className="font-semibold">120</div>
          <div className="text-xs text-amber-200/70">Currencies</div>
          <div className="font-semibold">Gold / Silver</div>
        </div>
      </div>

      <div className="glass p-4 rounded-2xl">
        <h5 className="font-semibold">Bản Đồ gợi ý</h5>
        <div className="mt-3 h-36 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder')] bg-cover rounded-md"></div>
        <div className="mt-2 text-xs text-amber-200/60">Vị trí train tốt: Thung Lũng Hoa, Rừng Nguyệt.</div>
      </div>

      <div className="glass p-4 rounded-2xl text-sm">
        <h5 className="font-semibold">Tài Nguyên Hữu Ích</h5>
        <ul className="mt-2 text-xs space-y-2">
          <li><a className="underline">Wiki TLBB</a></li>
          <li><a className="underline">Fanpage cộng đồng</a></li>
          <li><a className="underline">Guide videos</a></li>
        </ul>
      </div>
    </aside>

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
  </main>

    </>
  );
}
