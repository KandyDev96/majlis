// Majlis — Admin shared components (Icon library, TopBar, TabBar, primitives)

const adminIcons = {
  // Navigation
  bell: <><path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8"/><path d="M10 21a2 2 0 0 0 4 0"/></>,
  search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>,
  bellPlus: <><path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8"/><path d="M10 21a2 2 0 0 0 4 0"/></>,
  back: <path d="M9 6l6 6-6 6"/>,
  chev: <path d="M15 6l-6 6 6 6"/>,
  chevR: <path d="M9 6l6 6-6 6"/>,
  chevDown: <path d="M6 9l6 6 6-6"/>,
  // Tabs
  dashboard: <><rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="5" rx="2"/><rect x="13" y="10" width="8" height="11" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/></>,
  users: <><circle cx="9" cy="9" r="3"/><path d="M3 19c0-3 3-5 6-5s6 2 6 5"/><circle cx="17" cy="8" r="2.5"/><path d="M15 14h.5c2 0 4.5 1 4.5 4"/></>,
  user: <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></>,
  beard: <><circle cx="12" cy="9" r="4"/><path d="M6 21c0-4 3-7 6-7s6 3 6 7"/><path d="M9 13c0 2 1.5 4 3 4s3-2 3-4"/></>,
  // Stats / actions
  add: <><path d="M12 5v14"/><path d="M5 12h14"/></>,
  edit: <><path d="M11 4H4v16h16v-7"/><path d="M19 3l2 2-9 9-3 1 1-3z"/></>,
  trash: <><path d="M4 6h16"/><path d="M9 6V4h6v2"/><path d="M6 6l1 14h10l1-14"/></>,
  check: <path d="M5 12l5 5L20 7"/>,
  x: <><path d="M6 6l12 12"/><path d="M18 6L6 18"/></>,
  more: <><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></>,
  filter: <><path d="M4 5h16"/><path d="M7 12h10"/><path d="M10 19h4"/></>,
  // Domain
  book: <><path d="M4 4h10a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4z"/><path d="M18 8v12"/></>,
  cal: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M8 3v4"/><path d="M16 3v4"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  pin: <><path d="M12 21s-7-6-7-12a7 7 0 0 1 14 0c0 6-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></>,
  mosque: <><path d="M4 21V12c0-4 4-6 8-6s8 2 8 6v9"/><path d="M2 21h20"/><path d="M12 2v4"/><path d="M10 4h4"/><circle cx="12" cy="13" r="2"/></>,
  chart: <><path d="M4 20h16"/><path d="M7 16v-5"/><path d="M12 16V8"/><path d="M17 16v-3"/></>,
  growth: <><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></>,
  money: <><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 12h.01"/><path d="M18 12h.01"/></>,
  wallet: <><path d="M3 7a2 2 0 0 1 2-2h14v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 9h18"/><circle cx="17" cy="14" r="1.5"/></>,
  arrowUp: <><path d="M12 19V5"/><path d="M6 11l6-6 6 6"/></>,
  arrowDown: <><path d="M12 5v14"/><path d="M6 13l6 6 6-6"/></>,
  qr: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v7M17 17h.01M21 21h.01M17 21h.01"/></>,
  star: <path d="M12 3l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/>,
  starF: <path d="M12 3l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="currentColor" stroke="none"/>,
  download: <><path d="M12 4v12"/><path d="M6 12l6 6 6-6"/><path d="M4 20h16"/></>,
  upload: <><path d="M12 20V8"/><path d="M6 12l6-6 6 6"/><path d="M4 4h16"/></>,
  mic: <><rect x="9" y="3" width="6" height="13" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></>,
  file: <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/></>,
  audio: <><path d="M3 12h3l3-7v14l-3-7"/><path d="M13 8a5 5 0 0 1 0 8"/><path d="M16 5a9 9 0 0 1 0 14"/></>,
  phone: <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>,
  whatsapp: <><path d="M21 12a9 9 0 1 1-3.5-7.1L21 4l-1 3.5A8.9 8.9 0 0 1 21 12z"/><path d="M8 10c0 4 2 6 6 6l2-2-2-2-1 1c-2 0-3-1-3-3l1-1-2-2z"/></>,
  bag: <><path d="M5 7h14l-1 13H6z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/></>,
  award: <><circle cx="12" cy="9" r="5"/><path d="M9 13l-2 8 5-3 5 3-2-8"/></>,
  shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>,
  key: <><circle cx="8" cy="14" r="4"/><path d="m11 12 9-9 2 2-2 2 2 2-2 2-2-2-3 3"/></>,
  settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></>,
  inbox: <><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5 5l3 7h8l3-7"/><path d="M5 5h14v15H5z"/></>,
  logout: <><path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"/><path d="M10 17l-5-5 5-5"/><path d="M15 12H5"/></>,
  msg: <><path d="M3 5h18v12H8l-5 4z"/></>,
  send: <><path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4z"/></>,
  pdf: <><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 11h2a1 1 0 0 0 0-2H8v6"/><path d="M14 9v6"/><path d="M14 12h2"/></>,
  excel: <><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 9l8 8M16 9l-8 8"/></>,
  trend: <><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></>,
  flag: <><path d="M5 21V4"/><path d="M5 4h10l-1 4 4 2-3 4H5"/></>,
  return: <><path d="M9 14l-4-4 4-4"/><path d="M5 10h10a4 4 0 0 1 0 8h-3"/></>,
  alert: <><path d="M12 2 2 20h20z"/><path d="M12 9v5"/><circle cx="12" cy="17" r="1" fill="currentColor"/></>,
  shieldCheck: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="m9 12 2 2 4-4"/></>,
};

