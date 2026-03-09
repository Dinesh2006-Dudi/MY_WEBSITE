/* =============================================
   DOCTORS DATA
============================================= */
const DOCS = [
  {
    name: 'Dr. Rajesh Sharma', dept: 'Cardiology',
    qual: 'MBBS, MD (Cardiology)', exp: '12 yrs',
    patients: '3,400+', rating: '4.9', fee: '₹800', avail: 'today',
    skin: '#f5cba7', hair: '#2c1810', gender: 'm',
    bg: 'linear-gradient(135deg,#a8dadc,#74b3ce)'
  },
  {
    name: 'Dr. Lakshmi Iyer', dept: 'Neurology',
    qual: 'MBBS, DM (Neurology)', exp: '9 yrs',
    patients: '2,800+', rating: '4.8', fee: '₹900', avail: 'today',
    skin: '#f0c8a0', hair: '#1a0a00', gender: 'f',
    bg: 'linear-gradient(135deg,#c8e6c9,#81c784)'
  },
  {
    name: 'Dr. Suresh Patel', dept: 'Orthopaedics',
    qual: 'MBBS, MS (Orthopaedics)', exp: '15 yrs',
    patients: '5,100+', rating: '4.9', fee: '₹750', avail: 'tomorrow',
    skin: '#d4956a', hair: '#1a1200', gender: 'm',
    bg: 'linear-gradient(135deg,#ffccbc,#ff8a65)'
  },
  {
    name: 'Dr. Meena Nair', dept: 'Paediatrics',
    qual: 'MBBS, MD (Paediatrics)', exp: '11 yrs',
    patients: '4,200+', rating: '5.0', fee: '₹600', avail: 'today',
    skin: '#e8b890', hair: '#0d0500', gender: 'f',
    bg: 'linear-gradient(135deg,#e1bee7,#ba68c8)'
  },
  {
    name: 'Dr. Arjun Rao', dept: 'Cardiology',
    qual: 'MBBS, DM (Cardiology)', exp: '8 yrs',
    patients: '2,100+', rating: '4.7', fee: '₹800', avail: 'today',
    skin: '#c8855a', hair: '#2a1500', gender: 'm',
    bg: 'linear-gradient(135deg,#fff9c4,#ffee58)'
  },
  {
    name: 'Dr. Preethi Kumar', dept: 'Dental',
    qual: 'BDS, MDS (Orthodontics)', exp: '7 yrs',
    patients: '1,900+', rating: '4.8', fee: '₹500', avail: 'tomorrow',
    skin: '#f8d5b0', hair: '#0a0000', gender: 'f',
    bg: 'linear-gradient(135deg,#b3e5fc,#4fc3f7)'
  }
];

/* =============================================
   SVG DOCTOR PORTRAIT – unique per doctor
============================================= */
function doctorSVG(d) {
  const { skin, hair, gender } = d;
  const coatCol = '#fff';
  const hairH = gender === 'f'
    ? `<ellipse cx="25" cy="16" rx="15" ry="11" fill="${hair}" opacity=".9"/>
       <rect x="10" y="16" width="9" height="22" rx="4.5" fill="${hair}" opacity=".9"/>
       <rect x="31" y="16" width="9" height="22" rx="4.5" fill="${hair}" opacity=".9"/>`
    : `<ellipse cx="25" cy="15" rx="15" ry="10" fill="${hair}" opacity=".9"/>`;

  return `
  <svg viewBox="0 0 50 68" xmlns="http://www.w3.org/2000/svg" width="130" style="position:absolute;bottom:0">
    <rect x="7" y="38" width="36" height="30" rx="9" fill="${coatCol}" opacity=".97"/>
    <path d="M20 38 L25 48 L30 38" fill="none" stroke="#0d7c5f" stroke-width="2.2"/>
    <path d="M15 44 Q9 56 15 62 Q21 68 27 62 Q30 58 27 53" fill="none" stroke="#0d7c5f" stroke-width="2" stroke-linecap="round"/>
    <circle cx="27" cy="53" r="4" fill="#0d7c5f" opacity=".78"/>
    <rect x="1" y="40" width="10" height="26" rx="5" fill="${coatCol}" opacity=".9"/>
    <rect x="39" y="40" width="10" height="26" rx="5" fill="${coatCol}" opacity=".9"/>
    <ellipse cx="6" cy="68" rx="6" ry="5" fill="${skin}"/>
    <ellipse cx="44" cy="68" rx="6" ry="5" fill="${skin}"/>
    <rect x="32" y="50" width="8" height="10" rx="2.5" fill="#e6f7f3" stroke="#cce8e2" stroke-width="1"/>
    <rect x="35" y="49" width="2" height="9" rx="1" fill="#0d7c5f"/>
    <rect x="19" y="56" width="12" height="8" rx="2" fill="#e6f7f3" stroke="#0d7c5f" stroke-width="1.2"/>
    <rect x="21" y="58" width="8" height="1.5" rx=".75" fill="#0d7c5f" opacity=".35"/>
    <rect x="21" y="61" width="6" height="1.5" rx=".75" fill="#0d7c5f" opacity=".25"/>
    <rect x="20" y="30" width="10" height="10" rx="4" fill="${skin}"/>
    <ellipse cx="25" cy="20" rx="13" ry="15" fill="${skin}"/>
    ${hairH}
    <circle cx="20" cy="20" r="2.8" fill="white"/>
    <circle cx="30" cy="20" r="2.8" fill="white"/>
    <circle cx="20.8" cy="20" r="1.6" fill="#111"/>
    <circle cx="30.8" cy="20" r="1.6" fill="#111"/>
    <circle cx="19.8" cy="19" r=".6" fill="white"/>
    <circle cx="29.8" cy="19" r=".6" fill="white"/>
    <ellipse cx="25" cy="24" rx="1.4" ry="1" fill="${skin}" style="filter:brightness(.88)"/>
    <path d="M21 28 Q25 32.5 29 28" fill="none" stroke="#b07040" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`;
}

