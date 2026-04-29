import {
  CircleHelp,
  FlameKindling,
  HeartPulse,
  Leaf,
  Link,
  Moon,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Thermometer,
  Waves,
  Zap,
} from "lucide-react";
import { BangBangCatImage } from "../components/BangBangCatImage";
import { Card, IconBubble } from "../components/Card";

function Toggle() {
  return (
    <div className="flex h-[28px] w-[54px] items-center justify-end rounded-full bg-citrus-500 p-[3px]">
      <span className="h-[22px] w-[22px] rounded-full bg-white shadow-sm" />
    </div>
  );
}

function Slider({ labels, position = "62%" }: { labels: [string, string, string?]; position?: string }) {
  return (
    <div className="mt-[10px] w-full">
      <div className="range-track relative h-[4px] rounded-full">
        <span
          className="absolute top-1/2 h-[18px] w-[18px] -translate-y-1/2 rounded-full border-2 border-citrus-500 bg-white"
          style={{ left: position }}
        />
      </div>
      <div className="mt-[10px] flex justify-between text-[11px] text-ink-500">
        <span>{labels[0]}</span>
        {labels[2] && <span>{labels[1]}</span>}
        <span>{labels[2] ?? labels[1]}</span>
      </div>
    </div>
  );
}

function QuickCard({
  icon,
  title,
  time,
  detail,
}: {
  icon: React.ReactNode;
  title: string;
  time: string;
  detail: string;
}) {
  return (
    <div className="soft-card flex h-[88px] min-w-0 flex-col items-center justify-center rounded-[18px] px-[8px] text-center">
      <div className="mb-[6px] flex min-w-0 items-center gap-[4px]">
        <IconBubble className="h-[30px] w-[30px]">{icon}</IconBubble>
        <h3 className="whitespace-nowrap text-[13px] font-semibold tracking-[-0.03em] text-ink-900">{title}</h3>
      </div>
      <p className="text-[13px] font-medium text-citrus-500">{time}</p>
      <p className="mt-[5px] break-keep text-[11px] leading-[1.25] text-ink-500">{detail}</p>
    </div>
  );
}

