import { Link } from 'react-router-dom'
import { CheckCircle2, Target, Eye, Users, ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import KenBurnsSlideshow from '../components/KenBurnsSlideshow'

const aboutImages = [
  'https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/8961260/pexels-photo-8961260.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/7937659/pexels-photo-7937659.jpeg?auto=compress&cs=tinysrgb&w=1600',
]

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'Every detail matters. We engineer with exacting standards that leave nothing to chance.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Clear communication, honest reporting, and open collaboration from day one to handover.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We work alongside our clients as trusted partners, invested in the success of every project.',
  },
]

const commitments = [
  'Fully qualified and accredited engineering team',
  'ISO-certified quality management systems',
  'Proven delivery on complex, multi-phase projects',
  'Commitment to safety and sustainability',
  'Strong track record with government and private clients',
  'Innovative approaches to complex engineering challenges',
]

export default function AboutPage() {
  return (
    <div className="bg-white pt-24">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] overflow-hidden">
        <KenBurnsSlideshow images={aboutImages} interval={5000} className="absolute inset-0" alt="DT Pathway team" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-950/60 to-transparent" />
        <div className="relative z-10 section-padding max-w-7xl mx-auto h-full flex items-end pb-12">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 bg-accent-500/15 border border-accent-500/30 rounded-full px-4 py-1.5 mb-4">
              <span className="text-accent-300 text-sm font-600 tracking-wide">Our Story</span>
            </div>
            <h1 className="font-display font-800 text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
              About DT Pathway
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="section-padding max-w-4xl mx-auto">
          <Reveal>
            <h2 className="font-display font-700 text-2xl sm:text-3xl text-steel-900 mb-6">
              Engineering Excellence, Built on Trust
            </h2>
            <p className="text-steel-600 text-lg leading-relaxed mb-6">
              DT Pathway was founded with a clear mission: to deliver engineering and infrastructure
              projects that meet the highest standards of quality, safety, and value. Our team brings
              together decades of experience across transportation, structural, and civil engineering
              disciplines.
            </p>
            <p className="text-steel-600 leading-relaxed mb-6">
              We believe that great infrastructure is more than concrete and steel — it's the pathways
              that connect communities, enable commerce, and build a stronger future. Every project we
              undertake is driven by precision, integrity, and a commitment to lasting results.
            </p>
            <p className="text-steel-600 leading-relaxed mb-12">
              From small-scale civil works to major infrastructure programmes, we approach each project
              with the same dedication to excellence. Our clients trust us to deliver because we've
              earned that trust project after project, year after year.
            </p>
          </Reveal>

          {/* Image */}
          <Reveal delay={100}>
            <div className="image-zoom rounded-2xl overflow-hidden shadow-xl mb-16 h-[400px]">
              <img
                src="https://images.pexels.com/photos/7937659/pexels-photo-7937659.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="DT Pathway engineering team"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          {/* Commitments */}
          <Reveal>
            <h2 className="font-display font-700 text-2xl text-steel-900 mb-6">What Sets Us Apart</h2>
            <ul className="space-y-4 mb-16">
              {commitments.map((item) => (
                <li key={item} className="flex items-start gap-3 text-steel-700">
                  <CheckCircle2 size={22} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-steel-50">
        <div className="section-padding max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="font-display font-700 text-2xl sm:text-3xl text-steel-900 mb-4">Our Core Values</h2>
            <p className="text-steel-500 max-w-xl mx-auto">The principles that guide every decision we make.</p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <Reveal key={value.title} delay={i * 100}>
                  <div className="bg-white rounded-2xl p-8 border border-steel-200 card-hover text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-50 mb-5">
                      <Icon size={26} className="text-primary-600" />
                    </div>
                    <h3 className="font-display font-600 text-lg text-steel-900 mb-3">{value.title}</h3>
                    <p className="text-steel-500 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-950 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-15" />
        <div className="relative section-padding max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display font-700 text-white text-2xl sm:text-3xl mb-5">
              Want to work with us?
            </h2>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-600 px-7 py-3.5 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get in Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
