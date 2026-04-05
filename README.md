![Banner](./public/banner.png)

# macOS Portfolio

A macOS-inspired portfolio built with React and Vite. The interface behaves like a lightweight desktop, with dock-driven navigation, draggable windows, and app-style interactions instead of a standard scrolling landing page.

## Features

- Draggable app windows with macOS-style controls
- Dock navigation for opening, closing, minimizing, and restoring apps
- Built-in terminal experience with custom commands
- GitHub projects view powered by `src/assets/github.json`
- Resume viewer using an embedded PDF
- Notes app with rendered text content
- Spotify window integration
- Rotation prompt for smaller mobile screens

## Tech Stack

- React 19
- Vite
- Sass
- `react-rnd`
- `react-console-emulator`
- `react-markdown`

## Getting Started

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal to view the portfolio.

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Project Structure

```text
src/
  App.jsx
  app.scss
  assets/
    github.json
  components/
    Dock.jsx
    Nav.jsx
    Note.jsx
    Spotify.jsx
    windows/
      CLI.jsx
      Github.jsx
      MacWindow.jsx
      Resume.jsx
public/
  Daksh_Chaudhary_Resume.pdf
  note.txt
```

## Customization

- Update project data in `src/assets/github.json`
- Replace the resume file in `public/Daksh_Chaudhary_Resume.pdf`
- Adjust note content in `public/note.txt`
- Update branding and visuals in the `public/` assets folder

## Deployment

This project can be deployed on any static hosting platform that supports Vite builds, including Vercel and Netlify.

Build output:

```bash
npm run build
```

Generated files will be available in `dist/`.
