import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
import Reveal from '../components/Reveal'
import KenBurnsSlideshow from '../components/KenBurnsSlideshow'
import { getService, services } from '../data/services'

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getService(slug) : undefined

  if (!service) return <Navigate to="/services" replace />

  const Icon = service.icon
  const others = services.filter((s) => s.slug !== service.slug)

  return (
    <div className="bg-white pt-24">
      {/* Hero with image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <KenBurnsSlideshow images={[service.image]} className="absolute inset-0" alt={service.title} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-950/70 to-transparent" />
        <div className="relative z-10 section-padding max-w-7xl mx-auto h-full flex items-end pb-12">
          <Reveal direction="up">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <Icon size={26} className="text-white" />
              </div>
              <Link to="/services" className="text-steel-300 hover:text-white text-sm flex items-center gap-1 transition-colors">
                <ArrowLeft size={14} /> All Services
              </Link>
            </div>
            <h1 className="font-display font-800 text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-2">
              {service.title}
            </h1>
            <p className="text-accent-300 font-500 text-lg">{service.tagline}</p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="section-padding max-w-4xl mx-auto">
          <Reveal>
            <p className="text-steel-600 text-lg leading-relaxed mb-12">{service.longDescription}</p>

            <h2 className="font-display font-700 text-2xl text-steel-900 mb-6">Key Capabilities</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 p-4 bg-steel-50 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-accent-100 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-accent-600" />
                  </div>
                  <span className="text-steel-700 text-sm font-500 pt-1">{feature}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Gallery */}
          <Reveal delay={100}>
            <h2 className="font-display font-700 text-2xl text-steel-900 mb-6">Project Gallery</h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              {service.gallery.map((img, i) => (
                <div key={i} className="image-zoom rounded-xl overflow-hidden shadow-md h-48">
                  <img src={img} alt={`${service.title} ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={150}>
            <div className="bg-primary-950 rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 blueprint-grid opacity-15" />
              <div className="relative">
                <h3 className="font-display font-700 text-white text-xl mb-3">
                  Need this expertise for your project?
                </h3>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-600 px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
                >
                  Get a Quote
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 bg-steel-50">
        <div className="section-padding max-w-7xl mx-auto">
          <h2 className="font-display font-700 text-xl text-steel-900 mb-8">Other Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.slice(0, 3).map((s) => {
              const OtherIcon = s.icon
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group flex items-center gap-4 bg-white border border-steel-200 rounded-xl p-5 card-hover"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-50 group-hover:bg-primary-500 flex items-center justify-center transition-colors flex-shrink-0">
                    <OtherIcon size={22} className="text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="font-600 text-steel-900 text-sm group-hover:text-primary-600 transition-colors">
                      {s.title}
                    </div>
                    <div className="text-steel-400 text-xs mt-0.5">{s.tagline}</div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
