# CodeChef → GitHub Progress Tracker

A Chrome extension that tracks the CodeChef problems you've solved, **categorizes
them by rating**, and syncs your solution files plus an auto-generated progress
dashboard to a GitHub repo of your choice.

## What it does

- Injects a small floating widget on CodeChef problem/status pages so you can
  sync a solved problem in one click.
- Best-effort auto-detects the problem code, name, and rating from the page,
  and can fetch your latest **Accepted** submission's source code directly
  from CodeChef (using your existing logged-in session — nothing is scraped
  outside your own browser).
- Everything is editable before syncing, and a **Manual Add** tab in the popup
  lets you paste in a problem/solution by hand if auto-detection misses
  something (CodeChef's page markup changes over time, so this is the reliable
  fallback).
- Pushes each solution to `Solutions/<rating-category>/<PROBLEMCODE>.<ext>` in
  your GitHub repo via the GitHub REST API.
- Regenerates `Solutions/README.md` after every sync — a running dashboard
  with totals per category and links to each solved problem.
- Rating categories are fully customizable (default buckets: 0-1199, 1200-1399,
  1400-1599, 1600-1799, 1800-1999, 2000-2199, 2200-2499, 2500-2999, 3000+,
  Unrated).

## Install (load unpacked)

1. Download/unzip this folder.
2. Open `chrome://extensions` in Chrome.
3. Turn on **Developer mode** (top-right toggle).
4. Click **Load unpacked** and select this folder.
5. Pin the extension from the puzzle-piece icon in the toolbar for quick access.

## Setup

1. Create (or pick) a GitHub repo to hold your solutions, e.g. `codechef-solutions`.
2. Create a GitHub **Personal Access Token**:
   - Go to GitHub → Settings → Developer settings → Personal access tokens →
     Fine-grained tokens (or classic tokens with the `repo` scope).
   - Grant it **Contents: Read and write** access to the repo you picked.
3. Click the extension icon → **Settings** tab:
   - Paste the token, your GitHub username (repo owner), repo name, branch
     (e.g. `main`), and root folder (default `Solutions`).
   - Optionally edit the rating category buckets (format: `label,min,max`,
     one per line).
   - Click **Save settings**, then **Test GitHub connection** to confirm it works.

The token is stored only in `chrome.storage.local` on your machine — it is
never sent anywhere except directly to `api.github.com`.

## Using it

**On CodeChef:**
- Open a problem you've solved (or its status page). A small "CodeChef →
  GitHub" panel appears bottom-right.
- Click **Fetch my latest Accepted solution** to auto-pull your AC code and
  language for that problem.
- Review/edit the problem code, name, rating, and language.
- Click **Sync to GitHub**.

**From the popup:**
- **Dashboard** tab: see total synced problems, counts per rating category,
  and a list of everything synced so far, each linking to its file on GitHub.
- **Manual Add** tab: paste in a problem's details and solution code directly
  if you'd rather not use the on-page widget.

## Notes & limitations

- CodeChef doesn't expose a stable public API for a user's full solved-problem
  history with ratings, so this extension relies on scraping the pages you
  visit (status page, viewsolution page, problem page) using your own
  logged-in session. Selectors have fallbacks but may need small tweaks if
  CodeChef redesigns those pages — the Manual Add tab always works regardless.
- Only one file per problem is kept (re-syncing overwrites the previous
  version in place, so your latest accepted solution is always what's in the repo).
- This runs entirely client-side in your browser; there is no external server.

## File structure

```
manifest.json      Extension manifest (MV3)
background.js       Service worker: GitHub API calls, storage, README generation
content.js          Injected widget + CodeChef page scraping
content.css         Widget styling
popup.html/.js/.css Settings + dashboard UI
categories.js       Shared rating→category logic (used by background & popup)
icons/              Toolbar icons
```
