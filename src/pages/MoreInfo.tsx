import {
  Bell,
  Bot,
  Box,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  FlameKindling,
  HelpCircle,
  HeartPulse,
  Lock,
  Settings,
  ShieldCheck,
  Stethoscope,
  Waves,
} from "lucide-react";
import type { Page } from "../App";
import { BangBangCatImage } from "../components/BangBangCatImage";
import { Card, IconBubble } from "../components/Card";

type MoreInfoProps = {
  onNavigate: (page: Page) => void;
};

type RowProps = {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  onClick?: () => void;
};

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="mt-[20px] flex items-center gap-[10px]">
      <IconBubble className="h-[36px] w-[36px]">{icon}</IconBubble>
      <h2 className="text-[19px] font-semibold text-ink-900">{title}</h2>
    </div>
  );
}

function Row({ icon, title, subtitle, onClick }: RowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-[15px] border-b border-[#eee5da] px-[14px] py-[15px] text-left last:border-b-0"
    >
      <span className="text-citrus-500">{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-[17px] font-semibold text-ink-900">{title}</span>
        {subtitle && <span className="mt-[4px] block text-[12px] leading-[1.5] text-ink-500">{subtitle}</span>}
      </span>
      <ChevronRight className="h-[20px] w-[20px] shrink-0 text-ink-500" strokeWidth={1.9} />
    </button>
  );
}

export function MoreInfo({ onNavigate }: MoreInfoProps) {
  return (
    <div className="pt-[42px]">
      <header className="flex items-center gap-[16px]">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white shadow-card"
          aria-label="返回首页"
        >
          <ChevronLeft className="h-[25px] w-[25px] text-ink-900" strokeWidth={1.9} />
        </button>
        <h1 className="text-[24px] font-semibold tracking-[-0.05em] text-ink-900">猫咪与设备</h1>
      </header>

      <Card className="mt-[22px] flex items-center gap-[20px] px-[16px] py-[18px]">
        <BangBangCatImage variant="avatar" />
        <div className="min-w-0 flex-1">
          <h2 className="text-[27px] font-semibold tracking-[-0.05em] text-ink-900">梆梆</h2>
          <p className="mt-[5px] text-[15px] tracking-[0.08em] text-ink-500">1岁 · 公 · 4.5 kg</p>
        </div>
        <button
          type="button"
          className="flex items-center gap-[5px] text-[14px] font-medium text-citrus-500"
        >
          查看档案
          <ChevronRight className="h-[18px] w-[18px]" strokeWidth={2.1} />
        </button>
      </Card>

      <SectionTitle icon={<Box className="h-[21px] w-[21px]" strokeWidth={1.8} />} title="设备与耗材" />
      <Card className="mt-[10px] overflow-hidden">
        <Row
          icon={<HeartPulse className="h-[31px] w-[31px]" strokeWidth={1.55} />}
          title="项圈设备"
          subtitle="已连接 · 电量 78%"
        />
        <Row
          icon={<FlameKindling className="h-[31px] w-[31px]" strokeWidth={1.55} />}
          title="安抚装置"
          subtitle="已连接 · 电量 92%"
        />
        <Row
          icon={<Waves className="h-[31px] w-[31px]" strokeWidth={1.55} />}
          title="费洛蒙片"
          subtitle="剩余 6 天"
        />
      </Card>

      <SectionTitle icon={<HeartPulse className="h-[21px] w-[21px]" strokeWidth={1.8} />} title="健康与记录" />
      <Card className="mt-[10px] overflow-hidden">
        <Row
          icon={<Bot className="h-[31px] w-[31px]" strokeWidth={1.55} />}
          title="AI 健康助手"
          subtitle="上传照片，获得初步观察建议"
          onClick={() => onNavigate("aiUpload")}
        />
        <Row
          icon={<CalendarDays className="h-[31px] w-[31px]" strokeWidth={1.55} />}
          title="健康事件记录"
          subtitle="查看主人记录的呕吐、食欲变化等事件"
        />
        <Row
          icon={<ClipboardList className="h-[31px] w-[31px]" strokeWidth={1.55} />}
          title="就医摘要"
          subtitle="整理事件、照片和状态数据，便于与兽医沟通"
          onClick={() => onNavigate("vetSummary")}
        />
      </Card>

      <SectionTitle icon={<Settings className="h-[21px] w-[21px]" strokeWidth={1.8} />} title="设置与隐私" />
      <Card className="mt-[10px] overflow-hidden">
        <Row icon={<Bell className="h-[28px] w-[28px]" strokeWidth={1.55} />} title="通知设置" />
        <Row icon={<HeartPulse className="h-[28px] w-[28px]" strokeWidth={1.55} />} title="自动安抚规则" />
        <Row icon={<ShieldCheck className="h-[28px] w-[28px]" strokeWidth={1.55} />} title="安全设置" />
        <Row icon={<Lock className="h-[28px] w-[28px]" strokeWidth={1.55} />} title="数据与隐私" />
        <Row icon={<HelpCircle className="h-[28px] w-[28px]" strokeWidth={1.55} />} title="帮助与支持" />
      </Card>
    </div>
  );
}
