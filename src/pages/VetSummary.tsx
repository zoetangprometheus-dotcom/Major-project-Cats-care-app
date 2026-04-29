import { Camera, ChevronLeft, HeartPulse, Share2, Stethoscope, UserRound } from "lucide-react";
import type { Page } from "../App";
import { BangBangCatImage } from "../components/BangBangCatImage";
import { Card, IconBubble } from "../components/Card";

type VetSummaryProps = {
  onNavigate: (page: Page) => void;
};

function DetailLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-[16px] border-b border-[#f0e5d8] py-[10px] last:border-b-0">
      <span className="text-[13px] text-ink-500">{label}</span>
      <span className="max-w-[220px] text-right text-[13px] font-medium leading-[1.6] text-ink-900">{value}</span>
    </div>
  );
}

function BulletList({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="px-[18px] py-[18px]">
      <h2 className="text-[18px] font-semibold text-ink-900">{title}</h2>
      <ul className="mt-[12px] space-y-[8px] text-[13px] leading-[1.65] text-ink-500">
        {items.map((item) => (
          <li key={item} className="flex gap-[8px]">
            <span className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-citrus-500" />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function VetSummary({ onNavigate }: VetSummaryProps) {
  return (
    <div className="pt-[42px]">
      <header className="flex items-center gap-[16px]">
        <button
          type="button"
          onClick={() => onNavigate("more")}
          className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white shadow-card"
          aria-label="返回猫咪与设备"
        >
          <ChevronLeft className="h-[25px] w-[25px] text-ink-900" strokeWidth={1.9} />
        </button>
        <h1 className="text-[24px] font-semibold tracking-[-0.05em] text-ink-900">就医摘要</h1>
      </header>

      <Card className="mt-[22px] flex items-center gap-[16px] px-[16px] py-[16px]">
        <BangBangCatImage variant="avatar" />
        <div>
          <h2 className="text-[25px] font-semibold tracking-[-0.05em] text-ink-900">梆梆</h2>
          <p className="mt-[5px] text-[15px] tracking-[0.08em] text-ink-500">1岁 · 公 · 4.5 kg</p>
        </div>
      </Card>

      <Card className="mt-[14px] px-[18px] py-[18px]">
        <div className="flex items-center gap-[10px]">
          <IconBubble>
            <Stethoscope className="h-[22px] w-[22px]" strokeWidth={1.8} />
          </IconBubble>
          <h2 className="text-[18px] font-semibold text-ink-900">事件信息</h2>
        </div>
        <div className="mt-[12px]">
          <DetailLine label="事件来源" value="主人记录" />
          <DetailLine label="事件类型" value="呕吐" />
          <DetailLine label="时间" value="2026.04.28 20:35" />
          <DetailLine label="主人描述" value="晚饭后约 20 分钟呕吐一次" />
        </div>
      </Card>

      <Card className="mt-[14px] px-[18px] py-[18px]">
        <div className="flex items-center gap-[10px]">
          <IconBubble>
            <Camera className="h-[22px] w-[22px]" strokeWidth={1.8} />
          </IconBubble>
          <h2 className="text-[18px] font-semibold text-ink-900">上传照片</h2>
        </div>
        <div className="mt-[14px] flex h-[110px] items-center justify-center rounded-[20px] border border-dashed border-citrus-300 bg-[#fffaf3] text-center text-[13px] text-ink-500">
          <div>
            <Camera className="mx-auto h-[30px] w-[30px] text-citrus-500" strokeWidth={1.6} />
            <p className="mt-[8px]">照片缩略图占位</p>
          </div>
        </div>
      </Card>

      <Card className="mt-[14px] px-[18px] py-[18px]">
        <div className="flex items-center gap-[10px]">
          <IconBubble>
            <HeartPulse className="h-[22px] w-[22px]" strokeWidth={1.8} />
          </IconBubble>
          <h2 className="text-[18px] font-semibold text-ink-900">事件前后状态</h2>
        </div>
        <div className="mt-[12px]">
          <DetailLine label="心率" value="126–138 bpm" />
          <DetailLine label="活动" value="略低于平时" />
          <DetailLine label="休息" value="正常" />
          <DetailLine label="安抚装置" value="未启动" />
        </div>
      </Card>

      <BulletList
        title="AI 建议摘要"
        items={["暂停喂食 4–6 小时", "少量多次提供清水", "观察是否再次呕吐", "如症状持续或加重，请联系兽医"]}
      />

      <BulletList title="后续记录" items={["2 小时内未再次呕吐", "精神状态正常"]} />

      <button
        type="button"
        className="mt-[18px] flex h-[52px] w-full items-center justify-center gap-[8px] rounded-full bg-citrus-500 text-[16px] font-semibold text-white shadow-[0_14px_28px_rgba(255,122,0,0.24)]"
      >
        <Share2 className="h-[20px] w-[20px]" strokeWidth={1.8} />
        分享给兽医
      </button>
    </div>
  );
}
