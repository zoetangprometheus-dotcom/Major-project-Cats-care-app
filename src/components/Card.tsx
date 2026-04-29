import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return <section className={`soft-card rounded-[24px] ${className}`}>{children}</section>;
}

type IconBubbleProps = {
  children: ReactNode;
  className?: string;
};

export function IconBubble({ children, className = "" }: IconBubbleProps) {
  return (
    <div
      className={`icon-bubble flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full text-citrus-500 ${className}`}
    >
      {children}
    </div>
  );
}
