import { Building2, Route, HardHat, Compass, Wrench, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface ServiceData {
  slug: string
  icon: LucideIcon
  title: string
  tagline: string
  description: string
  longDescription: string
  features: string[]
  image: string
  gallery: string[]
}

export const services: ServiceData[] = [
  {
    slug: 'structural-engineering',
    icon: Building2,
    title: 'Structural Engineering',
    tagline: 'Built to last, engineered to perform',
    description: 'Comprehensive structural design and analysis for buildings, bridges, and industrial facilities.',
    longDescription:
      'Our structural engineering team delivers robust, efficient designs for buildings, bridges, towers, and industrial facilities. We combine advanced computational analysis with decades of practical experience to produce structures that are safe, economical, and elegant. From concept stage through to construction supervision, we ensure every element meets the highest standards of structural integrity.',
    features: [
      'Structural analysis and modelling',
      'Seismic and wind design',
      'Foundation and geotechnical engineering',
      'Load capacity assessment',
      'Construction supervision',
      'Structural condition surveys',
    ],
    image: 'https://images.pexels.com/photos/5511065/pexels-photo-5511065.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/5511065/pexels-photo-5511065.jpeg?auto=compress&cs=tinysrgb&w=940',
      'https://images.pexels.com/photos/29152268/pexels-photo-29152268.jpeg?auto=compress&cs=tinysrgb&w=940',
      'https://images.pexels.com/photos/8960939/pexels-photo-8960939.jpeg?auto=compress&cs=tinysrgb&w=940',
    ],
  },
  {
    slug: 'infrastructure-development',
    icon: Route,
    title: 'Infrastructure Development',
    tagline: 'Connecting communities, driving growth',
    description: 'End-to-end delivery of roads, highways, bridges, and transportation networks.',
    longDescription:
      'We plan, design, and deliver the infrastructure that connects communities and drives economic growth. Our expertise spans roads, highways, bridges, rail systems, and transportation hubs. We work closely with government agencies, developers, and communities to deliver projects that are not only functional but sustainable and future-ready.',
    features: [
      'Road and highway design',
      'Bridge construction and rehabilitation',
      'Drainage and stormwater systems',
      'Traffic management planning',
      'Transportation network optimisation',
      'Feasibility and route studies',
    ],
    image: 'https://images.pexels.com/photos/8860492/pexels-photo-8860492.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/8860492/pexels-photo-8860492.jpeg?auto=compress&cs=tinysrgb&w=940',
      'https://images.pexels.com/photos/6416200/pexels-photo-6416200.jpeg?auto=compress&cs=tinysrgb&w=940',
      'https://images.pexels.com/photos/8913514/pexels-photo-8913514.jpeg?auto=compress&cs=tinysrgb&w=940',
    ],
  },
  {
    slug: 'project-management',
    icon: HardHat,
    title: 'Project Management',
    tagline: 'On time, on budget, every time',
    description: 'Full-lifecycle project management with rigorous quality control and stakeholder coordination.',
    longDescription:
      'Successful projects demand more than engineering expertise — they require disciplined management. Our project management team ensures every phase, from initiation to handover, is delivered on time, within budget, and to specification. We employ industry-best methodologies to manage risk, control costs, and maintain clear communication with all stakeholders.',
    features: [
      'Programme planning and scheduling',
      'Risk management and mitigation',
      'Cost estimation and control',
      'Quality assurance and control',
      'Stakeholder coordination',
      'Contract administration',
    ],
    image: 'https://images.pexels.com/photos/7937659/pexels-photo-7937659.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/7937659/pexels-photo-7937659.jpeg?auto=compress&cs=tinysrgb&w=940',
      'https://images.pexels.com/photos/8961260/pexels-photo-8961260.jpeg?auto=compress&cs=tinysrgb&w=940',
      'https://images.pexels.com/photos/6285155/pexels-photo-6285155.jpeg?auto=compress&cs=tinysrgb&w=940',
    ],
  },
  {
    slug: 'civil-engineering',
    icon: Compass,
    title: 'Civil Engineering',
    tagline: 'Ground-up solutions for complex terrain',
    description: 'Site development, earthworks, utilities, and ground improvement solutions.',
    longDescription:
      'Our civil engineering expertise covers the full range of site development needs — from earthworks and grading to utility design and ground improvement. We tackle complex terrain and urban environments with innovative, practical solutions that respect both the land and the budget.',
    features: [
      'Site assessment and feasibility',
      'Earthworks and grading design',
      'Utility and services design',
      'Ground improvement techniques',
      'Erosion and sediment control',
      'Permitting and regulatory compliance',
    ],
    image: 'https://images.pexels.com/photos/1188553/pexels-photo-1188553.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/1188553/pexels-photo-1188553.jpeg?auto=compress&cs=tinysrgb&w=940',
      'https://images.pexels.com/photos/13775091/pexels-photo-13775091.jpeg?auto=compress&cs=tinysrgb&w=940',
      'https://images.pexels.com/photos/38513265/pexels-photo-38513265.jpeg?auto=compress&cs=tinysrgb&w=940',
    ],
  },
  {
    slug: 'infrastructure-maintenance',
    icon: Wrench,
    title: 'Infrastructure Maintenance',
    tagline: 'Extending the life of critical assets',
    description: 'Proactive maintenance and asset management programmes for critical infrastructure.',
    longDescription:
      'Infrastructure assets represent significant investment. Our maintenance and asset management services help you protect that investment through proactive, data-driven programmes that extend asset lifespan, improve performance, and reduce lifecycle costs. We combine condition assessments with predictive analytics to prioritise maintenance where it matters most.',
    features: [
      'Condition surveys and assessments',
      'Preventive maintenance programmes',
      'Asset management strategies',
      'Repair and rehabilitation design',
      'Lifecycle cost analysis',
      'Performance monitoring',
    ],
    image: 'https://images.pexels.com/photos/8961066/pexels-photo-8961066.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/8961066/pexels-photo-8961066.jpeg?auto=compress&cs=tinysrgb&w=940',
      'https://images.pexels.com/photos/32569690/pexels-photo-32569690.jpeg?auto=compress&cs=tinysrgb&w=940',
      'https://images.pexels.com/photos/39855722/pexels-photo-39855722.jpeg?auto=compress&cs=tinysrgb&w=940',
    ],
  },
  {
    slug: 'compliance-advisory',
    icon: ShieldCheck,
    title: 'Compliance & Advisory',
    tagline: 'Navigate standards with confidence',
    description: 'Regulatory compliance, safety audits, and engineering advisory services.',
    longDescription:
      'Navigating the complex landscape of engineering standards, safety regulations, and environmental requirements can be daunting. Our compliance and advisory team provides the expert guidance you need to meet every obligation with confidence. From safety audits to regulatory submissions, we ensure your project meets all applicable standards.',
    features: [
      'Safety audits and inspections',
      'Regulatory compliance reviews',
      'Technical advisory services',
      'Risk assessment and management',
      'Environmental impact assessments',
      'Code and standards consulting',
    ],
    image: 'https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&w=940',
      'https://images.pexels.com/photos/8961298/pexels-photo-8961298.jpeg?auto=compress&cs=tinysrgb&w=940',
      'https://images.pexels.com/photos/7937659/pexels-photo-7937659.jpeg?auto=compress&cs=tinysrgb&w=940',
    ],
  },
]

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug)
}
