type LogoProps = {
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
  textClassName?: string
}

const sizeClasses = {
  sm: 'w-10 h-10',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
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
      <div className={`${sizeClasses[size]} bg-red-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(220,20,60,0.3)]`}>
        <svg viewBox="0 0 64 64" className="w-3/4 h-3/4" role="img" aria-label="MotoFax logo mark">
          <path
            d="M8 52V12h12l12 18 12-18h12v40H44V30L32 48 20 30v22H8Z"
            fill="white"
          />
        </svg>
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
