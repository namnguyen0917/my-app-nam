'use client';

import { useState, useCallback } from "react";
import { GEM_LIST_BASIC } from "@/mocks/GameMaster/gemList";
import { gmDefaultTab, GmTabKey, CategoryType }  from "@/mocks/GameMaster/";


export default function useGameMasterData() {

  const [activeTab, setActiveTab] = useState(gmDefaultTab);
  const [openTabs, setOpenTabs] = useState<string[]>([]);
  const [coppyId, setCoppyId] = useState<number>(1);
  const [data, setData] = useState<CategoryType[]>(GEM_LIST_BASIC);
  
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
        const { GEM_LIST_BASIC } = await import("@/mocks/GameMaster/gemList");
        setData(GEM_LIST_BASIC);
          break;

      case "gemListTinhHoa":
        const { GEM_LIST_TINH_HOA } = await import("@/mocks/GameMaster/gemListTinhHoa");
        setData(GEM_LIST_TINH_HOA);
          break;
      
      case "petListSkill":
        const { PET_LIST_SKILL } = await import("@/mocks/GameMaster/petListSkill");
        setData(PET_LIST_SKILL);
          break;

      case "humanListSkill":
        const { HUMAN_LIST_SKILL } = await import("@/mocks/GameMaster/humanListSkill");
        setData( HUMAN_LIST_SKILL );
          break;

      case "fullList6x":
        const { FULL_LIST_6x } = await import("@/mocks/GameMaster/fullList6x");
        setData( FULL_LIST_6x );
          break;

      case "fullList7x":
        const { FULL_LIST_7x } = await import("@/mocks/GameMaster/fullList7x");
        setData( FULL_LIST_7x );
          break;

      case "fullList8x":
        const { FULL_LIST_8x } = await import("@/mocks/GameMaster/fullList8x");
        setData( FULL_LIST_8x );
          break;

      case "fullList9x":
        const { FULL_LIST_9x } = await import("@/mocks/GameMaster/fullList9x");
        setData( FULL_LIST_9x );
          break;

      case "fullList10x":
        const { FULL_LIST_10x } = await import("@/mocks/GameMaster/fullList10x");
        setData( FULL_LIST_10x );
          break;

      default:
        const { GEM_LIST_TRAC } = await import("@/mocks/GameMaster/gemListTrac");
        setData(GEM_LIST_TRAC);
    }
}, []);
  
  return { activeTab, setActiveTab, openTabs, toggleTab, data, loadData, handleCopy, coppyId }
}