import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Reveal from '../components/Reveal'
import { services } from '../data/services'

export default function ServicesPage() {
  return (
    <div className="bg-white pt-24">
      {/* Page header */}
      <section className="py-16 lg:py-24 bg-steel-50 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div className="relative section-padding max-w-7xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-5">
              <span className="text-primary-700 text-sm font-600 tracking-wide">What We Do</span>
            </div>
            <h1 className="font-display font-700 text-steel-900 text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5 max-w-3xl">
              Our Services
            </h1>
            <p className="text-steel-500 text-lg leading-relaxed max-w-2xl">
              From initial feasibility studies to final handover, DT Pathway provides the full
              spectrum of engineering and infrastructure capabilities. Explore our services to
              find the right expertise for your project.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 lg:py-28">
        <div className="section-padding max-w-7xl mx-auto space-y-20">
          {services.map((service, i) => {
            const Icon = service.icon
            const reversed = i % 2 === 1
            return (
              <Reveal key={service.slug} direction={reversed ? 'left' : 'right'} distance={40}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <div className="relative image-zoom rounded-2xl overflow-hidden shadow-xl">
                    <img src={service.image} alt={service.title} className="w-full h-[360px] object-cover" />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl w-14 h-14 flex items-center justify-center shadow-lg">
                      <Icon size={26} className="text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-display font-700 text-2xl sm:text-3xl text-steel-900 mb-2">
                      {service.title}
                    </h2>
                    <p className="text-accent-600 font-600 text-sm mb-4">{service.tagline}</p>
                    <p className="text-steel-500 leading-relaxed mb-6">{service.longDescription}</p>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-steel-700">
                          <Check size={16} className="text-accent-500 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/services/${service.slug}`}
                      className="group inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-600 px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
                    >
                      Learn More
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>
    </div>
  )
}
