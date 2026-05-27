import { FC , memo  } from "react";
import { GmTabKey } from "@/mocks/game-master";

interface TabItemProps {
  tab: {
    key: GmTabKey;
    label: string;
    icon?: string;
  };
  isActive: boolean;
  onTabClick: (key: GmTabKey) => void;
}

export const TabItem: FC<TabItemProps> = memo(
  ({ tab, isActive, onTabClick }) => (
    <button
      onClick={() => onTabClick(tab.key)}
      className={`tab-btn px-4 py-2 cursor-pointer transition flex items-center gap-2 ${
        isActive
          ? "border-b-2 border-amber-400 text-amber-300"
          : "hover:text-amber-300"
      }`}
    >
      {tab.icon && <span className="text-lg">{tab.icon}</span>}
      <span>{tab.label}</span>
    </button>
  )
);

TabItem.displayName = "TabItem";