import { useScrollReveal, useCountUp } from '../hooks/useAnimations'

interface CounterProps {
  target: number
  suffix?: string
  label: string
}

export default function Counter({ target, suffix = '', label }: CounterProps) {
  const { ref, visible } = useScrollReveal({ threshold: 0.3 })
  const count = useCountUp(target, 2000, visible)

  return (
    <div ref={ref}>
      <div className="font-display font-700 text-3xl lg:text-4xl text-white">
        {count}
        {suffix}
      </div>
      <div className="text-steel-400 text-sm mt-1 tracking-wide">{label}</div>
    </div>
  )
}
