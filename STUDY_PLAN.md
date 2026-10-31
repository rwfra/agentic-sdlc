# React Study Plan: Study Board

## Goal

Learn to create React applications by building Study Board, a moderately sized
study planner. Work through one phase at a time, performing the terminal
commands and code changes yourself.

The tutor will explain concepts, provide small exercises, review your results,
and help debug errors rather than implement the application for you.

## Application scope

- Organize study tasks by subject.
- Create, edit, and complete tasks.
- Search tasks and filter by status.
- Show study progress on a dashboard.
- Save data so it survives a page refresh.

## Technology

Use React, JavaScript, Vite, and plain CSS. Start without a backend so the focus
stays on React. Add browser persistence with localStorage later.

## Phases

| Phase | Deliverable | Concepts |
|---|---|---|
| 1. Setup | A running starter app | Node, npm, Vite, project structure |
| 2. Static interface | Dashboard and sample task cards | JSX, components, props, CSS |
| 3. Interaction | Add and complete tasks | State, events, controlled forms |
| 4. Organization | Editing, subjects, search, filters | Derived data, immutable updates |
| 5. Persistence | Save and restore the planner | Effects, localStorage, error handling |
| 6. Polish and verification | Accessible, tested, production-ready app | Testing, empty states, production builds |

## Phase 1: Set up and understand the app

**Goal:** Run React locally and understand what starts it.

### Step 1: Check your tools

Run:

```bash
node --version
npm --version
```

Use Node.js 24 LTS for this lesson. If Node is missing, install that version
from https://nodejs.org/, reopen your terminal, and repeat the checks.

Node runs development tools; npm installs packages and runs project scripts.
The React interface runs in the browser.

### Step 2: Generate the project

From the directory where you keep your projects, run these commands one at a
time. If `study-board` already exists, do not scaffold over it; continue from the
appropriate step.

```bash
npm create vite@latest study-board -- --template react
cd study-board
npm install
npm run dev
```

If the scaffolder offers an experimental option, decline it. If a command
fails, stop and share the error rather than continuing.

Open the local URL printed by Vite. Leave the terminal running while you
develop.

- The first command generates a React project.
- `npm install` downloads its dependencies.
- `npm run dev` starts Vite's development server.

### Step 3: Explore before editing

Locate these files in your editor:

| File | Purpose |
|---|---|
| `package.json` | Dependencies and available scripts |
| `index.html` | HTML entry page and the element React mounts into |
| `src/main.jsx` | JavaScript entry module that connects React to that element |
| `src/App.jsx` | App component containing the starter interface |
| `src/App.css` and `src/index.css` | Appearance and layout |

Trace the path: **HTML page -> JavaScript entry -> App component**.

Inspect `.gitignore`. Exclude dependencies, build output, local-only files,
and secrets. Never put secrets in frontend code: environment variables exposed
to React are readable by users.

### Step 4: Make your first independent change

Find the visible starter heading in `src/App.jsx` and replace it with:

```jsx
<h1>Study Board</h1>
```

Save and watch the browser update automatically.

**Mini-exercise:** Add a paragraph below the heading describing what the
planner will do. Keep the surrounding JSX valid.

### Checkpoint

- [X] The app loads at Vite's local URL.
- [X] The new heading and description appear.
- [X] You can identify the App component and entry module.

Share your Node version, whether the app runs, and the component code you
changed, or the exact error encountered, before moving to Phase 2.

## Phase 2: Build the static interface

**Goal:** Create a dashboard and sample task cards before adding interaction.

Learn JSX, component composition, props, and basic CSS. Break the interface
into small components and render sample tasks.

**Checkpoint:** Explain which data each component receives and show a readable
dashboard with sample task cards.

## Phase 3: Add interaction

**Goal:** Add tasks through a form and mark tasks complete.

Learn state, event handlers, and controlled form inputs. Keep task data in
React state and update it without mutating existing objects or arrays.

**Checkpoint:** Add a task and toggle its completion through the interface.

## Phase 4: Organize tasks

**Goal:** Support editing, subjects, search, and status filters.

Learn immutable updates and derive visible tasks from the underlying task
data rather than storing duplicate filtered lists.

**Checkpoint:** Edit tasks and combine search and status filters without
losing the underlying data.

## Phase 5: Persist the planner

**Goal:** Save and restore data using localStorage.

Learn effects, serialization, and explicit handling of storage failures or
invalid saved data.

**Checkpoint:** Tasks survive a page refresh, and storage errors are surfaced
clearly.

## Phase 6: Polish and verify

**Goal:** Make the app accessible, tested, and ready for a production build.

Review labels, keyboard interaction, empty states, and responsive layout.
Add focused behavior tests and run the project's lint and build scripts.

**Checkpoint:** Core task workflows work, the interface is usable with a
keyboard, and tests, lint, and the production build pass.

## Learning workflow

1. Read the current phase's explanation.
2. Perform a small operation yourself.
3. Observe the result and explain what changed.
4. Share the result or exact error with the tutor.
5. Resolve questions before proceeding to the next phase.

Do not skip ahead to a finished implementation. The objective is to understand
and repeat the setup and development process independently.
