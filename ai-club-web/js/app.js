/**
 * app.js — Core application logic.
 * Handles: page routing, theme toggle, cursor, edit modal, stats counter.
 * Depends on: data.js, render.js (must be loaded before this file)
 */

/* ============================================================
   Hero Stats — auto-count from data arrays
   ============================================================ */

function animateCount(el, target, duration) {
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function updateHeroStats() {
  const elMembers   = document.getElementById('statMembers');
  const elProjects  = document.getElementById('statProjects');
  const elWorkshops = document.getElementById('statWorkshops');

  const currentCount = members.filter((m) => m.status !== 'alumni').length;
  if (elMembers)   animateCount(elMembers,   currentCount,     800);
  if (elProjects)  animateCount(elProjects,  projects.length,  800);
  if (elWorkshops) animateCount(elWorkshops, workshops.length, 800);
}

/* ============================================================
   Form Links — pull URLs from config in data.js
   ============================================================ */

function updateFormLinks() {
  const joinLink = document.getElementById('joinFormLink');
  const workshopLink = document.getElementById('workshopFormLink');

  if (joinLink && config.joinFormUrl) {
    joinLink.href = config.joinFormUrl;
  }
  if (workshopLink && config.workshopFormUrl) {
    workshopLink.href = config.workshopFormUrl;
  }
}

/* ============================================================
   Page Routing
   ============================================================ */

function showPage(pageId, navLink) {
  document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach((a) => a.classList.remove('active'));

  const target = document.getElementById(`page-${pageId}`);
  if (target) target.classList.add('active');
  if (navLink) navLink.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  const renderers = {
    home: renderFeatured,
    members: renderMembers,
    projects: renderProjects,
    workshops: renderWorkshops,
  };

  if (renderers[pageId]) renderers[pageId]();
}

/* ============================================================
   Theme Toggle
   ============================================================ */

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.dataset.theme === 'dark';
  html.dataset.theme = isDark ? 'light' : 'dark';
  document.getElementById('themeBtn').textContent = isDark ? '◑ DARK' : '◐ LIGHT';
}

/* ============================================================
   Custom Cursor
   ============================================================ */

(function initCursor() {
  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let cx = 0, cy = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', (e) => {
    cx = e.clientX;
    cy = e.clientY;
    dot.style.left = cx + 'px';
    dot.style.top  = cy + 'px';
  });

  (function animateRing() {
    rx += (cx - rx) * 0.15;
    ry += (cy - ry) * 0.15;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

  const interactiveSelector = 'a, button, .member-edit-btn, .btn, .theme-toggle, .social-link, .workshop-register-btn';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      dot.classList.add('hover');
      ring.classList.add('hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      dot.classList.remove('hover');
      ring.classList.remove('hover');
    }
  });
})();

/* ============================================================
   Edit Member Modal
   ============================================================ */

let _editingId   = null;
let _editPhotoData = null;

function openEdit(memberId) {
  _editingId    = memberId;
  _editPhotoData = null;

  const member = members.find((m) => m.id === memberId);
  if (!member) return;

  document.getElementById('editName').value     = member.name;
  document.getElementById('editRole').value     = member.role;
  document.getElementById('editBio').value      = member.bio;
  document.getElementById('editLinkedin').value = member.linkedin || '';
  document.getElementById('editGithub').value   = member.github   || '';
  document.getElementById('photoInput').value   = '';

  const preview = document.getElementById('modalAvatarPreview');
  preview.innerHTML = member.photo
    ? `<img src="${member.photo}" alt="${member.name}">`
    : `<span style="font-size:22px;color:var(--accent)">${getInitials(member.name)}</span>`;

  document.getElementById('editModal').classList.add('open');
}

function closeModal() {
  document.getElementById('editModal').classList.remove('open');
  _editingId    = null;
  _editPhotoData = null;
}

function saveEdit() {
  const member = members.find((m) => m.id === _editingId);
  if (!member) return;

  const nameVal     = document.getElementById('editName').value.trim();
  const roleVal     = document.getElementById('editRole').value.trim();
  const bioVal      = document.getElementById('editBio').value.trim();
  const linkedinVal = document.getElementById('editLinkedin').value.trim();
  const githubVal   = document.getElementById('editGithub').value.trim();

  if (nameVal)     member.name     = nameVal;
  if (roleVal)     member.role     = roleVal;
  if (bioVal)      member.bio      = bioVal;
  member.linkedin = linkedinVal;
  member.github   = githubVal;
  if (_editPhotoData) member.photo = _editPhotoData;

  closeModal();
  renderMembers();
}

document.getElementById('photoInput').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (ev) {
    _editPhotoData = ev.target.result;
    const preview = document.getElementById('modalAvatarPreview');
    preview.innerHTML = `<img src="${_editPhotoData}" alt="preview">`;
  };
  reader.readAsDataURL(file);
});

document.getElementById('editModal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

/* ============================================================
   Init
   ============================================================ */

updateHeroStats();
updateFormLinks();
renderFeatured();
