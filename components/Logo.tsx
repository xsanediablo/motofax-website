type LogoProps = {
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
  textClassName?: string
}

const markSizes = {
  sm: 'w-12 h-12 text-2xl',
  md: 'w-14 h-14 text-3xl',
  lg: 'w-20 h-20 text-5xl',
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
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`${markSizes[size]} rounded-xl bg-red-600 text-white font-black flex items-center justify-center shadow-[0_0_20px_rgba(220,20,60,0.3)]`}
        aria-label="MotoFax logo mark"
        role="img"
      >
        M
      </div>
      {showText && (
        <div className={textClassName}>
          <div className={`text-white font-black tracking-tight leading-none ${textClasses[size].title}`}>MOTOFAX</div>
          <div className={`text-red-500 font-bold tracking-widest uppercase leading-none mt-1 ${textClasses[size].subtitle}`}>Vehicle History</div>
        </div>
      )}
    </div>
  )
}
