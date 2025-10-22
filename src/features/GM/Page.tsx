"use client";

import { Section } from "@features/shared/components";
import useItem from "./hooks/useGm";
import { gmListTabs, GmTabType } from "@/mocks";  
import { useState } from "react";

export default function Page() {
 
  const { activeTab, setActiveTab }  = useItem();
    // State chứa danh sách tab đang mở
  const [openTabs, setOpenTabs] = useState<string[]>([]);
  const tabs = ["Sự kiện", "Danh sách", "Vật phẩm"];
  // Toggle mở/đóng tab cụ thể
  const toggleTab = (tab: string) => {
    setOpenTabs((prev) =>
      prev.includes(tab)
        ? prev.filter((t) => t !== tab) // Đóng tab nếu đang mở
        : [...prev, tab] // Mở tab mới
    );
  };

  return (
    <div className="flex flex-col glass p-6 rounded-2xl w-full space-y-6">
      <Section title="Game Master - TKC" content="Báu vật trong thiên hạ, đều có ở đây." />

      <section className="flex-1">
        {/* Tabs */}
        <div className="flex flex-wrap gap-x-2 gap-y-2 border-b border-amber-400/40 mb-4 text-sm font-semibold text-gray-200">
          {gmListTabs.map((tab:GmTabType) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
              }}
              className={`tab-btn px-4 py-2 cursor-pointer transition ${
                activeTab === tab.key
                  ? "border-b-2 border-amber-400 text-amber-300"
                  : "hover:text-amber-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Toggle */}
        {tabs.map((tab:any) => { 
          const isOpen = !openTabs.includes(tab);
          return(
            <div className="border border-amber-400/30 rounded-xl overflow-hidden mb-[16px]"  key={tab}>
              <button
                onClick={() => toggleTab(tab)} 
                className="w-full flex items-center justify-between px-4 py-3 text-left text-amber-300 font-semibold bg-amber-400/10 hover:bg-amber-400/20 transition"
              >
                <span>{tab}</span>
                <span className={`text-xl ${isOpen ? "text-amber-200" : "text-amber-400"}`}>
                  { isOpen ? "–" : "+"}
                </span>
              </button>

              {/* Nội dung từng tab */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${ isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0" }`}>
                <div className="p-4 text-gray-100 text-sm leading-relaxed space-y-3 bg-gray-900/30">
                  <ul className="list-disc list-inside space-y-1">
                    <li>🔥 Đại hội võ lâm tháng này – Giành bảo kiếm bá chủ</li>
                    <li>🎯 Thử thách nhiệm vụ GM – Nhận phần thưởng đặc biệt</li>
                    <li>🕊️ Săn boss thế giới – Cơ hội nhận vật phẩm quý hiếm</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        })}

        {/* Nút hành động */}
        <div className="mt-6 text-right">
          <button className="bg-amber-400 text-gray-900 font-semibold px-4 py-2 rounded-xl hover:bg-amber-300 transition">
            Truy cập kho báu
          </button>
        </div>
      </section>
    </div>
  );
}


// "use client";
// import { useState } from "react";
// import { Section } from "@features/shared/components";

// export default function Page() {
//   const [activeTab, setActiveTab] = useState("Danh sách");
//   const [isOpen, setIsOpen] = useState(false);

//   const tabs = ["Sự kiện", "Danh sách", "Vật phẩm"];

//   // Nội dung từng tab
//   const tabContents: Record<string, JSX.Element> = {
//     "Sự kiện": (
//       <ul className="list-disc list-inside space-y-1">
//         <li>🔥 Đại hội võ lâm tháng này – Giành bảo kiếm bá chủ</li>
//         <li>🎯 Thử thách nhiệm vụ GM – Nhận phần thưởng đặc biệt</li>
//         <li>🕊️ Săn boss thế giới – Cơ hội nhận vật phẩm quý hiếm</li>
//       </ul>
//     ),
//     "Danh sách": (
//       <ul className="list-disc list-inside space-y-1">
//         <li>📜 Nhiệm vụ đặc biệt: Truy tìm bí kíp thất truyền</li>
//         <li>⚔️ Sự kiện hàng tuần: Tranh đoạt Lăng Mộ Võ Lâm</li>
//         <li>💎 Kho báu GM: Mở khóa vật phẩm hiếm và trang bị đặc biệt</li>
//       </ul>
//     ),
//     "Vật phẩm": (
//       <ul className="list-disc list-inside space-y-1">
//         <li>🏹 Cung Xạ Thần</li>
//         <li>🗡️ Kiếm Tàng Long</li>
//         <li>🥋 Áo Giáp Huyền Kim</li>
//       </ul>
//     ),
//   };

//   return (
//     <div className="flex flex-col glass p-6 rounded-2xl w-full space-y-6">
//       <Section title="Game Master - TKC" content="Báu vật trong thiên hạ, đều có ở đây." />

//       <section className="flex-1">
//         {/* Tabs */}
//         <div className="flex flex-wrap gap-x-2 gap-y-2 border-b border-amber-400/40 mb-4 text-sm font-semibold text-gray-200">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => {
//                 setActiveTab(tab);
//                 setIsOpen(false); // đóng toggle khi đổi tab
//               }}
//               className={`tab-btn px-4 py-2 cursor-pointer transition ${
//                 activeTab === tab
//                   ? "border-b-2 border-amber-400 text-amber-300"
//                   : "hover:text-amber-300"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Toggle */}
//         <div className="border border-amber-400/30 rounded-xl overflow-hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="w-full flex items-center justify-between px-4 py-3 text-left text-amber-300 font-semibold bg-amber-400/10 hover:bg-amber-400/20 transition"
//           >
//             <span>{activeTab}</span>
//             <span
//               className={`text-xl transition-transform duration-300 ${
//                 isOpen ? "rotate-90 text-amber-200" : "text-amber-400"
//               }`}
//             >
//               {isOpen ? "–" : "+"}
//             </span>
//           </button>

//           {/* Nội dung từng tab */}
//           <div
//             className={`transition-all duration-500 ease-in-out overflow-hidden ${
//               isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//             }`}
//           >
//             <div className="p-4 text-gray-100 text-sm leading-relaxed space-y-3 bg-gray-900/30">
//               {tabContents[activeTab]}
//             </div>
//           </div>
//         </div>

//         {/* Nút hành động */}
//         <div className="mt-6 text-right">
//           <button className="bg-amber-400 text-gray-900 font-semibold px-4 py-2 rounded-xl hover:bg-amber-300 transition">
//             Truy cập kho báu
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }
