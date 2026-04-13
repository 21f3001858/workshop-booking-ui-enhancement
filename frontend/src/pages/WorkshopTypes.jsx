import { useState } from 'react';
import { workshopTypes } from '../data/mockData';
import { Clock, Users, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import './WorkshopTypes.css';

function WorkshopTypes() {
  const [filter, setFilter] = useState('All');
  const allTags = ['All', ...new Set(workshopTypes.flatMap(w => w.tags))];

  const filtered = filter === 'All'
    ? workshopTypes
    : workshopTypes.filter(w => w.tags.includes(filter));

  const levelPill = {
    Beginner: 'pill-teal',
    Intermediate: 'pill-amber',
    Advanced: 'pill-rose'
  };

  return (
    <div className="workshops wrap">
      <SEO 
        title="Find Workshops" 
        description="Browse our catalog of open source software workshops including Python, Django, Data Science, and more." 
      />
      <div className="workshops__hero">
        <span className="pill pill-indigo">Catalog</span>
        <h1>
          Find the right <span className="gradient-text">workshop</span>
        </h1>
        <p>Pick a topic that fits your students. We bring the instructor, material, and hands-on exercises.</p>
      </div>

      <div className="workshops__filters" role="tablist">
        {allTags.map(tag => (
          <button
            key={tag}
            role="tab"
            aria-selected={filter === tag}
            className={`filter-chip ${filter === tag ? 'filter-chip--on' : ''}`}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="workshops__grid">
        {filtered.map((ws, i) => (
          <motion.div
            key={ws.id}
            className="card shimmer-border ws-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ws-card__img-wrap">
              <img src={ws.image} alt={ws.title} loading="lazy" />
              <div className="ws-card__img-overlay" />
              <span className={`pill ws-card__level ${levelPill[ws.level] || 'pill-indigo'}`}>
                {ws.level}
              </span>
            </div>

            <div className="ws-card__content">
              <div className="ws-card__tags">
                {ws.tags.map(t => (
                  <span key={t} className="pill pill-indigo">{t}</span>
                ))}
              </div>

              <h3 className="ws-card__title">{ws.title}</h3>
              <p className="ws-card__desc">{ws.description}</p>

              <div className="ws-card__instructor">
                <div className="ws-card__avatar">{ws.instructor.charAt(0)}</div>
                <span>{ws.instructor}</span>
              </div>

              <div className="ws-card__meta">
                <div className="ws-card__meta-item">
                  <Clock size={13} />
                  <span>{ws.duration}</span>
                </div>
                <div className="ws-card__meta-item">
                  <Users size={13} />
                  <span>{ws.seats} seats</span>
                </div>
                <button className="ws-card__cta">
                  Book <ArrowUpRight size={13} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="workshops__empty">
          <p>Nothing here for "{filter}" yet — try another category.</p>
        </div>
      )}
    </div>
  );
}

export default WorkshopTypes;
