export const workshopTypes = [
  {
    id: 1,
    title: 'Python Fundamentals',
    duration: '2 Days',
    level: 'Beginner',
    description: 'Covers core syntax, data types, loops, functions, and file handling. Perfect for first-timers getting into programming.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?auto=format&fit=crop&q=80&w=600',
    tags: ['Python', 'Core'],
    instructor: 'Dr. Priya Sharma',
    seats: 60
  },
  {
    id: 2,
    title: 'Web Dev with Django',
    duration: '3 Days',
    level: 'Intermediate',
    description: 'Build full-stack web apps from scratch - models, views, templates, authentication, and deploying to production.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600',
    tags: ['Django', 'Web'],
    instructor: 'Rahul Krishnan',
    seats: 40
  },
  {
    id: 3,
    title: 'Data Science Bootcamp',
    duration: '5 Days',
    level: 'Advanced',
    description: 'Hands-on with Pandas, NumPy, Matplotlib, and Scikit-learn. Tackle real datasets and build predictive models.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    tags: ['Data Science', 'ML'],
    instructor: 'Anika Gupta',
    seats: 35
  },
  {
    id: 4,
    title: 'Scilab for Engineers',
    duration: '2 Days',
    level: 'Beginner',
    description: 'Open source alternative to MATLAB. Learn matrix operations, plotting, and solving engineering problems numerically.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600',
    tags: ['Scilab', 'Engineering'],
    instructor: 'Prof. Vijay Rangan',
    seats: 50
  },
  {
    id: 5,
    title: 'R for Statistical Analysis',
    duration: '3 Days',
    level: 'Intermediate',
    description: 'Statistical computing, hypothesis testing, data visualization with ggplot2, and building regression models in R.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    tags: ['R', 'Statistics'],
    instructor: 'Dr. Meera Iyer',
    seats: 45
  },
  {
    id: 6,
    title: 'Linux System Admin',
    duration: '4 Days',
    level: 'Intermediate',
    description: 'Shell scripting, package management, networking basics, user permissions, and setting up production servers.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=600',
    tags: ['Linux', 'DevOps'],
    instructor: 'Karthik Nair',
    seats: 30
  }
];

export const upcomingWorkshops = [
  {
    id: 'WS-2026-041',
    type: 'Python Fundamentals',
    date: '2026-05-15',
    instructor: 'Dr. Priya Sharma',
    location: 'NIT Warangal',
    status: 'confirmed',
    participants: 48
  },
  {
    id: 'WS-2026-042',
    type: 'Data Science Bootcamp',
    date: '2026-05-22',
    instructor: 'Anika Gupta',
    location: 'IIT Madras',
    status: 'pending',
    participants: 12
  },
  {
    id: 'WS-2026-043',
    type: 'Web Dev with Django',
    date: '2026-06-01',
    instructor: 'Rahul Krishnan',
    location: 'BITS Pilani',
    status: 'confirmed',
    participants: 35
  },
  {
    id: 'WS-2026-044',
    type: 'Scilab for Engineers',
    date: '2026-06-10',
    instructor: 'Prof. Vijay Rangan',
    location: 'VIT Vellore',
    status: 'pending',
    participants: 8
  },
  {
    id: 'WS-2026-045',
    type: 'R for Statistical Analysis',
    date: '2026-06-18',
    instructor: 'Dr. Meera Iyer',
    location: 'IIIT Hyderabad',
    status: 'confirmed',
    participants: 40
  }
];

export const stats = {
  workshops: 154,
  instructors: 42,
  participants: 3500,
  colleges: 87
};

export const monthlyWorkshopData = [
  { month: 'Jul', count: 8 },
  { month: 'Aug', count: 14 },
  { month: 'Sep', count: 18 },
  { month: 'Oct', count: 12 },
  { month: 'Nov', count: 22 },
  { month: 'Dec', count: 10 },
  { month: 'Jan', count: 16 },
  { month: 'Feb', count: 20 },
  { month: 'Mar', count: 24 },
  { month: 'Apr', count: 10 },
];

export const workshopsByType = [
  { name: 'Python', value: 52, fill: '#6366f1' },
  { name: 'Django', value: 28, fill: '#a855f7' },
  { name: 'Scilab', value: 24, fill: '#14b8a6' },
  { name: 'R', value: 18, fill: '#f59e0b' },
  { name: 'Data Science', value: 20, fill: '#ec4899' },
  { name: 'Linux', value: 12, fill: '#0ea5e9' },
];

export const participantTrend = [
  { month: 'Jul', students: 180 },
  { month: 'Aug', students: 320 },
  { month: 'Sep', students: 410 },
  { month: 'Oct', students: 280 },
  { month: 'Nov', students: 520 },
  { month: 'Dec', students: 240 },
  { month: 'Jan', students: 390 },
  { month: 'Feb', students: 480 },
  { month: 'Mar', students: 560 },
  { month: 'Apr', students: 320 },
];

export const regionData = [
  { region: 'South', workshops: 48 },
  { region: 'West', workshops: 36 },
  { region: 'North', workshops: 32 },
  { region: 'East', workshops: 22 },
  { region: 'Central', workshops: 16 },
];

export const testimonials = [
  {
    name: 'Sneha Reddy',
    role: 'Student, NIT Trichy',
    text: 'The Python workshop was incredibly well structured. I went from zero to writing my own scripts in just two days.',
  },
  {
    name: 'Arjun Mehta',
    role: 'Coordinator, COEP Pune',
    text: 'Booking a workshop was hassle-free. The FOSSEE team was responsive and the instructor was fantastic.',
  },
  {
    name: 'Prof. Lakshmi Narayan',
    role: 'Faculty, IIT Guwahati',
    text: 'We have hosted three FOSSEE workshops so far and each one boosted our students\' confidence with open source tools.',
  }
];
