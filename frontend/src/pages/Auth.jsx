import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, UserPlus, Eye, EyeOff, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import './Auth.css';

function Auth() {
  const [mode, setMode] = useState('login');
  const [showPw, setShowPw] = useState(false);
  const navigate = useNavigate();

  const flip = () => setMode(m => m === 'login' ? 'register' : 'login');
  const isLogin = mode === 'login';

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="auth wrap">
      <motion.div
        className="card auth__box"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="auth__lock-icon">
          <Lock size={20} />
        </div>

        <div className="auth__head">
          <h2>{isLogin ? 'Welcome back' : 'Join FOSSEE'}</h2>
          <p>{isLogin ? 'Sign in to your dashboard' : 'Create a coordinator or instructor account'}</p>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="field-wrap">
              <label htmlFor="a-name">Full Name</label>
              <input type="text" id="a-name" className="field" placeholder="Priya Sharma" />
            </div>
          )}

          <div className="field-wrap">
            <label htmlFor="a-email">Email</label>
            <input type="email" id="a-email" className="field" placeholder="you@college.ac.in" />
          </div>

          <div className="field-wrap">
            <label htmlFor="a-pw">Password</label>
            <div className="auth__pw-box">
              <input
                type={showPw ? 'text' : 'password'}
                id="a-pw"
                className="field"
                placeholder="Min 8 characters"
              />
              <button type="button" className="auth__pw-eye" onClick={() => setShowPw(p => !p)} aria-label="Toggle password visibility">
                {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div className="field-wrap">
              <label htmlFor="a-role">Role</label>
              <select id="a-role" className="field">
                <option value="coordinator">Coordinator</option>
                <option value="instructor">Instructor</option>
              </select>
            </div>
          )}

          <div className="auth__actions" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
            <button type="submit" className="btn btn-fill auth__cta" style={{ marginTop: '0' }}>
              {isLogin ? <><LogIn size={15} /> Sign In</> : <><UserPlus size={15} /> Create Account</>}
            </button>
            <button 
              type="button" 
              className="btn btn-outline auth__cta" 
              onClick={() => navigate('/dashboard')}
              style={{ marginTop: '0', background: 'rgba(255,255,255,0.05)' }}
            >
              Bypass Login (Demo)
            </button>
          </div>
        </form>

        <p className="auth__toggle">
          {isLogin ? "New here?" : 'Already have an account?'}
          {' '}
          <button onClick={flip}>{isLogin ? 'Create account' : 'Sign in'}</button>
        </p>
      </motion.div>
    </div>
  );
}

export default Auth;
