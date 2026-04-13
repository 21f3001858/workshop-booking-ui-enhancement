import { Link } from 'react-router-dom';
import { ExternalLink, Mail } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer__inner">
        <div className="footer__left">
          <p className="footer__brand">FOSSEE Workshops</p>
          <p className="footer__copy">
            Built at IIT Bombay &middot; Promoting open source across India
          </p>
        </div>

        <div className="footer__nav">
          <Link to="/">Home</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/propose">Propose</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>

        <div className="footer__social">
          <a href="https://github.com/FOSSEE" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <ExternalLink size={18} />
          </a>
          <a href="mailto:pythonsupport@fossee.in" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="wrap">
        <p className="footer__bottom">
          &copy; 2026 FOSSEE, IIT Bombay. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
