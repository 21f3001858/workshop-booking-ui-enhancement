# FOSSEE Workshop Booking — Frontend Redesign

A fresh take on the FOSSEE Workshop Booking portal. I rebuilt the entire frontend using React + Vite with vanilla CSS, focusing on making it genuinely useful on mobile while looking sharp on desktop too.

## How to run it

```bash
cd frontend
npm install
npm run dev
```

That's it. Open the localhost link it gives you.

You'll need Node 16+ installed.

---

## My thought process

### Design decisions

I spent a good amount of time just studying the original Django templates before writing any code. The existing site works fine functionally, but it looks dated — default Bootstrap styling, no real visual hierarchy, and a navbar that's hard to use on phones.

I went with a dark UI because most students I know prefer dark mode, especially when they're staring at screens all day during workshops. The color system uses indigo as the primary accent with teal and rose as secondary colors. I picked these because they contrast well against dark backgrounds without being harsh on the eyes.

For cards and panels, I used subtle backdrop blur and translucent backgrounds. Not heavy glassmorphism (that tanks performance), just enough to create depth. Every interactive element has a hover/focus state because I find it really annoying when you can't tell what's clickable.

### Responsiveness

I didn't go crazy with media queries. Most of the layout is driven by CSS Grid with `auto-fit` and `minmax()`, which handles a lot of the responsive behavior automatically. I only added explicit breakpoints for things that genuinely break — like the navbar switching to a hamburger menu below 768px, or the stats grid going from 4 columns to 2 on small screens.

The hero section stacks vertically on mobile and the form inputs go single-column below 540px. I tested these on Chrome DevTools against iPhone SE, Pixel 5, and iPad dimensions.

Typography scales with `clamp()` for the main headings so there's no jarring size jumps between breakpoints.

### Tradeoffs

The biggest tradeoff was adding Framer Motion. It's roughly 30kb gzipped, which is not nothing for a site like this. But the page transitions and staggered card animations make the whole app feel polished rather than static. I think it's worth it for the perceived quality boost.

I chose not to use CSS-in-JS or Tailwind. Vanilla CSS with proper file organization (each component and page gets its own stylesheet) keeps the bundle small and the code easy to follow. It does mean more files to manage, but I prefer that over fighting with utility class soup.

Mock data is hardcoded in a single file. In a real integration with the Django backend, you'd swap those imports for API calls. I kept the data realistic — actual Indian college names, reasonable participant counts, proper workshop IDs.

### What was hardest

Honestly, the thing I wrestled with most was the workshop catalog page. Getting the filter chips, image zoom effect, and layout transitions to work smoothly together took some iteration. The `layout` prop from Framer Motion helps with smooth reflows when filtering, but I had to be careful about which elements I animated to avoid janky repaints.

The navbar scroll effect (it shrinks and gets more opaque as you scroll down) was also fiddly. I used a scroll listener with `passive: true` so it doesn't hurt scroll performance, and the actual visual change is pure CSS transition triggered by a class toggle.

---

## What's in here

```
src/
├── components/
│   ├── Navbar.jsx + Navbar.css     → sticky nav with scroll shrink
│   ├── Footer.jsx + Footer.css     → site footer with links
│   └── Layout.jsx                  → page transition wrapper
├── pages/
│   ├── Home.jsx + Home.css         → landing page, stats, testimonials
│   ├── Dashboard.jsx + Dashboard.css → stats cards + workshop table
│   ├── WorkshopTypes.jsx + WorkshopTypes.css → filterable catalog
│   ├── ProposeWorkshop.jsx + ProposeWorkshop.css → proposal form
│   └── Auth.jsx + Auth.css         → login/register
├── data/
│   └── mockData.js                 → all the sample data
└── index.css                       → design tokens + base styles
```

---

## Screenshots

### Before
![Before](./docs/before.png)

### After
![Home](./docs/after-home.png)
![Dashboard](./docs/after-dashboard.png)
![Workshops](./docs/after-workshops.png)
![Propose](./docs/after-propose.png)

---

Built for the FOSSEE screening task. Feedback welcome.
