import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { workshopTypes } from '../data/mockData';
import './ProposeWorkshop.css';

function ProposeWorkshop() {
  const [done, setDone] = useState(false);

  const go = (e) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <div className="propose wrap">
      <div className="propose__top">
        <span className="pill pill-indigo">New Proposal</span>
        <h1>Book a workshop</h1>
        <p>Share your institution details and preferred dates. We usually respond within 48 hours.</p>
      </div>

      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div
            key="form"
            className="card propose__card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
          >
            <form onSubmit={go}>
              <div className="propose__2col">
                <div className="field-wrap">
                  <label htmlFor="p-name">Your Name</label>
                  <input type="text" id="p-name" className="field" placeholder="Amit Kumar" required />
                </div>
                <div className="field-wrap">
                  <label htmlFor="p-email">Email</label>
                  <input type="email" id="p-email" className="field" placeholder="amit@college.ac.in" required />
                </div>
              </div>

              <div className="field-wrap">
                <label htmlFor="p-college">College / University</label>
                <input type="text" id="p-college" className="field" placeholder="e.g. NIT Warangal" required />
              </div>

              <div className="propose__2col">
                <div className="field-wrap">
                  <label htmlFor="p-ws">Workshop</label>
                  <select id="p-ws" className="field" required>
                    <option value="">Pick one...</option>
                    {workshopTypes.map(w => (
                      <option key={w.id} value={w.id}>{w.title}</option>
                    ))}
                  </select>
                </div>
                <div className="field-wrap">
                  <label htmlFor="p-date">Preferred Date</label>
                  <input type="date" id="p-date" className="field" required />
                </div>
              </div>

              <div className="field-wrap">
                <label htmlFor="p-count">Expected Participants</label>
                <input type="number" id="p-count" className="field" placeholder="e.g. 40" min="10" />
              </div>

              <div className="field-wrap">
                <label htmlFor="p-notes">Anything we should know?</label>
                <textarea id="p-notes" className="field" rows="3"
                  placeholder="Lab setup, specific topics, pre-requisites..."
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div className="propose__hint">
                <AlertCircle size={14} />
                <span>We'll email you a confirmation once an instructor is assigned.</span>
              </div>

              <div className="propose__actions">
                <button type="submit" className="btn btn-fill">
                  <Send size={15} /> Submit Proposal
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="ok"
            className="card propose__done"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="propose__done-icon">
              <CheckCircle size={44} />
            </div>
            <h2>You're all set!</h2>
            <p>We've got your proposal. Expect a reply within 2 working days with the next steps.</p>
            <button className="btn btn-ghost" onClick={() => setDone(false)}>
              Submit Another
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProposeWorkshop;
