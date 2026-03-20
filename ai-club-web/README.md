# AI Club Website

Club website built with pure HTML, CSS, and JavaScript — no build tools, no frameworks, no dependencies.

## Project Structure

```
ai-club/
├── index.html          # Main HTML — structure only
├── css/
│   └── style.css       # All styles & CSS variables
├── js/
│   ├── data.js         # Club data: members, projects, workshops
│   ├── render.js       # Functions that build DOM from data
│   └── app.js          # Navigation, theme toggle, cursor, modal
├── assets/             # Images, icons (add your own)
│   └── .gitkeep
└── README.md
```

## How to Update Content

All content lives in **`js/data.js`** — no need to touch HTML or CSS.

### Add a member
```js
{
  id: 7,                        // unique number
  name: 'Your Name',
  role: 'Your Role',
  bio: 'Short bio here.',
  photo: null,                  // null = show initials; or 'assets/photo.jpg'
}
```

### Add a project
```js
{
  emoji: '🚀',
  title: 'Project Name',
  tags: ['Tag1', 'Tag2'],
  desc: 'Short description.',
  team: 'Name1 · Name2',
  year: '2025',
  status: 'done',               // 'done' or 'wip'
  gradient: 'linear-gradient(135deg, #0f2027, #203a43)',
}
```

### Add a workshop
```js
{
  date: 'JUN 2025',
  name: 'Workshop Title',
  desc: 'Short description.',
  attendees: 30,
}
```

---

## Deploy to GitHub Pages

### First time setup

1. Create a new repository on GitHub (e.g. `ai-club`)
2. Push this folder to the `main` branch:

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ai-club.git
git push -u origin main
```

3. Go to your repo → **Settings** → **Pages**
4. Under **Source**, select `Deploy from a branch`
5. Choose branch: `main`, folder: `/ (root)`
6. Click **Save**

Your site will be live at:
`https://YOUR_USERNAME.github.io/ai-club/`

### Update the site later

```bash
git add .
git commit -m "update members"
git push
```

GitHub Pages auto-deploys within ~1 minute.

---

## What NOT to add for GitHub Pages

| ❌ Don't add | Why |
|---|---|
| Server-side code (Node, PHP, Python) | GitHub Pages is static only |
| `.env` files or API keys | Public repo = public keys |
| `node_modules/` folder | Add to `.gitignore` |
| Build output folders (`/dist`, `/.next`) | Unless that's what you're deploying |
| Large binary files | Slows down the repo |

## What's safe to add

| ✅ Do add | Notes |
|---|---|
| Images in `assets/` | Keep under ~500 KB each |
| More `.css` files in `css/` | Link them in `index.html` |
| More `.js` files in `js/` | Load order matters — add before `app.js` |
| `favicon.ico` | Place in root next to `index.html` |

---

## Local Development

No server needed. Just open `index.html` directly in your browser:

```bash
# Option 1: open directly
open index.html

# Option 2: use VS Code Live Server extension (recommended)
# Right-click index.html → Open with Live Server
```

> **Note:** Photo uploads via the edit modal work locally and in the browser,
> but changes are not saved to disk — they reset on page refresh.
> To make member photos permanent, save the image to `assets/` and
> set the `photo` field in `data.js` to `'assets/filename.jpg'`.
