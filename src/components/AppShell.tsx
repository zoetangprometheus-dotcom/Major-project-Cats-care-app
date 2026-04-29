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
    <div className="absolute left-0 right-0 top-0 z-20 flex h-[46px] items-center justify-between px-[27px] pt-[10px] text-black">
      <div className="flex h-[24px] min-w-[56px] items-center justify-center rounded-full text-[15px] font-semibold tracking-[-0.02em]">
        9:41
      </div>
      <div className="flex h-[24px] items-center gap-[7px]">
        <div className="flex h-[13px] items-end gap-[2px]" aria-hidden="true">
          {[4, 7, 10, 13].map((height) => (
            <span key={height} className="w-[3px] rounded-[2px] bg-black" style={{ height }} />
          ))}
        </div>
        <div className="relative h-[13px] w-[17px]" aria-hidden="true">
          <span className="absolute bottom-[1px] left-0 h-[13px] w-[17px] rounded-t-full border-[2px] border-b-0 border-black" />
          <span className="absolute bottom-[1px] left-[4px] h-[9px] w-[9px] rounded-t-full border-[2px] border-b-0 border-black" />
          <span className="absolute bottom-0 left-[7px] h-[3px] w-[3px] rounded-full bg-black" />
        </div>
        <div className="relative h-[12px] w-[25px]" aria-hidden="true">
          <div className="h-[12px] w-[22px] rounded-[3px] border-[1.6px] border-black p-[1.2px]">
            <div className="h-full w-[16px] rounded-[1.5px] bg-black" />
          </div>
          <span className="absolute right-0 top-[4px] h-[4px] w-[2px] rounded-r-sm bg-black" />
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
