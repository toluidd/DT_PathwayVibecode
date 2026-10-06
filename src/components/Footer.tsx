import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight } from 'lucide-react'
import { contactDetails } from '../data/site'

const footerLinks = {
  Services: [
    { label: 'Structural Engineering', path: '/services/structural-engineering' },
    { label: 'Infrastructure Development', path: '/services/infrastructure-development' },
    { label: 'Project Management', path: '/services/project-management' },
    { label: 'Civil Engineering', path: '/services/civil-engineering' },
    { label: 'Maintenance', path: '/services/infrastructure-maintenance' },
  ],
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-steel-950 text-steel-300">
      <div className="section-padding max-w-7xl mx-auto py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src="/DT_logo.png" alt="DT Pathway" className="h-10 w-auto" />
              <span className="font-display font-700 text-white text-lg">DT Pathway</span>
            </div>
            <p className="text-steel-400 text-sm leading-relaxed max-w-sm mb-6">
              Engineering and infrastructure solutions delivered with precision, integrity,
              and a commitment to building pathways that last.
            </p>
            <div className="space-y-2.5 text-sm">
              {contactDetails.emails.map((email) => (
                <a
                  key={email.href}
                  href={email.href}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-accent-400" />
                  {email.value}
                </a>
              ))}
              <a href={contactDetails.phoneHref} className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={16} className="text-accent-400" />
                {contactDetails.phone}
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent-400 mt-0.5" />
                {contactDetails.address}
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display font-600 text-white text-sm tracking-wide uppercase mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-steel-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-steel-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-steel-500 text-sm">
            © {new Date().getFullYear()} DT Pathway Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-steel-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="text-steel-300" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-steel-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} className="text-steel-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
