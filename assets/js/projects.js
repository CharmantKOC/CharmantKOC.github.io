/** Section Projets */

import { projects } from './data.js';
import { el, esc, icons, resolveEmbedUrl } from './utils.js';

export function renderProjects() {
  const container = el('projects-content');
  if (!container) return;

  container.innerHTML = `
    <p class="section-note">Cliquez sur l'icône <span class="section-note__icon">${icons.laptopCode(17)}</span> pour consulter le dépôt GitHub du projet.</p>
    <div class="project-list">${projects.map(buildProject).join('')}</div>`;

  initLightbox(container);
}

function buildProject(p) {
  const repo = p.github_url
    ? `<a href="${esc(p.github_url)}" target="_blank" rel="noopener noreferrer" title="Dépôt GitHub" aria-label="Dépôt GitHub">${icons.laptopCode(19)}</a>`
    : `<span class="icon-off" title="Dépôt GitHub bientôt disponible">${icons.laptopCode(19)}</span>`;;

  const title = p.document_url
    ? `<a href="${esc(p.document_url)}" target="_blank" rel="noopener noreferrer">${esc(p.title)}</a>`
    : esc(p.title);

  const details = [];
  if (p.methods && p.methods.length) details.push(`<b>Méthodes :</b> ${p.methods.map(esc).join(', ')}`);
  if (p.tools && p.tools.length)     details.push(`<b>Outils :</b> ${p.tools.map(esc).join(', ')}`);

  const media = (p.media || []).map(mediaTile).join('');

  return `
    <article class="project" id="projet-${esc(p.id)}">
      <div class="project__icons">${repo}</div>
      <div class="project__body">
        <h3 class="project__title">${title}</h3>
        ${p.abstract ? `<p class="legend legend--abstract">${esc(p.abstract)}</p>` : ''}
        ${details.length ? `<p class="legend">${details.join(' &nbsp;|&nbsp; ')}</p>` : ''}
        ${media ? `<div class="project__media">${media}</div>` : ''}
      </div>
      ${p.date ? `<span class="entry__date">${esc(p.date)}</span>` : ''}
    </article>`;
}

/** Une image, une vidéo locale (.mp4, .webm) ou une vidéo YouTube / Vimeo, selon l'adresse fournie. */
function mediaTile(m) {
  const src = m.src || '';
  const caption = m.caption ? `<figcaption>${esc(m.caption)}</figcaption>` : '';
  let content;

  if (/\.(mp4|webm|ogv)$/i.test(src)) {
    content = `<video src="${esc(src)}" ${m.poster ? `poster="${esc(m.poster)}"` : ''} controls muted loop playsinline preload="metadata"></video>`;
  } else if (resolveEmbedUrl(src)) {
    content = `<iframe src="${resolveEmbedUrl(src)}" title="${esc(m.alt || 'Vidéo')}" loading="lazy" allowfullscreen></iframe>`;
  } else {
    content = `<img src="${esc(src)}" alt="${esc(m.alt || m.caption || '')}" loading="lazy" />`;
  }
  return `<figure class="media-item">${content}${caption}</figure>`;
}

/** Un clic sur une image l'affiche en grand. */
function initLightbox(container) {
  const dialog = document.createElement('dialog');
  dialog.className = 'lightbox';
  dialog.innerHTML = '<img alt="" />';
  document.body.appendChild(dialog);

  const big = dialog.querySelector('img');
  dialog.addEventListener('click', () => dialog.close());

  container.addEventListener('click', e => {
    const img = e.target.closest('.media-item img');
    if (!img) return;
    big.src = img.src;
    big.alt = img.alt;
    dialog.showModal();
  });
}
