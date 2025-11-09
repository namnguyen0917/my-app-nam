'use client';

import { useState, useCallback } from "react";
import { gemList } from "@/mocks/GameMaster/gemList";
import { gmDefaultTab, GmTabKey, CategoryType }  from "@/mocks/GameMaster/";


export default function useGameMasterData() {

  const [activeTab, setActiveTab] = useState(gmDefaultTab);
  const [openTabs, setOpenTabs] = useState<string[]>([]);
  const [coppyId, setCoppyId] = useState<number>(1);
  const [data, setData] = useState<CategoryType[]>(gemList);
  
  // Toggle Open/close tab
  const toggleTab = (tab: string) => {
    setOpenTabs((prev) =>
      prev.includes(tab) ? prev.filter((t) => t !== tab) : [...prev, tab]
    );
  };

  const handleCopy = async (code:string, id:number) => {
      await navigator.clipboard.writeText(code);
      setCoppyId((prev) => (prev === id ? 1 : id));
  };

  const loadData = useCallback(async (tab: GmTabKey) => {
    switch (tab) {
      case "gem":
        const { gemList } = await import("@/mocks/GameMaster/gemList");
        setData(gemList);
          break;

      case "item":
        const { itemList } = await import("@/mocks/GameMaster/itemList");
        setData(itemList);
          break;

      default:
        const { eventList } = await import("@/mocks/GameMaster/eventList");

        
        setData(eventList);
    }
}, []);
  
  return { activeTab, setActiveTab, openTabs, toggleTab, data, loadData, handleCopy, coppyId }
}