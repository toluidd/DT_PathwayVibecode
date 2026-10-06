import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, MapPin, ArrowUpRight } from 'lucide-react'
import KenBurnsSlideshow from '../components/KenBurnsSlideshow'
import Counter from '../components/Counter'
import Reveal from '../components/Reveal'
import { heroSlideshow, heroStats } from '../data/site'
import { services } from '../data/services'
import { projects } from '../data/projects'

const aboutImage = 'https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&w=1600'
const secondaryImage = 'https://images.pexels.com/photos/6416200/pexels-photo-6416200.jpeg?auto=compress&cs=tinysrgb&w=940'

export default function Home() {
  return (
    <div className="bg-white">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-primary-950">
        <KenBurnsSlideshow images={heroSlideshow} interval={5000} className="absolute inset-0" alt="Infrastructure project" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/75 to-primary-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-transparent" />
        <div className="absolute inset-0 blueprint-grid opacity-20" />

        <div className="relative z-10 section-padding max-w-7xl mx-auto w-full pt-32 pb-20">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 bg-accent-500/15 border border-accent-500/30 rounded-full px-4 py-2 mb-6"
              style={{ animation: 'fadeUp 0.6s ease-out forwards' }}
            >
              <span className="w-2 h-2 rounded-full bg-accent-400 pulse-glow" />
              <span className="text-accent-300 text-sm font-500 tracking-wide">
                Engineering & Infrastructure Solutions
              </span>
            </div>

            <h1
              className="font-display font-800 text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6"
              style={{ animation: 'fadeUp 0.7s ease-out 0.15s forwards', opacity: 0 }}
            >
              Building the
              <span className="block text-accent-400">Pathway Forward</span>
            </h1>

            <p
              className="text-steel-200 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl"
              style={{ animation: 'fadeUp 0.7s ease-out 0.3s forwards', opacity: 0 }}
            >
              From complex infrastructure projects to precision engineering, DT Pathway
              delivers excellence from concept to completion. We transform ambitious visions
              into resilient structures that stand the test of time.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ animation: 'fadeUp 0.7s ease-out 0.45s forwards', opacity: 0 }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-600 px-7 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Start Your Project
                <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-600 px-7 py-3.5 rounded-lg transition-all duration-200 border border-white/20"
              >
                Explore Services
              </Link>
            </div>

            <div
              className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10"
              style={{ animation: 'fadeUp 0.7s ease-out 0.6s forwards', opacity: 0 }}
            >
              {heroStats.map((stat) => (
                <Counter key={stat.label} target={stat.value} suffix={stat.suffix} label={stat.label} />
              ))}
            </div>
          </div>
        </div>

        <a
          href="#services-preview"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </a>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section id="services-preview" className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />

        <div className="relative section-padding max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-5">
              <span className="text-primary-700 text-sm font-600 tracking-wide">Our Services</span>
            </div>
            <h2 className="font-display font-700 text-steel-900 text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
              Comprehensive Engineering,
              <span className="gradient-text"> End-to-End Delivery</span>
            </h2>
            <p className="text-steel-500 text-lg leading-relaxed">
              From initial feasibility studies to final handover, we provide the full spectrum
              of engineering and infrastructure capabilities your project demands.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <Reveal key={service.slug} delay={i * 100}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="group block bg-white border border-steel-200 rounded-2xl p-8 card-hover hover:border-primary-300 h-full"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-50 group-hover:bg-primary-500 transition-colors duration-300 mb-6">
                      <Icon size={26} className="text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-display font-600 text-xl text-steel-900 mb-3">{service.title}</h3>
                    <p className="text-steel-500 text-sm leading-relaxed mb-5">{service.description}</p>
                    <div className="inline-flex items-center gap-1.5 text-primary-600 font-600 text-sm group-hover:gap-3 transition-all duration-200">
                      Learn More <ArrowRight size={16} />
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="py-24 lg:py-32 bg-steel-50">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-5">
                <span className="text-primary-700 text-sm font-600 tracking-wide">Selected Work</span>
              </div>
              <h2 className="font-display font-700 text-steel-900 text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Projects That
                <span className="gradient-text"> Define Excellence</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 text-primary-600 font-600 text-sm hover:gap-3 transition-all"
              >
                View All Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 120}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="group block relative overflow-hidden rounded-2xl bg-white border border-steel-200 card-hover"
                >
                  <div className="relative h-64 image-zoom">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent-500 text-white text-xs font-600 px-3 py-1.5 rounded-full shadow-md">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                      <div className="font-display font-700 text-primary-800 text-lg leading-tight">
                        {project.stats[0].value}
                      </div>
                      <div className="text-steel-500 text-xs">{project.stats[0].label}</div>
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-2 text-steel-400 text-sm mb-3">
                      <MapPin size={15} />
                      {project.location} · {project.year}
                    </div>
                    <h3 className="font-display font-600 text-xl text-steel-900 mb-3 group-hover:text-primary-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-steel-500 text-sm leading-relaxed">{project.description}</p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-primary-600 font-600 text-sm group-hover:gap-3 transition-all">
                      View Project <ArrowUpRight size={16} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="right" distance={50}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl image-zoom">
                  <img src={aboutImage} alt="Engineering team" className="w-full h-[420px] object-cover" />
                </div>
                <div className="absolute -bottom-8 -right-4 lg:-right-8 w-48 h-48 rounded-xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block image-zoom">
                  <img src={secondaryImage} alt="Infrastructure" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-6 -left-4 lg:-left-8 bg-primary-900 text-white rounded-xl px-6 py-5 shadow-xl">
                  <div className="font-display font-800 text-3xl text-accent-400">15+</div>
                  <div className="text-steel-300 text-sm mt-1">Years of<br />Engineering</div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" distance={50} delay={100}>
              <div>
                <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-5">
                  <span className="text-primary-700 text-sm font-600 tracking-wide">About DT Pathway</span>
                </div>
                <h2 className="font-display font-700 text-steel-900 text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                  Engineering Excellence,
                  <span className="gradient-text"> Built on Trust</span>
                </h2>
                <p className="text-steel-500 text-lg leading-relaxed mb-6">
                  DT Pathway was founded with a clear mission: to deliver engineering and
                  infrastructure projects that meet the highest standards of quality, safety,
                  and value. Our team brings together decades of experience across transportation,
                  structural, and civil engineering disciplines.
                </p>
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-600 px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
                >
                  Learn About Us
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-primary-950 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-15" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="relative section-padding max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display font-700 text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
              Ready to Start Your
              <span className="block text-accent-400">Next Project?</span>
            </h2>
            <p className="text-steel-300 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Let's discuss how DT Pathway can help you deliver your engineering and
              infrastructure goals with confidence.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-600 px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get in Touch
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