const Ic = ({ n, size = 20, sw = 1.75, color = "currentColor", fill = "none" }) => {
  const props = {
    stroke: color, strokeWidth: sw,
    strokeLinecap: "round", strokeLinejoin: "round", fill,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={props}>
      {adminIcons[n]}
    </svg>
  );
};

// ─ Top bar (home pages) ───────────────────────────────
const AdminTopBar = ({ name = "نورة المشرفة", initials = "ن", role = "مدير عام" }) => (
  <div className="topbar">
    <div className="me">
      <div className="avatar">{initials}</div>
      <div className="greet">
        <div className="hi">السلام عليكم،</div>
        <div className="name">{name}</div>
      </div>
    </div>
    <div className="actions">
      <div className="iconbtn"><Ic n="search" size={20}/></div>
      <div className="iconbtn"><Ic n="bell" size={20}/><span className="dot"/></div>
    </div>
  </div>
);

// ─ Sub-screen head (back chevron) ─────────────────────
const SubHead = ({ crumb, title, trail }) => (
  <div className="subhead">
    <div className="back"><Ic n="back" size={18}/></div>
    <div className="titles">
      {crumb ? <div className="crumb">{crumb}</div> : null}
      <div className="h">{title}</div>
    </div>
    {trail ? <div className="trail">{trail}</div> : null}
  </div>
);

// ─ Tab bar — 4 tabs ───────────────────────────────────
const ADMIN_TABS = [
  { ic: "dashboard", l: "الإدارة" },
  { ic: "users",     l: "الطلاب" },
  { ic: "beard",     l: "المشايخ" },
  { ic: "user",      l: "ملفي" },
];
const TabBar = ({ active = 0 }) => (
  <div className="tabbar">
    {ADMIN_TABS.map((t, i) => (
      <div key={i} className={"tab" + (i === active ? " active" : "")}>
        <div className="tic"><Ic n={t.ic} size={20}/></div>
        <span>{t.l}</span>
      </div>
    ))}
  </div>
);

// ─ Color stat card ────────────────────────────────────
const CStat = ({ tone = "olive", value, label, delta, icon, soft = false }) => (
  <div className={"cstat " + tone + (soft ? " soft" : "")}>
    {delta ? <div className="delta">{delta}</div> : null}
    <div className="pill-ic"><Ic n={icon || "chart"} size={18}/></div>
    <div>
      <div className="v">{value}</div>
      <div className="l">{label}</div>
    </div>
  </div>
);

// ─ Badge ──────────────────────────────────────────────
const Badge = ({ tone = "neutral", children, dot = false }) => (
  <span className={"badge " + tone}>
    {dot ? <span className="dot"/> : null}
    {children}
  </span>
);

// ─ Star rating ────────────────────────────────────────
const Stars = ({ value = 5, size = 14 }) => (
  <span className="stars">
    {[1,2,3,4,5].map(i => (
      <Ic key={i} n="starF" size={size}
        color={i <= value ? "var(--gold-400)" : "var(--neutral-300)"}/>
    ))}
  </span>
);

// ─ Chev (left-pointing for RTL "enter") ──────────────
const Chev = () => (
  <svg width="8" height="14" viewBox="0 0 8 14"
    style={{ stroke: "var(--fg-faint)", strokeWidth: 2, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
    <path d="M7 1L1 7l6 6"/>
  </svg>
);

// ─ Phone frame ────────────────────────────────────────
const Phone = ({ children, dark = false }) => (
  <IOSDevice width={390} height={844} dark={dark} title={undefined}>
    {children}
  </IOSDevice>
);

// ─ status bar spacer (when no IOSNavBar is used) ──────
const StatusSpacer = () => <div style={{ height: 54 }}/>;

Object.assign(window, {
  Ic, AdminTopBar, SubHead, TabBar, CStat, Badge, Stars, Chev, Phone, StatusSpacer,
});
