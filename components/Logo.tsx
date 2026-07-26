type LogoProps = {
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
  textClassName?: string
}

const pixelSizes = {
  sm: 48,
  md: 56,
  lg: 72,
}

const textClasses = {
  sm: {
    title: 'text-xl',
    subtitle: 'text-[10px]',
  },
  md: {
    title: 'text-2xl',
    subtitle: 'text-[11px]',
  },
  lg: {
    title: 'text-3xl',
    subtitle: 'text-xs',
  },
}

export default function Logo({ showText = true, size = 'lg', className = '', textClassName = '' }: LogoProps) {
  const px = pixelSizes[size]
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Inline SVG — no external file dependency */}
      <svg
        width={px}
        height={px}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="MotoFax logo mark"
        role="img"
        style={{ flexShrink: 0 }}
      >
        {/* Red rounded square background */}
        <rect width="80" height="80" rx="16" fill="#DC143C" />
        {/* White M letterform */}
        <path
          d="M12 64V16H24L40 38L56 16H68V64H56V36L40 58L24 36V64H12Z"
          fill="white"
        />
      </svg>
      {showText && (
        <div className={textClassName}>
          <div className={`text-white font-black tracking-tight leading-none ${textClasses[size].title}`}>MOTOFAX</div>
          <div className={`text-red-500 font-bold tracking-widest uppercase leading-none mt-1 ${textClasses[size].subtitle}`}>Vehicle History</div>
        </div>
      )}
    </div>
  )
}
