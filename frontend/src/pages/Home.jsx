import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Layers, BarChart3, Sparkles, Quote, Zap, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { stats, testimonials } from '../data/mockData';
import SEO from '../components/SEO';
import './Home.css';

function Counter({ end, suffix = '', duration = 1800 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const ran = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !ran.current) {
        ran.current = true;
        let n = 0;
        const inc = end / (duration / 16);
        const go = () => {
          n += inc;
          if (n >= end) { setVal(end); return; }
          setVal(Math.floor(n));
          requestAnimationFrame(go);
        };
        requestAnimationFrame(go);
      }
    }, { threshold: 0.25 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }
});

function Home() {
  return (
    <div className="home">
      <SEO 
        title="Welcome" 
        description="FOSSEE Workshop Portal - Empowering students with open source software training and certification." 
      />
      <section className="hero">
        <div className="wrap hero__grid">
          <motion.div className="hero__left" {...fadeUp()}>
            <span className="pill pill-indigo hero__pill">
              <Sparkles size={11} /> Backed by IIT Bombay
            </span>

            <h1 className="hero__h1">
              Open source tools
              <br />
              for <span className="gradient-text">every classroom</span>
            </h1>

            <p className="hero__sub">
              FOSSEE workshops bring free, expert-led training on Python, Scilab,
              R, and more to colleges across India. Over 3,500 students trained
              and counting.
            </p>

            <div className="hero__btns">
              <Link to="/workshops" className="btn btn-fill">
                Browse Workshops <ArrowRight size={15} />
              </Link>
              <Link to="/propose" className="btn btn-ghost">
                Propose a Date
              </Link>
            </div>

            <div className="hero__trust">
              <div className="hero__trust-avatars">
                {['P', 'A', 'S', 'R'].map((c, i) => (
                  <div key={i} className="hero__trust-av" style={{ zIndex: 4 - i }}>
                    {c}
                  </div>
                ))}
              </div>
              <p><strong>42 instructors</strong> across 87 colleges</p>
            </div>
          </motion.div>

          <motion.div className="hero__right" {...fadeUp(0.15)}>
            <div className="hero__orb hero__orb--a" />
            <div className="hero__orb hero__orb--b" />
            <div className="hero__orb hero__orb--c" />

            <div className="hero__float-card card">
              <div className="hero__fc-top">
                <Zap size={18} className="hero__fc-icon" />
                <span className="pill pill-emerald">Live</span>
              </div>
              <p className="hero__fc-big gradient-text">154+</p>
              <p className="hero__fc-lab">Workshops completed</p>
            </div>

            <div className="hero__float-mini card">
              <GraduationCap size={16} />
              <span>3,500+ students trained</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="wrap stats-strip__row">
          {[
            { label: 'Workshops', val: stats.workshops, suf: '+' },
            { label: 'Instructors', val: stats.instructors, suf: '' },
            { label: 'Students', val: stats.participants, suf: '+' },
            { label: 'Colleges', val: stats.colleges, suf: '+' },
          ].map((s, i) => (
            <motion.div key={s.label} className="stats-strip__item" {...fadeUp(i * 0.08)}>
              <p className="stats-strip__num">
                <Counter end={s.val} suffix={s.suf} />
              </p>
              <p className="stats-strip__lbl">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="why-us">
        <div className="wrap">
          <h2 className="section-heading">Built for real classrooms</h2>
          <div className="why-us__grid">
            {[
              {
                icon: BookOpen,
                title: 'Hands-on from day one',
                text: 'No death by slides. Students write code, break things, and learn by doing.',
                color: 'var(--accent)'
              },
              {
                icon: Layers,
                title: 'Zero-friction booking',
                text: 'Propose dates, pick workshop types, get confirmation. No email ping-pong.',
                color: 'var(--teal)'
              },
              {
                icon: BarChart3,
                title: 'Track everything',
                text: 'Pan-India coverage maps, attendance trends, and instructor stats — all live.',
                color: 'var(--rose)'
              }
            ].map((f, i) => (
              <motion.div key={f.title} className="card shimmer-border why-us__card" {...fadeUp(i * 0.1)}>
                <div className="why-us__icon" style={{ color: f.color, background: `${f.color}10` }}>
                  <f.icon size={20} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="voices">
        <div className="wrap">
          <h2 className="section-heading">Voices from the ground</h2>
          <div className="voices__grid">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} className="card voices__card" {...fadeUp(i * 0.08)}>
                <Quote size={18} className="voices__q" />
                <p className="voices__txt">{t.text}</p>
                <div className="voices__who">
                  <div className="voices__av">{t.name.charAt(0)}</div>
                  <div>
                    <p className="voices__name">{t.name}</p>
                    <p className="voices__role">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <motion.div className="final-cta__box" {...fadeUp()}>
            <div className="final-cta__glow" />
            <h2>Bring FOSSEE to your campus</h2>
            <p>Submitting a proposal takes about 3 minutes. Our team handles everything from there.</p>
            <Link to="/propose" className="btn btn-fill" style={{ marginTop: 20 }}>
              Submit a Proposal <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
