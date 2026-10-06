import { Link } from 'react-router-dom'
import { MapPin, ArrowUpRight, Calendar } from 'lucide-react'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  return (
    <div className="bg-white pt-24">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-steel-50 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div className="relative section-padding max-w-7xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-5">
              <span className="text-primary-700 text-sm font-600 tracking-wide">Our Work</span>
            </div>
            <h1 className="font-display font-700 text-steel-900 text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5 max-w-3xl">
              Projects That Define Excellence
            </h1>
            <p className="text-steel-500 text-lg leading-relaxed max-w-2xl">
              A track record of delivering complex engineering projects across transportation,
              structural, and civil infrastructure. Explore our selected work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-20 lg:py-28">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 100}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="group block bg-white border border-steel-200 rounded-2xl overflow-hidden card-hover"
                >
                  <div className="relative h-72 image-zoom">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent-500 text-white text-xs font-600 px-3 py-1.5 rounded-full shadow-md">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-4 text-steel-400 text-sm mb-3">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} /> {project.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} /> {project.year}
                      </span>
                    </div>
                    <h2 className="font-display font-600 text-xl text-steel-900 mb-3 group-hover:text-primary-700 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-steel-500 text-sm leading-relaxed mb-5">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4">
                        {project.stats.slice(0, 3).map((stat) => (
                          <div key={stat.label}>
                            <div className="font-display font-700 text-primary-700 text-sm">{stat.value}</div>
                            <div className="text-steel-400 text-xs">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-1 text-primary-600 font-600 text-sm group-hover:gap-2 transition-all">
                        View <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
