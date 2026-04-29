import {
  Bell,
  ChevronDown,
  ChevronRight,
  Cat,
  Heart,
  Lightbulb,
  Menu,
  Moon,
} from "lucide-react";
import type { Page } from "../App";
import { BangBangCatImage } from "../components/BangBangCatImage";
import { Card, IconBubble } from "../components/Card";

type HomeProps = {
  onNavigate: (page: Page) => void;
};

function MetricCard({
  icon,
  title,
  value,
  detail,
}: {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
  detail: string;
}) {
  return (
    <Card className="flex h-[150px] min-w-0 flex-col px-[14px] py-[14px]">
      <IconBubble className="mb-[10px] h-[34px] w-[34px]">{icon}</IconBubble>
      <p className="text-[12px] leading-none text-ink-500">{title}</p>
      <div className="mt-[7px] break-keep text-[21px] font-medium leading-[1.08] tracking-[-0.05em] text-ink-900">
        {value}
      </div>
      <p className="mt-auto flex min-w-0 items-start gap-[5px] text-[11px] leading-[1.25] text-ink-500">
        <span className="mt-[3px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#ffad0a]" />
        <span className="min-w-0 break-keep">{detail}</span>
      </p>
    </Card>
  );
}

function InfoRow({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: React.ReactNode;
}) {
  return (
    <Card className="flex min-h-[98px] items-center gap-[18px] px-[17px] py-[18px]">
      <IconBubble className="h-[54px] w-[54px]">{icon}</IconBubble>
      <div className="min-w-0 flex-1">
        <h3 className="text-[16px] font-semibold text-ink-900">{title}</h3>
        <p className="mt-[7px] text-[13px] leading-[1.75] text-ink-500">{text}</p>
      </div>
      <ChevronRight className="h-[22px] w-[22px] shrink-0 text-ink-300" strokeWidth={2} />
    </Card>
  );
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="pt-[42px]">
      <header className="flex items-start justify-between">
        <button
          type="button"
          onClick={() => onNavigate("more")}
          className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white shadow-card"
          aria-label="打开猫咪与设备"
        >
          <Menu className="h-[24px] w-[24px]" strokeWidth={2} />
        </button>
        <div className="ml-[14px] flex-1">
          <div className="flex items-center gap-[8px]">
            <h1 className="text-[24px] font-bold tracking-[-0.05em] text-ink-900">梆梆</h1>
            <ChevronDown className="mt-[4px] h-[18px] w-[18px]" strokeWidth={2.2} />
          </div>
          <p className="mt-[2px] text-[15px] tracking-[0.08em] text-ink-500">1岁 · 公 · 4.5 kg</p>
        </div>
        <button
          type="button"
          className="relative mt-[2px] flex h-[48px] w-[48px] items-center justify-center rounded-full"
          aria-label="通知"
        >
          <Bell className="h-[25px] w-[25px]" strokeWidth={1.8} />
          <span className="absolute right-[8px] top-[8px] h-[8px] w-[8px] rounded-full bg-citrus-500" />
        </button>
      </header>

      <section className="relative mt-[22px] h-[260px]">
        <div className="absolute left-[7px] top-[80px] z-10">
          <p className="text-[14px] text-ink-500">当前状态</p>
          <h2 className="mt-[15px] inline-flex items-center gap-[6px] text-[28px] font-medium tracking-[-0.06em] text-citrus-500">
            平稳 <span className="mt-[2px] h-[8px] w-[8px] rounded-full bg-citrus-500" />
          </h2>
          <p className="mt-[21px] text-[13px] leading-[1.9] text-ink-500">
            梆梆看起来很放松，
            <br />
            一切正常。
          </p>
        </div>
        <BangBangCatImage className="absolute right-[-18px] top-[-4px]" />
      </section>

      <section className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[10px]">
        <MetricCard
          icon={<Heart className="h-[22px] w-[22px]" strokeWidth={1.8} />}
          title="心率"
          value={
            <>
              <span className="text-[24px]">126</span>{" "}
              <span className="ml-[1px] text-[11px] font-normal tracking-normal text-ink-500">bpm</span>
            </>
          }
          detail="100–140 正常范围"
        />
        <MetricCard
          icon={<Cat className="h-[23px] w-[23px]" strokeWidth={1.8} />}
          title="活动状态"
          value="正常活动"
          detail="活动水平正常"
        />
        <MetricCard
          icon={<Moon className="h-[23px] w-[23px]" strokeWidth={1.8} />}
          title="休息状态"
          value="正在休息"
          detail="今日休息良好"
        />
      </section>

      <div className="mt-[18px] space-y-[14px] pb-[8px]">
        <InfoRow
          icon={<Bell className="h-[26px] w-[26px]" strokeWidth={1.7} />}
          title="今日提醒"
          text={
            <>
              今日暂无异常，
              <br />
              继续观察即可。
            </>
          }
        />
        <InfoRow
          icon={<Lightbulb className="h-[25px] w-[25px]" strokeWidth={1.7} />}
          title="今日建议"
          text={
            <>
              梆梆今天状态良好，
              <br />
              保持目前的生活节奏就很好。
            </>
          }
        />
      </div>
    </div>
  );
}