/* =============================================
   RENDER DOCTOR CARDS
============================================= */
function renderDocs(filter = 'all') {
  const grid = document.getElementById('docs-grid');
  const list = filter === 'all' ? DOCS : DOCS.filter(d => d.dept === filter);

  grid.innerHTML = list.map((d, i) => `
    <div class="doc-card reveal d${(i % 4) + 1}">
      <div class="doc-img" style="background:${d.bg}">
        ${doctorSVG(d)}
        <div class="doc-dept-tag">${d.dept}</div>
        <div class="doc-rating-tag">⭐ ${d.rating}</div>
      </div>
      <div class="doc-body">
        <div class="doc-name">${d.name}</div>
        <div class="doc-spec">${d.qual}</div>
        <div class="doc-meta">
          <div class="doc-meta-i">⏱ ${d.exp}</div>
          <div class="doc-meta-i">👥 ${d.patients}</div>
          <div class="doc-meta-i">💰 ${d.fee}</div>
        </div>
        <div class="doc-avail-row">
          <span class="da-lbl">Next available:</span>
          <span class="da-badge ${d.avail === 'today' ? 'avail' : 'tmrw'}">
            ${d.avail === 'today' ? '🟢 Today' : '🟡 Tomorrow'}
          </span>
        </div>
        <button class="doc-btn" onclick="toast('Booking appointment with ${d.name}...')">
          Book Appointment →
        </button>
      </div>
    </div>
  `).join('');

  setTimeout(() => initReveal(), 80);
}

/* =============================================
   FILTER PILLS
============================================= */
window.filterDocs = function (btn, f) {
  document.querySelectorAll('.fpill').forEach(p => p.classList.remove('act'));
  btn.classList.add('act');
  renderDocs(f);
};

