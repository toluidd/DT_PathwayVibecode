export interface ProjectData {
  slug: string
  title: string
  category: string
  location: string
  year: string
  description: string
  longDescription: string
  image: string
  gallery: string[]
  stats: { label: string; value: string }[]
  scope: string[]
}

export const projects: ProjectData[] = [
  {
    slug: 'regional-highway-expansion',
    title: 'Regional Highway Expansion',
    category: 'Transportation',
    location: 'Northwest Region',
    year: '2023',
    description:
      'A 45km dual-carriageway expansion including 3 new interchanges and 2 river crossings, delivered 3 months ahead of schedule.',
    longDescription:
      'This major infrastructure project expanded a critical regional highway from single to dual carriageway over 45 kilometres. The scope included 3 new grade-separated interchanges, 2 river bridge crossings, comprehensive drainage systems, and intelligent traffic management infrastructure. Despite challenging terrain and weather conditions, the project was delivered 3 months ahead of schedule and within budget.',
    image: 'https://images.pexels.com/photos/8860492/pexels-photo-8860492.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/8860492/pexels-photo-8860492.jpeg?auto=compress&cs=tinysrgb&w=940',
      'https://images.pexels.com/photos/8913514/pexels-photo-8913514.jpeg?auto=compress&cs=tinysrgb&w=940',
      'https://images.pexels.com/photos/6416200/pexels-photo-6416200.jpeg?auto=compress&cs=tinysrgb&w=940',
    ],
    stats: [
      { label: 'Roadway', value: '45 km' },
      { label: 'Interchanges', value: '3' },
      { label: 'Bridges', value: '2' },
      { label: 'Duration', value: '28 months' },
    ],
    scope: ['Highway design', 'Bridge construction', 'Drainage systems', 'Traffic management', 'Earthworks'],
  },
  {
    slug: 'urban-bridge-reconstruction',
    title: 'Urban Bridge Reconstruction',
    category: 'Bridges',
    location: 'City Centre',
    year: '2022',
    description:
      'Complete reconstruction of a critical urban bridge with minimal disruption to traffic, featuring advanced seismic isolation systems.',
    longDescription:
      'The complete reconstruction of a 280-metre urban bridge was one of our most complex projects. The existing structure had reached the end of its design life and required full replacement while maintaining traffic flow on a major arterial route below. We employed phased construction with temporary bypass structures and advanced seismic isolation bearings to deliver a bridge designed for a 100-year lifespan.',
    image: 'https://images.pexels.com/photos/8960939/pexels-photo-8960939.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/8960939/pexels-photo-8960939.jpeg?auto=compress&cs=tinysrgb&w=940',
      'https://images.pexels.com/photos/39855722/pexels-photo-39855722.jpeg?auto=compress&cs=tinysrgb&w=940',
      'https://images.pexels.com/photos/8961066/pexels-photo-8961066.jpeg?auto=compress&cs=tinysrgb&w=940',
    ],
    stats: [
      { label: 'Span', value: '280 m' },
      { label: 'Lifespan', value: '100 years' },
      { label: 'Lanes', value: '6' },
      { label: 'Duration', value: '22 months' },
    ],
    scope: ['Structural design', 'Seismic isolation', 'Phased construction', 'Traffic management', 'Demolition'],
  },
  {
    slug: 'industrial-facility-development',
    title: 'Industrial Facility Development',
    category: 'Structural',
    location: 'Industrial Zone',
    year: '2023',
    description:
      'Design and construction of a 12,000m² manufacturing facility with integrated utilities, drainage, and logistics infrastructure.',
    longDescription:
      'We delivered a turnkey 12,000-square-metre manufacturing facility for a major industrial client. The project encompassed structural design, foundation engineering, integrated utility systems, heavy-duty flooring, logistics yard construction, and comprehensive drainage. The facility was designed for maximum operational efficiency and future expansion flexibility.',
    image: 'https://images.pexels.com/photos/1188553/pexels-photo-1188553.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/1188553/pexels-photo-1188553.jpeg?auto=compress&cs=tinysrgb&w=940',
      'https://images.pexels.com/photos/25461690/pexels-photo-25461690.jpeg?auto=compress&cs=tinysrgb&w=940',
      'https://images.pexels.com/photos/5511065/pexels-photo-5511065.jpeg?auto=compress&cs=tinysrgb&w=940',
    ],
    stats: [
      { label: 'Facility', value: '12,000 m²' },
      { label: 'Utilities', value: 'Integrated' },
      { label: 'Yard', value: '4,500 m²' },
      { label: 'Duration', value: '16 months' },
    ],
    scope: ['Structural design', 'Foundation engineering', 'Utility design', 'Drainage', 'Logistics yard'],
  },
  {
    slug: 'rural-infrastructure-programme',
    title: 'Rural Infrastructure Programme',
    category: 'Civil',
    location: 'Highlands District',
    year: '2021',
    description:
      'A multi-phase rural development programme delivering roads, water systems, and community infrastructure across 8 villages.',
    longDescription:
      'This transformative programme brought essential infrastructure to 8 rural villages in the highlands. Over 4 phases, we delivered 60 kilometres of all-weather roads, 3 water supply systems, 2 community centres, and a health clinic. The project significantly improved access to services, education, and economic opportunities for over 15,000 residents.',
    image: 'https://images.pexels.com/photos/5504658/pexels-photo-5504658.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/5504658/pexels-photo-5504658.jpeg?auto=compress&cs=tinysrgb&w=940',
      'https://images.pexels.com/photos/38513265/pexels-photo-38513265.jpeg?auto=compress&cs=tinysrgb&w=940',
      'https://images.pexels.com/photos/13775091/pexels-photo-13775091.jpeg?auto=compress&cs=tinysrgb&w=940',
    ],
    stats: [
      { label: 'Villages', value: '8' },
      { label: 'Roads', value: '60 km' },
      { label: 'Residents', value: '15,000+' },
      { label: 'Phases', value: '4' },
    ],
    scope: ['Road construction', 'Water systems', 'Community centres', 'Health clinic', 'Site development'],
  },
]

export function getProject(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug)
}
