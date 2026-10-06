import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { navLinks } from '../data/site'

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="section-padding max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/DT_logo.png"
            alt="DT Pathway logo"
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span
            className={`font-display font-700 text-lg tracking-tight transition-colors ${
              scrolled || !isHome ? 'text-primary-900' : 'text-white'
            }`}
          >
            DT Pathway
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = location.pathname.startsWith(link.path)
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`font-500 transition-colors duration-200 text-sm tracking-wide relative group ${
                    scrolled || !isHome
                      ? active
                        ? 'text-primary-600'
                        : 'text-steel-600 hover:text-primary-600'
                      : active
                        ? 'text-accent-400'
                        : 'text-steel-200 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-accent-400 transition-all duration-300 group-hover:w-full ${
                      active ? 'w-full' : 'w-0'
                    }`}
                  />
                </Link>
              </li>
            )
          })}
          <li>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-600 text-sm px-5 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
            >
              Get a Quote
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </li>
        </ul>

        <button
          className={`md:hidden p-2 ${scrolled || !isHome ? 'text-primary-900' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-steel-200 shadow-lg">
          <ul className="section-padding py-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="block text-steel-700 hover:text-primary-600 font-500 transition-colors text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="block bg-accent-500 hover:bg-accent-600 text-white font-600 text-center px-5 py-3 rounded-lg transition-colors"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
