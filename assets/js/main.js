/** Point d'entrée : rendu des sections, navigation et menu mobile */

import { profile, about, skills, experiences, certifications, distinctions } from './data.js';
import { el, esc, icons } from './utils.js';
import { renderProjects } from './projects.js';

document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderAbout();
  renderSkills();
  renderProjects();
  renderExperiences();
  renderCertifications();
  renderDistinctions();
  initNav();
  initMobileMenu();
});

// ── Barre latérale ───────────────────────────────────────────────
function renderSidebar() {
  const photoArea = el('sidebar-photo-area');
  if (photoArea && profile.photo) {
    photoArea.innerHTML = `<img src="${esc(profile.photo)}" alt="${esc(profile.photo_alt)}" class="sidebar__photo" />`;
  }

  const mobileTitle = el('mobile-title');
  if (mobileTitle) mobileTitle.textContent = `${profile.firstName} ${profile.lastName}`;
}

// ── 01. À propos ─────────────────────────────────────────────────
function renderAbout() {
  const container = el('about-content');
  if (!container) return;

  const mailto = profile.email.startsWith('mailto:') ? profile.email : `mailto:${profile.email}`;
  const links = [
    { href: profile.cv,       label: 'Voir mon CV', text: 'CV', cv: true },
    { href: mailto,           label: 'E-mail',             icon: icons.email(20) },
    { href: profile.linkedin, label: 'LinkedIn',           icon: icons.linkedin(20) },
    { href: profile.github,   label: 'GitHub',             icon: icons.github(20) },
  ].filter(l => l.href);

  const linksHtml = links.map(l => {
    const attrs = l.cv ? 'target="_blank" rel="noopener noreferrer"'
      : l.label === 'E-mail' ? '' : 'target="_blank" rel="noopener noreferrer"';
    return `<a href="${esc(l.href)}" class="profile-icon-link${l.cv ? ' profile-icon-link--cv' : ''}"
               title="${l.label}" aria-label="${l.label}" ${attrs}>${l.cv ? l.text : l.icon}</a>`;
  }).join('');

  container.innerHTML = `
    <h1 class="hero-name">
      <span class="hero-name__first">${esc(profile.firstName)}</span>
      <span class="hero-name__last">${esc(profile.lastName)}</span>
    </h1>
    <p class="hero-title-line">${esc(profile.title)}</p>
    <p class="hero-institution-line">${esc(profile.institution)}</p>
    ${about.bio.map(p => `<p class="hero-bio">${esc(p)}</p>`).join('')}
    <div class="interests-container">
      <p class="interests__label">Domaines d'intérêt</p>
      <p class="interests-inline">${about.interests
        .map(i => `<span>${esc(i)}</span>`)
        .join('<span class="interest-separator" aria-hidden="true">&bull;</span>')}</p>
    </div>
    <div class="hero-links" aria-label="Liens professionnels">${linksHtml}</div>`;
}

// ── 02. Compétences ──────────────────────────────────────────────
function renderSkills() {
  const container = el('skills-content');
  if (!container) return;

  container.innerHTML = `<div class="skills-list">${skills.categories.map(cat => `
    <div class="skill-group">
      <h3 class="skill-group__title">${esc(cat.name)}</h3>
      <p class="skill-group__items">${cat.items.map(esc).join(', ')}</p>
    </div>`).join('')}</div>`;
}

// ── 04. Expériences professionnelles ─────────────────────────────
function renderExperiences() {
  const container = el('experiences-content');
  if (!container) return;

  container.innerHTML = `<div class="entry-list">${experiences.map(exp => entryHtml({
    icon: icons.briefcase(16),
    title: exp.title,
    url: exp.document_url,
    date: exp.period,
    lines: [
      [exp.organization, exp.location].filter(Boolean).join(', '),
      exp.description,
      exp.skills && exp.skills.length ? 'Outils et méthodes : ' + exp.skills.join(', ') : '',
    ],
    extra: exp.attestation_url
      ? `<p class="legend"><a href="${esc(exp.attestation_url)}" target="_blank" rel="noopener noreferrer">Attestation de stage</a></p>`
      : '',
  })).join('')}</div>`;
}

// ── 05. Écoles, certifications, conférences ──────────────────────
function renderCertifications() {
  const container = el('certifications-content');
  if (!container) return;

  container.innerHTML = `<div class="entry-list">${certifications.map(c => entryHtml({
    icon: icons.certificate(16),
    title: c.title,
    url: c.verify_url,
    date: c.date,
    lines: [c.organization, c.description],
  })).join('')}</div>`;
}

// ── 06. Distinctions ─────────────────────────────────────────────
function renderDistinctions() {
  const container = el('distinctions-content');
  if (!container) return;

  container.innerHTML = `<div class="entry-list">${distinctions.map(d => entryHtml({
    icon: icons.trophy(16),
    title: d.title,
    url: d.url,
    date: d.date,
    lines: [d.organization, d.team, d.description],
  })).join('')}</div>`;
}

/** Entrée commune : icône, titre (lien si url), date à droite, puis une ligne par information. */
function entryHtml({ icon, title, url, date, lines, extra = '' }) {
  const heading = url
    ? `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(title)}</a>`
    : esc(title);
  return `
    <div class="entry">
      <span class="entry__icon">${icon}</span>
      <div class="entry__main">
        <h3 class="entry__title">${heading}</h3>
        ${lines.filter(Boolean).map(l => `<p class="legend">${esc(l)}</p>`).join('')}
        ${extra}
      </div>
      ${date ? `<span class="entry__date">${esc(date)}</span>` : ''}
    </div>`;
}

// ── Navigation ───────────────────────────────────────────────────
function initNav() {
  const links = document.querySelectorAll('.sidebar__link');

  const setActive = id => {
    links.forEach(link => {
      const active = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  };

  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }),
    { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
  );
  document.querySelectorAll('main .section').forEach(sec => observer.observe(sec));

  links.forEach(link => {
    link.addEventListener('click', () => {
      setActive(link.getAttribute('href').slice(1));
      closeMobileMenu();
    });
  });
}

// ── Menu mobile ──────────────────────────────────────────────────
function initMobileMenu() {
  const menuBtn = el('menu-btn');
  const overlay = el('sidebar-overlay');

  menuBtn.addEventListener('click', () => {
    if (menuBtn.getAttribute('aria-expanded') === 'true') closeMobileMenu();
    else openMobileMenu();
  });
  overlay.addEventListener('click', closeMobileMenu);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileMenu(); });
}

function setMobileMenu(open) {
  const menuBtn = el('menu-btn');
  el('sidebar').classList.toggle('sidebar--open', open);
  el('sidebar-overlay').hidden = !open;
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  menuBtn.innerHTML = open ? icons.close(22) : icons.menu(22);
  document.body.style.overflow = open ? 'hidden' : '';
}

const openMobileMenu  = () => setMobileMenu(true);
const closeMobileMenu = () => setMobileMenu(false);