function ControlCard({
  icon,
  title,
  children,
  slider,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  slider: React.ReactNode;
}) {
  return (
    <div className="rounded-[19px] border border-[#f3e8da] bg-white/58 px-[14px] py-[15px]">
      <div className="flex items-start gap-[12px]">
        <IconBubble className="h-[44px] w-[44px]">{icon}</IconBubble>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-[12px]">
            <div>
              <h3 className="text-[16px] font-semibold text-ink-900">{title}</h3>
              {children}
            </div>
            <Toggle />
          </div>
          <div className="mt-[12px] grid grid-cols-[1fr_180px] items-end gap-[12px]">
            <p className="text-[11px] leading-[1.55] text-ink-500">
              {title === "低温加热" ? "提供稳定、温和的热感环境。" : "帮助营造熟悉、放松的环境气味。"}
            </p>
            {slider}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SoothingControl() {
  return (
    <div className="pt-[42px]">
      <header className="flex items-center justify-between">
        <h1 className="text-[28px] font-semibold tracking-[-0.05em] text-ink-900">安抚控制</h1>
        <CircleHelp className="h-[24px] w-[24px] text-ink-900" strokeWidth={1.9} />
      </header>

      <Card className="relative mt-[20px] min-h-[148px] overflow-hidden px-[20px] py-[20px]">
        <div className="flex items-center gap-[10px]">
          <IconBubble>
            <ShieldCheck className="h-[22px] w-[22px]" strokeWidth={1.8} />
          </IconBubble>
          <h2 className="text-[18px] font-semibold text-ink-900">当前推荐</h2>
        </div>
        <p className="relative z-10 mt-[20px] max-w-[205px] text-[22px] font-semibold leading-[1.35] tracking-[-0.05em] text-citrus-500">
          梆梆当前状态平稳。
        </p>
        <p className="relative z-10 mt-[8px] max-w-[210px] text-[13px] leading-[1.6] text-ink-500">
          暂无需开启安抚，可保持设备待机。
        </p>
        <button
          type="button"
          className="relative z-10 mt-[16px] h-[34px] rounded-full border border-citrus-500 px-[18px] text-[13px] font-medium text-citrus-500"
        >
          保持待机
        </button>
        <BangBangCatImage variant="card" className="absolute bottom-[6px] right-[6px] h-[145px] w-[145px]" />
      </Card>

      <Card className="mt-[14px] px-[16px] py-[18px]">
        <div className="flex items-center gap-[10px]">
          <IconBubble className="h-[34px] w-[34px]">
            <Zap className="h-[18px] w-[18px]" strokeWidth={1.9} />
          </IconBubble>
          <h2 className="text-[18px] font-semibold text-ink-900">快速安抚</h2>
        </div>
        <div className="mt-[14px] grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[10px]">
          <QuickCard
            icon={<Leaf className="h-[20px] w-[20px]" strokeWidth={1.8} />}
            title="轻度安抚"
            time="10–15 分钟"
            detail="适合轻微压力信号"
          />
          <QuickCard
            icon={<Waves className="h-[20px] w-[20px]" strokeWidth={1.8} />}
            title="舒缓模式"
            time="20–30 分钟"
            detail="适合明显紧张状态"
          />
          <QuickCard
            icon={<Moon className="h-[20px] w-[20px]" strokeWidth={1.8} />}
            title="夜间模式"
            time="睡眠时段"
            detail="低提醒，温和运行"
          />
        </div>
      </Card>

      <Card className="mt-[14px] px-[12px] py-[17px]">
        <div className="mb-[14px] flex items-center gap-[10px] px-[4px]">
          <IconBubble className="h-[34px] w-[34px]">
            <SlidersHorizontal className="h-[18px] w-[18px]" strokeWidth={1.9} />
          </IconBubble>
          <h2 className="text-[18px] font-semibold text-ink-900">功能控制</h2>
        </div>
        <div className="space-y-[10px]">
          <ControlCard
            icon={<Thermometer className="h-[24px] w-[24px]" strokeWidth={1.8} />}
            title="低温加热"
            slider={<Slider labels={["32°C", "42°C"]} position="58%" />}
          >
            <p className="mt-[5px] text-[13px] text-ink-500">
              当前温度：<span className="font-medium text-citrus-500">38°C</span>
            </p>
            <p className="mt-[5px] flex items-center gap-[6px] text-[12px] text-ink-500">
              <span className="h-[7px] w-[7px] rounded-full bg-green-500" />
              安全范围内
            </p>
          </ControlCard>
          <ControlCard
            icon={<FlameKindling className="h-[24px] w-[24px]" strokeWidth={1.8} />}
            title="费洛蒙释放"
            slider={<Slider labels={["低", "中", "高"]} position="49%" />}
          >
            <p className="mt-[5px] text-[13px] text-ink-500">
              释放强度：<span className="font-medium text-citrus-500">中等</span>
            </p>
            <p className="mt-[5px] text-[12px] text-ink-500">
              耗材剩余：<span className="font-medium text-citrus-500">6 天</span>
            </p>
          </ControlCard>
        </div>
      </Card>

      <Card className="mt-[14px] px-[18px] py-[19px]">
        <div className="flex items-start gap-[10px]">
          <IconBubble className="h-[34px] w-[34px]">
            <ShieldCheck className="h-[18px] w-[18px]" strokeWidth={1.9} />
          </IconBubble>
          <div className="flex-1">
            <h2 className="text-[18px] font-semibold text-ink-900">自动安抚规则</h2>
            <p className="mt-[13px] text-[13px] leading-[1.8] text-ink-500">
              当梆梆在工作时间段出现持续压力信号时，系统会先提醒主人，再建议开启轻度安抚。
            </p>
            <p className="mt-[6px] text-[13px] text-ink-500">
              状态：<span className="font-medium text-green-600">已开启</span>
            </p>
          </div>
          <button className="mt-[36px] flex h-[34px] items-center gap-[6px] rounded-full border border-citrus-500 px-[14px] text-[13px] font-medium text-citrus-500">
            查看规则
          </button>
        </div>
      </Card>

      <Card className="mt-[14px] px-[18px] py-[18px]">
        <div className="flex items-center gap-[10px]">
          <IconBubble className="h-[34px] w-[34px]">
            <ShieldCheck className="h-[18px] w-[18px]" strokeWidth={1.9} />
          </IconBubble>
          <h2 className="text-[18px] font-semibold text-ink-900">安全状态</h2>
        </div>
        <div className="mt-[14px] grid grid-cols-2 gap-[12px]">
          <div className="soft-card flex items-center gap-[12px] rounded-[18px] px-[16px] py-[16px]">
            <IconBubble>
              <Thermometer className="h-[24px] w-[24px]" strokeWidth={1.8} />
            </IconBubble>
            <div>
              <p className="text-[13px] text-ink-900">设备温度</p>
              <p className="mt-[3px] text-[22px] font-semibold text-citrus-500">38°C</p>
              <p className="mt-[2px] flex items-center gap-[5px] text-[11px] text-ink-500">
                <span className="h-[6px] w-[6px] rounded-full bg-green-500" />
                安全范围内
              </p>
            </div>
          </div>
          <div className="soft-card flex items-center gap-[12px] rounded-[18px] px-[16px] py-[16px]">
            <IconBubble>
              <Link className="h-[24px] w-[24px]" strokeWidth={1.8} />
            </IconBubble>
            <div>
              <p className="text-[13px] text-ink-900">设备连接</p>
              <p className="mt-[3px] text-[22px] font-semibold text-citrus-500">正常</p>
              <p className="mt-[2px] flex items-center gap-[5px] text-[11px] text-ink-500">
                <span className="h-[6px] w-[6px] rounded-full bg-green-500" />
                连接稳定
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
