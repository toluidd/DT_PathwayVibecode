export interface NavItem {
  label: string
  path: string
}

export const navLinks: NavItem[] = [
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const contactDetails = {
  phone: '+234 701 328 3647',
  phoneHref: 'tel:+2347013283647',
  emails: [
    { label: 'General Enquiries', value: 'info@dt-pathway.com', href: 'mailto:info@dt-pathway.com' },
    { label: 'Direct Contact', value: 'sunmolaomotola@yahoo.com', href: 'mailto:sunmolaomotola@yahoo.com' },
  ],
  address: '71 Engineering Quarter, London, EC1A 1BB',
}

export const heroStats = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 200, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
]

export const heroSlideshow = [
  'https://images.pexels.com/photos/11701517/pexels-photo-11701517.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/8860492/pexels-photo-8860492.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/8960939/pexels-photo-8960939.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/1188553/pexels-photo-1188553.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/5504658/pexels-photo-5504658.jpeg?auto=compress&cs=tinysrgb&w=1920',
]
