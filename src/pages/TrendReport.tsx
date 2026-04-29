import {
  Activity,
  BarChart3,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Clock3,
  Heart,
  Info,
  LineChart,
  Moon,
  Plus,
  TrendingUp,
  Waves,
  Lightbulb,
} from "lucide-react";
import { BangBangCatImage } from "../components/BangBangCatImage";
import { Card, IconBubble } from "../components/Card";

const barLevels = [
  24, 48, 40, 44, 38, 50, 37, 52, 27, 60, 78, 45, 34, 42, 70, 30, 29, 46, 72,
  76, 74, 40, 53, 70, 38, 44, 52, 36, 49,
];

function SegmentControl() {
  return (
    <div className="mt-[24px] grid h-[34px] grid-cols-3 rounded-[17px] border border-[#f0e5d7] bg-white/72 p-[1px] text-[14px] text-ink-500">
      {["今天", "本周", "本月"].map((label) => (
        <button
          key={label}
          type="button"
          className={`rounded-[16px] ${label === "本周" ? "border border-citrus-100 bg-white text-citrus-500 shadow-sm" : ""}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function PressureBars() {
  return (
    <div className="mt-[18px]">
      <div className="relative h-[132px] pl-[34px] pr-[10px]">
        <div className="absolute left-0 top-[9px] flex h-[93px] flex-col justify-between text-[12px] text-ink-500">
          <span>高</span>
          <span>中</span>
          <span>低</span>
        </div>
        <div className="absolute bottom-[26px] left-[30px] right-[0px] h-px bg-[#eee4da]" />
        <div className="absolute left-[38px] top-[11px] h-[94px] w-px bg-[#eee4da]" />
        <div className="absolute bottom-[26px] left-[118px] h-[99px] w-[128px] rounded-[8px] border border-dashed border-citrus-300 bg-transparent">
          <div className="absolute left-[10px] top-[-10px] flex items-center gap-[5px] whitespace-nowrap rounded-full bg-white/75 px-[4px] py-[1px] text-[10px] font-medium text-citrus-500 backdrop-blur-sm">
            <CalendarDays className="h-[15px] w-[15px]" />
            工作时间段（9:00–18:00）
          </div>
        </div>
        <div className="absolute bottom-[26px] left-[40px] right-[10px] flex h-[86px] items-end justify-between">
          {barLevels.map((height, index) => {
            const isHigh = index >= 18 && index <= 20;
            const isMedium = [10, 14, 15, 17, 23].includes(index);
            return (
              <span
                key={`${height}-${index}`}
                className={`w-[7px] rounded-t-[3px] ${
                  isHigh ? "bg-[#ef6a5a]" : isMedium ? "bg-[#ffc073]" : "bg-[#fff0e4]"
                }`}
                style={{ height }}
              />
            );
          })}
        </div>
        <div className="absolute bottom-0 left-[42px] right-[7px] flex justify-between text-[12px] text-ink-500">
          <span>0时</span>
          <span>6时</span>
          <span>12时</span>
          <span>18时</span>
          <span>24时</span>
        </div>
      </div>
      <div className="mt-[10px] flex items-center gap-[31px] pl-[38px] text-[12px] text-ink-500">
        <span className="flex items-center gap-[8px]">
          <i className="h-[10px] w-[10px] rounded-[3px] bg-[#fff0e4]" />
          低压力
        </span>
        <span className="flex items-center gap-[8px]">
          <i className="h-[10px] w-[10px] rounded-[3px] bg-[#ffc073]" />
          中等压力
        </span>
        <span className="flex items-center gap-[8px]">
          <i className="h-[10px] w-[10px] rounded-[3px] bg-[#ef6a5a]" />
          高压力
        </span>
      </div>
    </div>
  );
}

function EventTile({
  icon,
  title,
  value,
  meta,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  meta: string;
}) {
  return (
    <div className="soft-card flex h-[88px] min-w-0 flex-col justify-between rounded-[16px] px-[8px] py-[12px]">
      <div className="flex min-w-0 items-center justify-between gap-[3px]">
        <div className="flex min-w-0 items-center gap-[4px]">
          <span className="shrink-0 text-citrus-500">{icon}</span>
          <span className="min-w-0 whitespace-nowrap text-[12px] font-semibold tracking-[-0.03em] text-ink-900">{title}</span>
        </div>
        <ChevronRight className="h-[14px] w-[14px] shrink-0 text-ink-500" />
      </div>
      <p className="text-center text-[14px] font-medium text-citrus-500">{value}</p>
      <p className="whitespace-nowrap text-center text-[10px] text-ink-500">{meta}</p>
    </div>
  );
}

function CatFaceIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-[18px] w-[18px]" fill="none" aria-hidden="true">
      <path d="M8.5 12 7.7 6.9l4.6 2.2M23.5 12l.8-5.1-4.6 2.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 16.4c0-5 3.5-8.2 8.5-8.2s8.5 3.2 8.5 8.2-3.5 8.1-8.5 8.1-8.5-3.1-8.5-8.1Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12.6 15.4h.1M19.3 15.4h.1M16 18.2v2M12 20.7h-2.7M20 20.7h2.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function BowlIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-[18px] w-[18px]" fill="none" aria-hidden="true">
      <path d="M8.2 14.2h15.6l-1.4 7.2c-.3 1.7-1.8 2.9-3.5 2.9h-5.8c-1.7 0-3.2-1.2-3.5-2.9l-1.4-7.2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M10.5 14.1c.4-2.6 2.7-4.5 5.5-4.5s5.1 1.9 5.5 4.5M13.5 10.5c-.2-1.1.4-2.1 1.4-2.6M18.5 10.5c.2-1.1-.4-2.1-1.4-2.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function PoopIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-[18px] w-[18px]" fill="none" aria-hidden="true">
      <path d="M14.8 8.2c2.8.9 4.2 2.4 3.8 4.1 3.2.8 5.1 2.6 5.1 5 0 3.5-3.2 5.5-7.7 5.5s-7.7-2-7.7-5.5c0-2.4 1.9-4.2 5.1-5-.4-1.6.1-2.9 1.4-4.1Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.9 18.2h8.2M13.7 14.7h4.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ObservationTile({
  icon,
  title,
  result,
  detail,
}: {
  icon: React.ReactNode;
  title: string;
  result: string;
  detail: string;
}) {
  return (
    <div className="soft-card flex h-[112px] min-w-0 flex-col rounded-[16px] px-[8px] py-[12px] text-center">
      <div className="flex items-center justify-center gap-[5px] text-citrus-500">
        {icon}
        <h4 className="whitespace-nowrap text-[12px] font-semibold text-ink-900">{title}</h4>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <p className="text-[15px] font-semibold text-[#7FA36B]">{result}</p>
        <p className="mt-[4px] whitespace-nowrap text-[10px] leading-[1.25] text-ink-500">{detail}</p>
      </div>
    </div>
  );
}

function RingChart() {
  return (
    <div className="flex w-[98px] shrink-0 flex-col items-center">
      <div className="relative aspect-square h-[86px] w-[86px] rounded-full bg-[conic-gradient(#ffad4f_0deg_240deg,#fff0e3_240deg_360deg)] p-[11px]">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
          <span className="text-[22px] font-semibold leading-none text-ink-900">2/3</span>
        </div>
      </div>
      <span className="mt-[5px] text-center text-[11px] leading-[1.25] text-ink-500">
        15 分钟内
        <br />
        恢复平稳
      </span>
    </div>
  );
}

export function TrendReport() {
  return (
    <div className="pt-[42px]">
      <header className="flex items-center justify-between">
        <h1 className="text-[24px] font-bold tracking-[-0.05em] text-ink-900">趋势报告</h1>
      </header>
      <SegmentControl />

      <Card className="relative mt-[16px] min-h-[236px] overflow-hidden px-[20px] py-[21px]">
        <div className="flex items-center gap-[10px]">
          <IconBubble>
            <TrendingUp className="h-[22px] w-[22px]" strokeWidth={1.8} />
          </IconBubble>
          <h2 className="text-[16px] font-semibold text-ink-900">本周概览</h2>
        </div>
        <div className="relative z-10 mt-[26px] max-w-[172px]">
          <p className="inline-flex items-center gap-[7px] text-[28px] font-semibold tracking-[-0.06em] text-[#7FA36B]">
            整体稳定
          </p>
          <p className="mt-[20px] text-[12px] leading-[1.75] text-ink-500">
            梆梆本周整体状态以平稳为主。
            <br />
            共记录 <span className="text-citrus-500">3</span> 次主人关注事件，
            <br />
            未发现持续异常的状态变化。
          </p>
        </div>
        <button
          type="button"
          className="relative z-10 mt-[21px] inline-flex h-[35px] items-center gap-[5px] rounded-full bg-citrus-50 px-[14px] text-[13px] font-medium text-ink-900"
        >
          查看详情 <ChevronDown className="h-[15px] w-[15px]" strokeWidth={2.3} />
        </button>
        <BangBangCatImage variant="card" className="absolute bottom-[18px] right-[-4px] h-[188px] w-[188px]" />
      </Card>

      <Card className="mt-[14px] px-[18px] py-[20px]">
        <div className="flex items-start gap-[10px]">
          <IconBubble>
            <Clock3 className="h-[22px] w-[22px]" strokeWidth={1.8} />
          </IconBubble>
          <div>
            <h2 className="text-[16px] font-semibold text-ink-900">高压力时段</h2>
            <p className="mt-[10px] text-[13px] leading-[1.65] text-ink-500">
              压力信号主要出现在工作时间段，
              <br />
              可能与独处时间较长有关。
            </p>
          </div>
        </div>
        <PressureBars />
      </Card>

      <Card className="mt-[16px] px-[14px] py-[17px]">
        <div className="flex items-start justify-between gap-[8px]">
          <div className="flex min-w-0 items-start gap-[9px]">
            <IconBubble>
              <Heart className="h-[22px] w-[22px]" strokeWidth={1.8} />
            </IconBubble>
            <div className="min-w-0">
              <h2 className="whitespace-nowrap text-[16px] font-semibold text-ink-900">
                事件记录 <span className="text-[13px] font-normal text-ink-500">（主人记录）</span>
              </h2>
              <p className="mt-[7px] text-[11px] text-ink-500">以下为您本周手动记录的健康事件。</p>
            </div>
          </div>
          <button
            type="button"
            className="mt-[2px] flex h-[32px] min-w-[86px] shrink-0 items-center justify-center gap-[4px] whitespace-nowrap rounded-full border border-citrus-500 px-[9px] text-[12px] font-medium text-citrus-500"
          >
            记录事件 <Plus className="h-[13px] w-[13px]" />
          </button>
        </div>
        <div className="mt-[18px] grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[10px]">
          <EventTile icon={<CatFaceIcon />} title="呕吐" value="1 次" meta="4月28日 20:35" />
          <EventTile icon={<BowlIcon />} title="食欲变化" value="未记录" meta="—" />
          <EventTile icon={<PoopIcon />} title="便便异常" value="未记录" meta="—" />
        </div>
        <p className="mt-[16px] flex gap-[6px] text-[11px] leading-[1.4] text-ink-500">
          <Info className="mt-[1px] h-[14px] w-[14px] shrink-0 text-citrus-500" />
          说明：便便形态等信息需要主人记录或上传照片，项圈无法直接判断形态。
        </p>
      </Card>

      <Card className="mt-[14px] px-[16px] py-[18px]">
        <div className="flex items-start gap-[10px]">
          <IconBubble>
            <Activity className="h-[22px] w-[22px]" strokeWidth={1.8} />
          </IconBubble>
          <div>
            <h2 className="text-[16px] font-semibold text-ink-900">
              系统观察 <span className="text-[13px] font-normal text-ink-500">（自动监测）</span>
            </h2>
            <p className="mt-[7px] text-[12px] text-ink-500">基于项圈数据分析的本周状态变化。</p>
          </div>
        </div>
        <div className="mt-[15px] grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[10px]">
          <ObservationTile
            icon={<LineChart className="h-[24px] w-[24px]" strokeWidth={1.8} />}
            title="心率趋势"
            result="平稳"
            detail="无持续异常"
          />
          <ObservationTile
            icon={<BarChart3 className="h-[24px] w-[24px]" strokeWidth={1.8} />}
            title="活动水平"
            result="正常"
            detail="日常活动充足"
          />
          <ObservationTile
            icon={<Moon className="h-[24px] w-[24px]" strokeWidth={1.7} />}
            title="休息质量"
            result="良好"
            detail="休息时间充足"
          />
        </div>
      </Card>

      <Card className="mt-[14px] flex items-center justify-between gap-[12px] px-[18px] py-[19px]">
        <div className="flex min-w-0 items-start gap-[10px]">
          <IconBubble>
            <Waves className="h-[23px] w-[23px]" strokeWidth={1.8} />
          </IconBubble>
          <div>
            <h2 className="text-[18px] font-semibold text-ink-900">
              安抚效果 <span className="text-[13px] font-normal text-ink-500">（本周）</span>
            </h2>
            <p className="mt-[9px] text-[14px] leading-[1.8] text-ink-500">
              本周共启动安抚 <span className="text-citrus-500">3</span> 次，
              <br />
              其中 <span className="text-citrus-500">2</span> 次在 15 分钟内恢复平稳。
            </p>
          </div>
        </div>
        <RingChart />
      </Card>

      <Card className="mt-[14px] overflow-hidden px-[18px] py-[20px]">
        <div className="flex items-start gap-[10px]">
          <IconBubble>
            <Lightbulb className="h-[23px] w-[23px]" strokeWidth={1.8} />
          </IconBubble>
          <div className="flex-1">
            <h2 className="text-[18px] font-semibold text-ink-900">下周建议</h2>
            <ul className="mt-[12px] space-y-[7px] text-[13px] leading-[1.6] text-ink-500">
              <li className="flex gap-[7px]">
                <span className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-citrus-500" />
                工作时间段压力偏高，可在出门前开启轻度安抚。
              </li>
              <li className="flex gap-[7px]">
                <span className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-citrus-500" />
                建议增加回家后的互动游戏或陪伴时间，帮助缓解独处压力。
              </li>
              <li className="flex gap-[7px]">
                <span className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-citrus-500" />
                持续关注食欲和排便情况，如有变化请及时记录。
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
