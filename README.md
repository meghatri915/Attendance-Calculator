# Attendance Calculator

A simple desktop app (Tauri v2 + React + TypeScript) that calculates attendance
percentage from Total Working Days and Present Days, showing a green message
if attendance is 80% or above, and a red message if it's below.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm
- [Rust](https://www.rust-lang.org/tools/install) (stable toolchain)
- Tauri v2 system dependencies for your OS — follow the official guide:
  https://v2.tauri.app/start/prerequisites/

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the app in development mode:

   ```bash
   npm run tauri dev
   ```

   This launches the desktop window with hot reload.

## Build a production binary

```bash
npm run tauri build
```

The installable/executable output will be in `src-tauri/target/release/bundle/`.

## Usage

1. Enter **Total Working Days**.
2. Enter **Present Days**.
3. The app calculates the attendance percentage automatically:
   - **Green message** — attendance is 80% or above.
   - **Red message** — attendance is below 80%.

## Project structure

```
├── src/                # React + TypeScript frontend
│   ├── App.tsx          # Main UI and calculation logic
│   ├── App.css
│   └── main.tsx
├── src-tauri/           # Tauri (Rust) desktop shell
│   ├── src/main.rs
│   ├── Cargo.toml
│   └── tauri.conf.json
├── index.html
├── vite.config.ts
└── package.json
```
