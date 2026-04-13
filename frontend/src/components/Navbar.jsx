import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, User } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [loc.pathname]);

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Dashboard', to: '/dashboard' },
    { label: 'Workshops', to: '/workshops' },
    { label: 'Propose', to: '/propose' },
  ];

  return (
    <>
      <div className={`topnav-wrapper ${scrolled ? 'topnav-wrapper--scrolled' : ''}`}>
        <nav ref={navRef} className="topnav">
          <div className="topnav__inner">
            <Link to="/" className="topnav__brand">
              <Terminal size={22} strokeWidth={2.5} />
              <span>FOSSEE</span>
            </Link>

            <ul className="topnav__links">
              {links.map(l => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={loc.pathname === l.to ? 'is-active' : ''}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="topnav__right">
              <Link to="/auth" className="btn btn-fill" style={{padding: '8px 18px', fontSize: '0.85rem', borderRadius: '100px'}}>
                <User size={15} /> Login
              </Link>
            </div>

            <button
              className="topnav__burger"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      <div className={`topnav__mobile ${menuOpen ? 'is-open' : ''}`}>
        {links.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={loc.pathname === l.to ? 'is-active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <Link
          to="/auth"
          className="btn btn-fill"
          style={{marginTop: 8, textAlign: 'center'}}
          onClick={() => setMenuOpen(false)}
        >
          Login
        </Link>
      </div>
    </>
  );
}

export default Navbar;
