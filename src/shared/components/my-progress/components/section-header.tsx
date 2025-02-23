import type { SectionHeaderProps } from "./section-header.types"

export const SectionHeader = ({ title, children }: SectionHeaderProps) => {
  return (
    <header className="flex justify-between items-center border-b border-shades-violet-8 pb-4">
      <h3 className="text-sm font-bold text-secondary-foreground">{title}</h3>
      {children}
    </header>
  )
}