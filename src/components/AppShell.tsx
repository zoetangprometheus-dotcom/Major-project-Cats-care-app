import { useEffect, useRef, type ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import type { Page } from "../App";

type AppShellProps = {
  children: ReactNode;
  activeTab?: Page;
  screenKey: Page;
  showBottomNav?: boolean;
  onNavigate: (page: Page) => void;
};

function StatusBar() {
  return (
    <div className="absolute left-0 right-0 top-0 z-20 flex h-[46px] items-center justify-between px-[28px] pt-[11px] text-[15px] font-semibold text-black">
      <span>9:41</span>
      <div className="flex items-center gap-[7px]">
        <div className="flex h-[14px] items-end gap-[2px]">
          {[6, 8, 11, 14].map((height) => (
            <span key={height} className="w-[3px] rounded-full bg-black" style={{ height }} />
          ))}
        </div>
        <div className="relative h-[14px] w-[18px]">
          <span className="absolute left-0 top-[1px] h-[14px] w-[18px] rounded-t-full border-[3px] border-b-0 border-black" />
          <span className="absolute left-[5px] top-[6px] h-[8px] w-[8px] rounded-t-full border-[3px] border-b-0 border-black" />
          <span className="absolute bottom-0 left-[7px] h-[3px] w-[3px] rounded-full bg-black" />
        </div>
        <div className="h-[12px] w-[24px] rounded-[3px] border-[2px] border-black p-[1px]">
          <div className="h-full w-[17px] rounded-[1px] bg-black" />
        </div>
      </div>
    </div>
  );
}

export function AppShell({ children, activeTab, screenKey, showBottomNav = true, onNavigate }: AppShellProps) {
  const scrollRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [screenKey]);

  return (
    <div className="min-h-screen bg-[#efe8dd] px-0 py-0 sm:flex sm:items-center sm:justify-center sm:p-5">
      <div className="phone-canvas relative overflow-hidden rounded-[28px] border border-white/70 bg-warm-50 shadow-[0_22px_80px_rgba(77,55,35,0.18)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_8%,rgba(255,255,255,0.94),transparent_34%),linear-gradient(180deg,#fffdf9_0%,#fffaf5_55%,#fff8ef_100%)]" />
        <StatusBar />
        <main
          ref={scrollRef}
          className={`app-scroll absolute left-0 right-0 top-[46px] z-10 overflow-y-auto px-[20px] ${
            showBottomNav ? "bottom-[110px] pb-[24px]" : "bottom-[18px] pb-8"
          }`}
        >
          {children}
        </main>
        {showBottomNav && activeTab && <BottomNav activeTab={activeTab} onNavigate={onNavigate} />}
        <div className="absolute bottom-[7px] left-1/2 z-30 h-[4px] w-[142px] -translate-x-1/2 rounded-full bg-black" />
      </div>
    </div>
  );
}
