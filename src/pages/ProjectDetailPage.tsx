import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, MapPin, Calendar, Check } from 'lucide-react'
import Reveal from '../components/Reveal'
import KenBurnsSlideshow from '../components/KenBurnsSlideshow'
import { getProject, projects } from '../data/projects'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProject(slug) : undefined

  if (!project) return <Navigate to="/projects" replace />

  const others = projects.filter((p) => p.slug !== project.slug)

  return (
    <div className="bg-white pt-24">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <KenBurnsSlideshow images={[project.image]} className="absolute inset-0" alt={project.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/50 to-transparent" />
        <div className="relative z-10 section-padding max-w-7xl mx-auto h-full flex items-end pb-12">
          <Reveal direction="up">
            <Link to="/projects" className="text-steel-300 hover:text-white text-sm flex items-center gap-1 mb-4 transition-colors">
              <ArrowLeft size={14} /> All Projects
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-accent-500 text-white text-xs font-600 px-3 py-1.5 rounded-full">
                {project.category}
              </span>
              <span className="text-steel-300 text-sm flex items-center gap-1">
                <MapPin size={14} /> {project.location}
              </span>
              <span className="text-steel-300 text-sm flex items-center gap-1">
                <Calendar size={14} /> {project.year}
              </span>
            </div>
            <h1 className="font-display font-800 text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
              {project.title}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary-900 py-8">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {project.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="text-center lg:text-left">
                  <div className="font-display font-800 text-2xl lg:text-3xl text-accent-400">{stat.value}</div>
                  <div className="text-steel-300 text-sm mt-1">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="section-padding max-w-4xl mx-auto">
          <Reveal>
            <h2 className="font-display font-700 text-2xl text-steel-900 mb-5">Project Overview</h2>
            <p className="text-steel-600 text-lg leading-relaxed mb-12">{project.longDescription}</p>

            <h2 className="font-display font-700 text-2xl text-steel-900 mb-6">Scope of Work</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-12">
              {project.scope.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 bg-steel-50 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-accent-100 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-accent-600" />
                  </div>
                  <span className="text-steel-700 text-sm font-500 pt-1">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Gallery */}
          <Reveal delay={100}>
            <h2 className="font-display font-700 text-2xl text-steel-900 mb-6">Gallery</h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              {project.gallery.map((img, i) => (
                <div key={i} className="image-zoom rounded-xl overflow-hidden shadow-md h-48">
                  <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-full object-cover" />
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
                  Have a similar project in mind?
                </h3>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-600 px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
                >
                  Discuss Your Project
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other projects */}
      <section className="py-16 bg-steel-50">
        <div className="section-padding max-w-7xl mx-auto">
          <h2 className="font-display font-700 text-xl text-steel-900 mb-8">Other Projects</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {others.slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="group block bg-white border border-steel-200 rounded-xl overflow-hidden card-hover"
              >
                <div className="image-zoom h-32">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-xs text-accent-600 font-600 mb-1">{p.category}</div>
                  <div className="font-600 text-steel-900 text-sm group-hover:text-primary-600 transition-colors">
                    {p.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
