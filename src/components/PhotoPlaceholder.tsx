export function PhotoPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex aspect-[4/3] w-full items-center justify-center border-2 border-dashed border-divider bg-surface text-center text-sm text-ink/50 ${className}`}
    >
      {label}
    </div>
  )
}
