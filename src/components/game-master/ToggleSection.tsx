import { FC } from "react";
import ListItem from "./ListItem";

const THEMES = [
  { border: "border-amber-400/30", bg: "bg-amber-100/30", btn: "bg-amber-400/5 hover:bg-amber-400/20" },
  { border: "border-sky-400/30", bg: "bg-sky-400/30", btn: "bg-sky-400/10 hover:bg-sky-400/20" },
];

interface ToggleSectionProps {
  tab: {
    id: string;
    name: string;
    items?: any[];
    title?: string;
  };
  index: number;
  isOpen: boolean;
  onToggle: (id: string) => void;
  itemProps: {
    data?: any[];
    title?: string;
    handleCopy: (code: string, id: number) => Promise<void>;
    coppyId: number;
    type: string;
  };
}

export const ToggleSection: FC<ToggleSectionProps> = ({ tab, index, isOpen, onToggle, itemProps }) => {
  const theme = THEMES[index % 2];

  return (
    <div className={`border ${theme.border} ${theme.bg} rounded-xl overflow-hidden mb-4`}>
      <button
        onClick={() => onToggle(tab.id)}
        className={`w-full flex items-center justify-between px-4 py-3 text-white text-lime-500 font-semibold ${theme.btn} transition`}
      >
        <span>{tab.name}</span>
        <span className={`text-xl ${isOpen ? "text-amber-200" : "text-amber-400"}`}>
          {isOpen ? "–" : "+"}
        </span>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[3500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ListItem {...itemProps} />
      </div>
    </div>
  );
};

