"use client";
import { useCallback } from "react";
import { Section } from "@/components/shared";
import { CTASection } from "@/components/shared/CTASection";
import useGameMaster from "../../hooks/game-master/useGameMaster";
import { gmListTabs, GmTabKey } from "@/mocks/game-master";
import { TabItem } from "./TabItem";
import { ToggleSection } from "./ToggleSection";

export default function GameMasterPage() {
  const { activeTab, setActiveTab, openTabs, toggleTab, data, loadData, handleCopy, coppyId } = useGameMaster();

  const handleTabClick = useCallback((key: GmTabKey) => {
    setActiveTab(key);
    loadData(key);
  }, [setActiveTab, loadData]);

  return (
    <div className="flex flex-col glass p-6 rounded-2xl w-full space-y-6">
      <Section title="Game Master - TKC" content="Báu vật trong thiên hạ, đều có ở đây." />

      <section className="flex-1">
        <div className="flex flex-wrap gap-2 border-b border-amber-400/40 mb-4 text-sm font-semibold text-gray-200">
          {gmListTabs.map((tab) => (
            <TabItem key={tab.key} tab={tab} isActive={activeTab === tab.key} onTabClick={handleTabClick} />
          ))}
        </div>

        {data.map((tab, idx) => (
          <ToggleSection
            key={tab.id}
            tab={tab}
            index={idx}
            isOpen={openTabs.includes(tab.id)}
            onToggle={toggleTab}
            itemProps={{ data: tab.items, title: tab.title, handleCopy, coppyId, type: tab.id }}
          />
        ))}

        <div className="mt-6 text-right">
          <button className="bg-amber-400 text-gray-900 font-semibold px-4 py-2 rounded-xl hover:bg-amber-300 transition">
            Truy cập kho báu
          </button>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
