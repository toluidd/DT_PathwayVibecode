import type { ReactNode } from 'react'
import { useScrollReveal } from '../hooks/useAnimations'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
}

const directionTransform: Record<string, string> = {
  up: 'translateY(40px)',
  down: 'translateY(-40px)',
  left: 'translateX(40px)',
  right: 'translateX(-40px)',
  none: 'none',
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance,
}: RevealProps) {
  const { ref, visible } = useScrollReveal()

  const transform = distance
    ? direction === 'up'
      ? `translateY(${distance}px)`
      : direction === 'down'
        ? `translateY(-${distance}px)`
        : direction === 'left'
          ? `translateX(${distance}px)`
          : direction === 'right'
            ? `translateX(-${distance}px)`
            : 'none'
    : directionTransform[direction]

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : transform,
        transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
