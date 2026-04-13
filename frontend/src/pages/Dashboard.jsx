import { useState } from 'react';
import {
  upcomingWorkshops, stats, monthlyWorkshopData,
  workshopsByType, participantTrend, regionData
} from '../data/mockData';
import {
  Users, BookOpen, UserCheck, Calendar, MapPin,
  ChevronRight, TrendingUp, Filter
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area, Legend
} from 'recharts';
import './Dashboard.css';

const fadeIn = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: d, duration: 0.45, ease: [0.22, 1, 0.36, 1] }
});

const chartTooltipStyle = {
  backgroundColor: '#12131c',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '10px',
  padding: '8px 14px',
  color: '#edf0ff',
  fontSize: '0.8rem',
};

function Dashboard() {
  const [statusFilter, setStatusFilter] = useState('all');

  const statCards = [
    { icon: BookOpen, label: 'Workshops', value: stats.workshops, accent: '#6366f1', bg: 'rgba(99,102,241,0.08)' },
    { icon: UserCheck, label: 'Instructors', value: stats.instructors, accent: '#a855f7', bg: 'rgba(168,85,247,0.08)' },
    { icon: Users, label: 'Students', value: stats.participants.toLocaleString(), accent: '#14b8a6', bg: 'rgba(20,184,166,0.08)' },
    { icon: Calendar, label: 'Colleges', value: stats.colleges, accent: '#f59e0b', bg: 'rgba(245,158,11,0.08)' },
  ];

  const statusPill = { confirmed: 'pill-emerald', pending: 'pill-amber' };

  const filteredWorkshops = statusFilter === 'all'
    ? upcomingWorkshops
    : upcomingWorkshops.filter(w => w.status === statusFilter);

  return (
    <div className="dash wrap">
      <div className="dash__top">
        <div>
          <h1 className="dash__title">Dashboard</h1>
          <p className="dash__subtitle">Workshop analytics and upcoming schedule</p>
        </div>
        <span className="pill pill-indigo">
          <TrendingUp size={12} /> Instructor Panel
        </span>
      </div>

      <div className="dash__stats">
        {statCards.map((s, i) => (
          <motion.div key={s.label} className="card dash__stat" {...fadeIn(i * 0.06)}>
            <div className="dash__stat-icon" style={{ background: s.bg, color: s.accent }}>
              <s.icon size={22} />
            </div>
            <div>
              <p className="dash__stat-val">{s.value}</p>
              <p className="dash__stat-lbl">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="dash__charts">
        <motion.div className="card dash__chart-card" {...fadeIn(0.1)}>
          <h3 className="dash__chart-title">Monthly Workshops</h3>
          <p className="dash__chart-sub">Number of workshops conducted per month</p>
          <div className="dash__chart-area">
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={monthlyWorkshopData} barSize={20}>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#7c85a6', fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#7c85a6', fontSize: 12 }}
                />
                <Tooltip contentStyle={chartTooltipStyle} cursor={{ fill: 'rgba(99,102,241,0.06)' }} />
                <Bar dataKey="count" fill="#6366f1" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div className="card dash__chart-card" {...fadeIn(0.15)}>
          <h3 className="dash__chart-title">Workshops by Type</h3>
          <p className="dash__chart-sub">Distribution across different technologies</p>
          <div className="dash__chart-area">
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie
                  data={workshopsByType}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={90}
                  paddingAngle={3}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                  style={{ fontSize: '0.7rem', fill: '#7c85a6' }}
                >
                  {workshopsByType.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip contentStyle={chartTooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      <div className="dash__charts">
        <motion.div className="card dash__chart-card" {...fadeIn(0.2)}>
          <h3 className="dash__chart-title">Participant Growth</h3>
          <p className="dash__chart-sub">Student enrollment over the last 10 months</p>
          <div className="dash__chart-area">
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={participantTrend}>
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#7c85a6', fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#7c85a6', fontSize: 12 }}
                />
                <Tooltip contentStyle={chartTooltipStyle} />
                <Area
                  type="monotone"
                  dataKey="students"
                  stroke="#6366f1"
                  strokeWidth={2}
                  fill="url(#areaGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div className="card dash__chart-card" {...fadeIn(0.25)}>
          <h3 className="dash__chart-title">Regional Coverage</h3>
          <p className="dash__chart-sub">Workshops held across different regions</p>
          <div className="dash__chart-area">
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={regionData} layout="vertical" barSize={16}>
                <XAxis
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#7c85a6', fontSize: 12 }}
                />
                <YAxis
                  type="category"
                  dataKey="region"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#7c85a6', fontSize: 12 }}
                  width={60}
                />
                <Tooltip contentStyle={chartTooltipStyle} cursor={{ fill: 'rgba(99,102,241,0.06)' }} />
                <Bar dataKey="workshops" fill="#a855f7" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      <div className="dash__section-top">
        <h2>Upcoming Workshops</h2>
        <div className="dash__filter-group">
          <Filter size={14} />
          {['all', 'confirmed', 'pending'].map(f => (
            <button
              key={f}
              className={`filter-chip ${statusFilter === f ? 'filter-chip--on' : ''}`}
              onClick={() => setStatusFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="dash__list">
        {filteredWorkshops.map((ws, i) => (
          <motion.div key={ws.id} className="card shimmer-border dash__row" {...fadeIn(i * 0.05)}>
            <div className="dash__row-left">
              <code className="dash__row-id">{ws.id}</code>
              <div>
                <p className="dash__row-type">{ws.type}</p>
                <p className="dash__row-meta">
                  <MapPin size={12} /> {ws.location} &middot; {ws.date}
                </p>
              </div>
            </div>
            <div className="dash__row-right">
              <span className={`pill ${statusPill[ws.status] || 'pill-indigo'}`}>
                {ws.status}
              </span>
              <span className="dash__row-count">{ws.participants} joined</span>
              <button className="btn btn-outline dash__row-btn">
                Details <ChevronRight size={13} />
              </button>
            </div>
          </motion.div>
        ))}
        {filteredWorkshops.length === 0 && (
          <div className="dash__empty">No workshops matching that filter.</div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
