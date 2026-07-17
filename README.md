* { box-sizing: border-box; }

body {
  width: 340px;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: #16161f;
  color: #f2f2f7;
  font-size: 13px;
}

.tabs {
  display: flex;
  border-bottom: 1px solid #2a2a3d;
}

.tab-btn {
  flex: 1;
  background: transparent;
  border: none;
  color: #b8b8c8;
  padding: 10px 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  border-bottom: 2px solid transparent;
}

.tab-btn.active {
  color: #f2f2f7;
  border-bottom: 2px solid #6c47ff;
}

.tab-panel {
  display: none;
  padding: 12px;
  max-height: 480px;
  overflow-y: auto;
}

.tab-panel.active {
  display: block;
}

label {
  display: block;
  margin-bottom: 10px;
  color: #b8b8c8;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

input, textarea {
  width: 100%;
  margin-top: 4px;
  background: #2a2a3d;
  border: 1px solid #3d3d54;
  border-radius: 6px;
  color: #f2f2f7;
  padding: 7px 8px;
  font-family: inherit;
  font-size: 12px;
  text-transform: none;
}

textarea {
  font-family: "SF Mono", Consolas, monospace;
  resize: vertical;
}

.hint {
  color: #888a9e;
  font-size: 11px;
  margin-bottom: 10px;
  line-height: 1.4;
}

.btn {
  width: 100%;
  padding: 9px 10px;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 8px;
  font-size: 12px;
}

.btn-primary { background: #6c47ff; color: white; }
.btn-secondary { background: #3d3d54; color: #f2f2f7; }

.status {
  font-size: 11px;
  color: #b8b8c8;
  min-height: 14px;
}

.summary {
  display: flex;
  justify-content: space-between;
  background: #20202e;
  border-radius: 8px;
  padding: 10px 12px;
  margin-bottom: 10px;
}

.summary .num {
  font-size: 20px;
  font-weight: 700;
}

.summary .label {
  color: #b8b8c8;
  font-size: 11px;
}

.cat-list {
  margin-bottom: 10px;
}

.cat-row {
  display: flex;
  justify-content: space-between;
  padding: 5px 8px;
  background: #20202e;
  border-radius: 6px;
  margin-bottom: 4px;
  font-size: 12px;
}

.cat-row .count {
  color: #6c47ff;
  font-weight: 700;
}

.problem-list {
  max-height: 200px;
  overflow-y: auto;
}

.problem-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 8px;
  border-bottom: 1px solid #2a2a3d;
  font-size: 12px;
}

.problem-row .code {
  font-weight: 700;
}

.problem-row .meta {
  color: #888a9e;
  font-size: 10px;
}

.problem-row a {
  color: #8f7bff;
  text-decoration: none;
  font-size: 11px;
}

.empty {
  color: #888a9e;
  text-align: center;
  padding: 20px 0;
}
