import { BarChart3, HeartPulse, Home as HomeIcon } from "lucide-react";
import type { Page } from "../App";

type BottomNavProps = {
  activeTab: Page;
  onNavigate: (page: Page) => void;
};

const navItems: Array<{ page: Page; label: string; icon: typeof BarChart3 }> = [
  { page: "trend", label: "趋势报告", icon: BarChart3 },
  { page: "home", label: "首页", icon: HomeIcon },
  { page: "soothing", label: "安抚控制", icon: HeartPulse },
];

export function BottomNav({ activeTab, onNavigate }: BottomNavProps) {
  return (
    <nav className="absolute bottom-[24px] left-[15px] right-[15px] z-20 grid h-[78px] grid-cols-3 items-center rounded-[38px] bg-white/88 px-[10px] shadow-nav backdrop-blur-xl">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.page;
        return (
          <button
            key={item.page}
            type="button"
            onClick={() => onNavigate(item.page)}
            className={`mx-auto flex h-[62px] w-[86px] flex-col items-center justify-center gap-[5px] rounded-[24px] transition ${
              isActive ? "bg-citrus-50 text-citrus-500" : "text-[#8b8b8b]"
            }`}
            aria-label={item.label}
          >
            <Icon strokeWidth={1.9} className="h-[24px] w-[24px]" />
            <span className="text-[12px] font-medium leading-none">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
