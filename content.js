<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>CodeChef → GitHub Tracker</title>
  <link rel="stylesheet" href="popup.css" />
</head>
<body>
  <div class="tabs">
    <button class="tab-btn active" data-tab="dashboard">Dashboard</button>
    <button class="tab-btn" data-tab="add">Manual Add</button>
    <button class="tab-btn" data-tab="settings">Settings</button>
  </div>

  <section id="dashboard" class="tab-panel active">
    <div class="summary" id="summary"></div>
    <div class="cat-list" id="catList"></div>
    <div class="problem-list" id="problemList"></div>
  </section>

  <section id="add" class="tab-panel">
    <p class="hint">Use this if you'd rather add a solved problem manually instead of using the on-page widget.</p>
    <label>Problem code<input id="addCode" type="text" placeholder="e.g. TLE" /></label>
    <label>Problem name<input id="addName" type="text" placeholder="e.g. Chef and Sums" /></label>
    <label>Rating<input id="addRating" type="number" placeholder="e.g. 1600" /></label>
    <label>Language<input id="addLang" type="text" placeholder="e.g. C++17" /></label>
    <label>Solution code<textarea id="addCodeArea" rows="6" placeholder="Paste your accepted solution here"></textarea></label>
    <button id="addSyncBtn" class="btn btn-primary">Sync to GitHub</button>
    <div class="status" id="addStatus"></div>
  </section>

  <section id="settings" class="tab-panel">
    <label>GitHub Personal Access Token
      <input id="ghToken" type="password" placeholder="ghp_..." />
    </label>
    <p class="hint">Needs the <code>repo</code> scope. Stored locally in your browser only.</p>

    <label>Repo owner<input id="repoOwner" type="text" placeholder="your-github-username" /></label>
    <label>Repo name<input id="repoName" type="text" placeholder="codechef-solutions" /></label>
    <label>Branch<input id="branch" type="text" placeholder="main" /></label>
    <label>Root folder<input id="folderRoot" type="text" placeholder="Solutions" /></label>

    <div class="hint" id="categoryEditorLabel">Rating categories (label,min,max — one per line)</div>
    <textarea id="categoryEditor" rows="6"></textarea>

    <button id="saveSettingsBtn" class="btn btn-primary">Save settings</button>
    <button id="testConnBtn" class="btn btn-secondary">Test GitHub connection</button>
    <div class="status" id="settingsStatus"></div>
  </section>

  <script src="categories.js"></script>
  <script src="popup.js"></script>
</body>
</html>
