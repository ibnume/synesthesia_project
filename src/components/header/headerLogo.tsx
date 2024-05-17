import { META_TITLE } from '@/constants'
import { useLenis } from '@/lib/lenis'
import { cn } from '@/lib/utils'

export default function HeaderLogo({ className }: { className?: string }) {
  const lenis = useLenis()

  return (
    <button onClick={() => lenis?.scrollTo(0, { duration: 1.25 })} className={cn('font-medium', className)}>
      {META_TITLE}&copy;
    </button>
  )
}
