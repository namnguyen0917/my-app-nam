"use client";
import { CategoryType } from "@/mocks/GameMaster"; 
import { Section } from "@features/shared/components";
import useGameMasterData from "../hooks/useGameMasterData";
import { gmListTabs, GmTabType } from "@/mocks/GameMaster";
import ListItem from './ListItem';
import { TEXT_COLOR, BG_COLOR, BG_HOVER_COLOR, BORDER_COLOR } from "@/libs/constants";

export default function Page() {
 
  const { activeTab, setActiveTab, openTabs, toggleTab, data, loadData, handleCopy, coppyId }  = useGameMasterData();

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
                loadData(tab.key);
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
        {data.map((tab:CategoryType) => { 

          const isOpen = !openTabs.includes(tab.id);
          const textColor = TEXT_COLOR[tab.color as keyof typeof TEXT_COLOR] || 'text-white';
          const bgColor = BG_COLOR[tab.color as keyof typeof BG_COLOR] || 'bg-amber-400';
          const bgHoverColor = BG_HOVER_COLOR[tab.color as keyof typeof BG_HOVER_COLOR] || 'hover:bg-amber-400/20';
          const borderColor = BORDER_COLOR[tab.color as keyof typeof BORDER_COLOR] || 'border-amber-400/30 bg-amber-100/30';

          return(
            <div className={`border ${borderColor} rounded-xl overflow-hidden mb-[16px]`}  key={tab.id}>
              <button
                onClick={() => toggleTab(tab.id)} 
                className={`w-full flex items-center justify-between px-4 py-3 text-left ${textColor} text-lime-500 font-semibold ${bgColor} ${bgHoverColor} transition`}
              >
                <span>{tab.name}</span>
                <span className={`text-xl ${isOpen ? "text-amber-200" : "text-amber-400"}`}>
                  { isOpen ? "–" : "+"}
                </span>
              </button>

               <div className={`transition-all duration-500 ease-in-out overflow-hidden ${ isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0" }`}>
                  <ListItem data={tab.items} title={tab.title} handleCopy={handleCopy} coppyId={coppyId} />
               </div>

             </div>
          )
        })}

        <div className="mt-6 text-right">
          <button className="bg-amber-400 text-gray-900 font-semibold px-4 py-2 rounded-xl hover:bg-amber-300 transition">
            Truy cập kho báu
          </button>
        </div>
      </section>
    </div>
  );
}