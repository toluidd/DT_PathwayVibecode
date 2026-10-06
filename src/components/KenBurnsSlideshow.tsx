import { useEffect, useState } from 'react'

interface KenBurnsSlideshowProps {
  images: string[]
  interval?: number
  className?: string
  alt?: string
}

export default function KenBurnsSlideshow({
  images,
  interval = 5000,
  className = '',
  alt = 'Infrastructure project',
}: KenBurnsSlideshowProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1500"
          style={{
            opacity: i === current ? 1 : 0,
          }}
        >
          <img
            src={src}
            alt={`${alt} ${i + 1}`}
            className="w-full h-full object-cover"
            style={{
              animation: i === current ? 'kenBurns 8s ease-out forwards' : 'none',
            }}
          />
        </div>
      ))}
    </div>
  )
}