/* =============================================
   SEARCH DOCTORS
============================================= */
window.searchDocs = function () {
  const name  = document.getElementById('s-name').value.toLowerCase();
  const dept  = document.getElementById('s-dept').value;
  const avail = document.getElementById('s-avail').value;

  const filtered = DOCS.filter(d => {
    const mn = !name  || d.name.toLowerCase().includes(name);
    const md = !dept  || d.dept === dept;
    const ma = !avail
      || (avail === 'Today'     && d.avail === 'today')
      || (avail === 'Tomorrow'  && d.avail === 'tomorrow')
      ||  avail === 'This Week';
    return mn && md && ma;
  });

  const g = document.getElementById('docs-grid');

  if (!filtered.length) {
    g.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--muted)">
        <div style="font-size:48px;margin-bottom:10px">🔍</div>
        <h3 style="color:var(--navy)">No doctors found</h3>
        <p style="margin-top:6px">Try adjusting your filters.</p>
      </div>`;
    return;
  }

  g.innerHTML = filtered.map((d, i) => `
    <div class="doc-card reveal d${(i % 4) + 1}">
      <div class="doc-img" style="background:${d.bg}">
        ${doctorSVG(d)}
        <div class="doc-dept-tag">${d.dept}</div>
        <div class="doc-rating-tag">⭐ ${d.rating}</div>
      </div>
      <div class="doc-body">
        <div class="doc-name">${d.name}</div>
        <div class="doc-spec">${d.qual}</div>
        <div class="doc-meta">
          <div class="doc-meta-i">⏱ ${d.exp}</div>
          <div class="doc-meta-i">👥 ${d.patients}</div>
          <div class="doc-meta-i">💰 ${d.fee}</div>
        </div>
        <div class="doc-avail-row">
          <span class="da-lbl">Next available:</span>
          <span class="da-badge ${d.avail === 'today' ? 'avail' : 'tmrw'}">
            ${d.avail === 'today' ? '🟢 Today' : '🟡 Tomorrow'}
          </span>
        </div>
        <button class="doc-btn" onclick="toast('Booking with ${d.name}...')">Book Appointment →</button>
      </div>
    </div>`).join('');

  toast(`Found ${filtered.length} doctor${filtered.length > 1 ? 's' : ''}!`);
  setTimeout(() => initReveal(), 80);
};

/* =============================================
   SLOT PICKING (HERO CARD)
============================================= */
window.pickSlot = function (el) {
  if (el.classList.contains('busy')) return;
  document.querySelectorAll('#hero-slots .slot').forEach(s => s.classList.remove('sel'));
  el.classList.add('sel');
};

window.confirmBooking = function () {
  const sel = document.querySelector('#hero-slots .slot.sel');
  const time = sel ? sel.textContent : 'selected time';
  toast('✅ Appointment confirmed with Dr. Rajesh Sharma at ' + time + '!');
};

/* =============================================
   DASHBOARD SIDEBAR TABS
============================================= */
window.dashTab = function (btn, tab) {
  document.querySelectorAll('.dsb-ni').forEach(b => b.classList.remove('act'));
  btn.classList.add('act');
  toast('Switched to ' + tab + ' view');
};

/* =============================================
   NAVBAR SCROLL HIGHLIGHT
============================================= */
const NAV_SECTIONS = ['home', 'why', 'departments', 'find-doctors', 'receptionist', 'my-dashboard'];

window.addEventListener('scroll', () => {
  const nb = document.getElementById('navbar');
  nb.classList.toggle('solid', window.scrollY > 30);

  let cur = 'home';
  NAV_SECTIONS.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 100) cur = id;
  });

  document.querySelectorAll('.nb-link').forEach(l => {
    const t = l.textContent.trim();
    const match =
      (cur === 'home'         && t === 'Home')         ||
      (cur === 'my-dashboard' && t === 'My Dashboard') ||
      (cur === 'find-doctors' && t === 'Find Doctors') ||
      (cur === 'receptionist' && t === 'Receptionist');
    l.classList.toggle('act', match);
  });
});

/* =============================================
   SMOOTH SCROLL / GO TO SECTION
============================================= */
window.go = function (id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  document.querySelectorAll('.mob-lnk, .nb-link').forEach(b => b.classList.remove('act'));
  document.getElementById('mob-drawer').classList.remove('open');
};

/* =============================================
   MOBILE DRAWER
============================================= */
window.toggleMobDrawer = function () {
  document.getElementById('mob-drawer').classList.toggle('open');
};

window.closeMobDrawer = function (e) {
  if (e.target === document.getElementById('mob-drawer')) toggleMobDrawer();
};

/* =============================================
   TOAST NOTIFICATIONS
============================================= */
window.toast = function (msg) {
  const wrap = document.getElementById('toast-wrap');
  const el   = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  el.onclick = () => el.remove();
  wrap.appendChild(el);
  setTimeout(() => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(8px)';
    el.style.transition = 'all .3s';
    setTimeout(() => el.remove(), 310);
  }, 3500);
};

/* =============================================
   NEWSLETTER SUBSCRIBE
============================================= */
window.subscribeNL = function () {
  const v = document.getElementById('nl-email').value.trim();
  if (!v || !v.includes('@')) {
    toast('⚠️ Please enter a valid email address.');
    return;
  }
  toast('✅ Subscribed! Welcome to the CareConnect newsletter!');
  document.getElementById('nl-email').value = '';
};

/* =============================================
   SCROLL REVEAL (INTERSECTION OBSERVER)
============================================= */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
}

/* =============================================
   INITIALISE ON DOM READY
============================================= */
document.addEventListener('DOMContentLoaded', () => {
  renderDocs();   // render doctor cards
  initReveal();   // kick off scroll reveal
});
