import Image from 'next/image'

type LogoProps = {
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
  textClassName?: string
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-20 h-20',
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
      <Image
        src="/motofax-logo.png"
        alt="MotoFax Logo"
        width={80}
        height={80}
        className={`${sizeClasses[size]} object-contain`}
        priority
      />
      {showText && (
        <div className={textClassName}>
          <div className={`text-white font-black tracking-tight leading-none ${textClasses[size].title}`}>MOTOFAX</div>
          <div className={`text-red-500 font-bold tracking-widest uppercase leading-none mt-1 ${textClasses[size].subtitle}`}>Vehicle History</div>
        </div>
      )}
    </div>
  )
}
