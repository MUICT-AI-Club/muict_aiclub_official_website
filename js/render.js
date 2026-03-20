/**
 * render.js — Functions that build DOM elements from data.
 * Depends on: data.js (must be loaded before this file)
 */

/** Returns 1-2 uppercase initials from a name */
function getInitials(name) {
  return name.split(' ').map((w) => w[0]).join('').toUpperCase().slice(0, 2);
}

/** Builds LinkedIn + GitHub icon links for a member */
function buildSocialLinks(member) {
  const links = [];

  if (member.linkedin) {
    links.push(`<button class="social-link" onclick="window.open('${member.linkedin}','_blank')" title="LinkedIn">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
      IN
    </button>`);
  }

  if (member.github) {
    links.push(`<button class="social-link" onclick="window.open('${member.github}','_blank')" title="GitHub">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
      GH
    </button>`);
  }

  return links.length
    ? `<div class="member-socials">${links.join('')}</div>`
    : '';
}

/**
 * Builds a single member card element.
 * @param {object} member
 * @param {number} index - for staggered animation delay
 * @param {boolean} isAlumni - renders a slightly muted alumni style
 */
function buildMemberCard(member, index, isAlumni = false) {
  const card = document.createElement('div');
  card.className = 'member-card' + (isAlumni ? ' alumni-card' : '');
  card.style.transitionDelay = `${index * 0.08}s`;

  const avatarInner = member.photo
    ? `<img src="${member.photo}" alt="${member.name}">`
    : getInitials(member.name);

  const gradBadge = (isAlumni && member.gradYear)
    ? `<div class="grad-badge">CLASS OF ${member.gradYear}</div>`
    : '';

  card.innerHTML = `
    <div class="member-avatar">${avatarInner}</div>
    ${gradBadge}
    <div class="member-name">${member.name}</div>
    <div class="member-role">${member.role}</div>
    <div class="member-bio">${member.bio}</div>
    ${buildSocialLinks(member)}
  `;
  return card;
}

/** Builds a single project card element */
function buildProjectCard(project, index) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.style.transitionDelay = `${index * 0.08}s`;

  const tags = project.tags.map((t) => `<span class="tag">${t}</span>`).join('');
  const statusClass = project.status === 'done' ? 'status-done' : 'status-wip';
  const statusLabel = project.status === 'done' ? 'COMPLETE' : 'IN PROGRESS';
  const thumbStyle = project.gradient ? `style="background: ${project.gradient}"` : '';

  card.innerHTML = `
    <div class="project-thumb" ${thumbStyle}>${project.emoji}</div>
    <div class="project-body">
      <div class="project-tags">${tags}</div>
      <div class="project-name">${project.title}</div>
      <div class="project-desc">${project.desc}</div>
      <div class="project-meta">
        <span>${project.team} · ${project.year}</span>
        <span class="project-status ${statusClass}">${statusLabel}</span>
      </div>
    </div>
  `;
  return card;
}

/** Builds a single workshop card element */
function buildWorkshopCard(workshop, index) {
  const card = document.createElement('div');
  card.className = 'workshop-card';
  card.style.transitionDelay = `${index * 0.08}s`;

  const registerBtn = workshop.registerUrl
    ? `<a href="${workshop.registerUrl}" target="_blank" rel="noopener" class="workshop-register-btn">REGISTER</a>`
    : `<div class="workshop-count">${workshop.attendees}<br><span>ATTENDED</span></div>`;

  card.innerHTML = `
    <div class="workshop-date">${workshop.date}</div>
    <div class="workshop-divider"></div>
    <div class="workshop-info">
      <div class="workshop-name">${workshop.name}</div>
      <div class="workshop-desc">${workshop.desc}</div>
    </div>
    ${registerBtn}
  `;
  return card;
}

/** Animates cards into view with a short delay */
function revealCards(cards) {
  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add('visible'), 60 + i * 100);
  });
}

/** Renders current + alumni members into their respective grids */
function renderMembers() {
  const currentGrid = document.getElementById('currentMembersGrid');
  const alumniGrid  = document.getElementById('alumniMembersGrid');

  const current = members.filter((m) => m.status !== 'alumni');
  const alumni  = members.filter((m) => m.status === 'alumni');

  // Current members
  currentGrid.innerHTML = '';
  const currentCards = current.map((m, i) => buildMemberCard(m, i, false));
  currentCards.forEach((c) => currentGrid.appendChild(c));
  revealCards(currentCards);

  // Alumni
  alumniGrid.innerHTML = '';
  const alumniCards = alumni.map((m, i) => buildMemberCard(m, i, true));
  alumniCards.forEach((c) => alumniGrid.appendChild(c));
  // Reveal alumni with a slight offset so current cards finish first
  setTimeout(() => revealCards(alumniCards), current.length * 100);

  // Hide alumni section entirely if no alumni yet
  const alumniSection = document.querySelector('.alumni-divider');
  const alumniSub     = document.querySelector('.section-sub');
  const show = alumni.length > 0;
  if (alumniSection) alumniSection.style.display = show ? '' : 'none';
  if (alumniSub)     alumniSub.style.display     = show ? '' : 'none';
  if (alumniGrid)    alumniGrid.style.display     = show ? '' : 'none';
}

/** Renders all projects into #projectsGrid */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';
  const cards = projects.map((p, i) => buildProjectCard(p, i));
  cards.forEach((c) => grid.appendChild(c));
  revealCards(cards);
}

/** Renders featured projects on home page */
function renderFeatured() {
  const grid = document.getElementById('homeFeatured');
  if (!grid) return;
  grid.innerHTML = '';
  const cards = projects.slice(0, 3).map((p, i) => buildProjectCard(p, i));
  cards.forEach((c) => grid.appendChild(c));
  revealCards(cards);
}

/** Renders all workshops */
function renderWorkshops() {
  const grid = document.getElementById('workshopsGrid');
  grid.innerHTML = '';
  const cards = workshops.map((w, i) => buildWorkshopCard(w, i));
  cards.forEach((c) => grid.appendChild(c));
  revealCards(cards);
}
