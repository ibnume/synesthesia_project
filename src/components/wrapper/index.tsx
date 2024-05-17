'use client'

import { LenisOptions, ReactLenis } from '@/lib/lenis'
import { cn } from '@/lib/utils'
import { useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Header from '../header'
import Footer from '../footer'

interface WrapperProps {
  children: React.ReactNode
  options?: LenisOptions
  className?: string
}

export default function Wrapper({
  children,
  options,
  className,
}: WrapperProps) {
  const [isPresence, setIsPresence] = useState(false)
  const isReduceMotion = useReducedMotion()
  const isMounted = !isReduceMotion && isPresence

  useEffect(() => {
    setIsPresence(true)
  }, [])

  return (
    <>
      {isMounted && (
        <ReactLenis
          root
          options={
            options || {
              duration: 1.35,
              lerp: 0.0875,
              smoothWheel: true,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            }
          }
        />
      )}
      <Header />
      <main className={cn('min-h-screen w-full', className)}>{children}</main>
      <Footer />
    </>
  )
}
