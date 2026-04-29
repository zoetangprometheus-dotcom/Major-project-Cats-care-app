import { AlertTriangle, ChevronLeft, HeartPulse, ListChecks, Save, Sparkles } from "lucide-react";
import type { Page } from "../App";
import { Card, IconBubble } from "../components/Card";

type AIAnalysisProps = {
  onNavigate: (page: Page) => void;
};

function ListCard({
  icon,
  title,
  items,
  tone = "normal",
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  tone?: "normal" | "warning";
}) {
  return (
    <Card className="px-[18px] py-[18px]">
      <div className="flex items-center gap-[10px]">
        <IconBubble>{icon}</IconBubble>
        <h2 className="text-[18px] font-semibold text-ink-900">{title}</h2>
      </div>
      <ul className="mt-[14px] space-y-[9px] text-[13px] leading-[1.65] text-ink-500">
        {items.map((item) => (
          <li key={item} className="flex gap-[8px]">
            <span
              className={`mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full ${
                tone === "warning" ? "bg-[#ef4444]" : "bg-citrus-500"
              }`}
            />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function AIAnalysis({ onNavigate }: AIAnalysisProps) {
  return (
    <div className="pt-[42px]">
      <header className="flex items-center gap-[16px]">
        <button
          type="button"
          onClick={() => onNavigate("aiUpload")}
          className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white shadow-card"
          aria-label="返回上传照片"
        >
          <ChevronLeft className="h-[25px] w-[25px] text-ink-900" strokeWidth={1.9} />
        </button>
        <h1 className="text-[24px] font-semibold tracking-[-0.05em] text-ink-900">AI 初步分析</h1>
      </header>

      <div className="mt-[22px] space-y-[14px]">
        <Card className="px-[18px] py-[20px]">
          <div className="flex items-center gap-[10px]">
            <IconBubble>
              <Sparkles className="h-[22px] w-[22px]" strokeWidth={1.8} />
            </IconBubble>
            <h2 className="text-[18px] font-semibold text-ink-900">当前情况</h2>
          </div>
          <p className="mt-[15px] text-[14px] leading-[1.8] text-ink-500">
            从照片看，呕吐物中可能包含未消化食物。
            <br />
            结合梆梆当前心率和活动状态，暂未发现持续异常。
          </p>
        </Card>

        <ListCard
          icon={<HeartPulse className="h-[22px] w-[22px]" strokeWidth={1.8} />}
          title="可能原因"
          items={["进食过快", "毛球刺激", "短时间胃部不适", "环境压力"]}
        />

        <ListCard
          icon={<ListChecks className="h-[22px] w-[22px]" strokeWidth={1.8} />}
          title="应急观察建议"
          items={[
            "暂停喂食 4–6 小时，观察是否再次呕吐。",
            "少量多次提供清水，避免一次性大量饮水。",
            "暂时避免零食、罐头或突然更换食物。",
            "观察精神状态、食欲和排便情况。",
          ]}
        />

        <ListCard
          icon={<AlertTriangle className="h-[22px] w-[22px]" strokeWidth={1.8} />}
          title="需要联系兽医的情况"
          tone="warning"
          items={[
            "短时间内反复呕吐",
            "呕吐物带血或呈咖啡色",
            "明显精神萎靡",
            "持续拒绝饮水或进食",
            "腹部疼痛、呼吸异常或虚弱",
          ]}
        />

        <Card className="border-citrus-100 bg-citrus-50/70 px-[18px] py-[16px]">
          <h2 className="text-[16px] font-semibold text-ink-900">免责声明</h2>
          <p className="mt-[8px] text-[13px] leading-[1.7] text-ink-500">
            此建议仅用于初步观察和应急参考，不能替代专业兽医诊断。
          </p>
        </Card>
      </div>

      <button
        type="button"
        onClick={() => onNavigate("trend")}
        className="mt-[18px] flex h-[52px] w-full items-center justify-center gap-[8px] rounded-full bg-citrus-500 text-[16px] font-semibold text-white shadow-[0_14px_28px_rgba(255,122,0,0.24)]"
      >
        <Save className="h-[20px] w-[20px]" strokeWidth={1.8} />
        保存为健康事件
      </button>
    </div>
  );
}
