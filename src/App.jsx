import "./app.scss"
import { useEffect, useRef, useState } from "react";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Note from "./components/Note";
import Github from "./components/windows/Github";
import Resume from "./components/windows/Resume";
import Spotify from "./components/Spotify"; 
import CLI from "./components/windows/CLI";

const CLOSE_ANIMATION_MS = 220;
const MINIMIZE_ANIMATION_MS = 240;

function App() {
  const [windowState, setWindowState] = useState({
    github: { isOpen: false, isClosing: false, isMinimized: false, isMinimizing: false },
    note: { isOpen: false, isClosing: false, isMinimized: false, isMinimizing: false },
    resume: { isOpen: false, isClosing: false, isMinimized: false, isMinimizing: false },
    spotify: { isOpen: false, isClosing: false, isMinimized: false, isMinimizing: false },
    cli: { isOpen: false, isClosing: false, isMinimized: false, isMinimizing: false },
  });
  const closeTimersRef = useRef({});

  useEffect(() => {
    const timers = closeTimersRef.current;
    return () => {
      Object.values(timers).forEach((timer) => {
        clearTimeout(timer);
      });
    };
  }, []);

  const openWindow = (windowName) => {
    clearTimeout(closeTimersRef.current[windowName]);
    setWindowState((prev) => ({
      ...prev,
      [windowName]: { isOpen: true, isClosing: false, isMinimized: false, isMinimizing: false },
    }));
  };

  const closeWindow = (windowName) => {
    clearTimeout(closeTimersRef.current[windowName]);
    setWindowState((prev) => ({
      ...prev,
      [windowName]: { ...prev[windowName], isClosing: true, isMinimizing: false, isMinimized: false },
    }));

    closeTimersRef.current[windowName] = setTimeout(() => {
      setWindowState((prev) => ({
        ...prev,
        [windowName]: { isOpen: false, isClosing: false, isMinimized: false, isMinimizing: false },
      }));
    }, CLOSE_ANIMATION_MS);
  };

  const minimizeWindow = (windowName) => {
    clearTimeout(closeTimersRef.current[windowName]);
    setWindowState((prev) => ({
      ...prev,
      [windowName]: { ...prev[windowName], isMinimizing: true, isClosing: false },
    }));

    closeTimersRef.current[windowName] = setTimeout(() => {
      setWindowState((prev) => ({
        ...prev,
        [windowName]: { isOpen: false, isClosing: false, isMinimized: true, isMinimizing: false },
      }));
    }, MINIMIZE_ANIMATION_MS);
  };

  const toggleWindow = (windowName) => {
    if (windowState[windowName].isMinimized) {
      openWindow(windowName);
      return;
    }
    if (!windowState[windowName].isOpen) {
      openWindow(windowName);
      return;
    }
    if (!windowState[windowName].isClosing && !windowState[windowName].isMinimizing) {
      closeWindow(windowName);
    }
  };

  return (
    <main>
      <Dock windowState={windowState} onToggleWindow={toggleWindow} />
      <Nav />
      {windowState.github.isOpen && (
        <Github
          onClose={() => closeWindow("github")}
          onMinimize={() => minimizeWindow("github")}
          isClosing={windowState.github.isClosing}
          isMinimizing={windowState.github.isMinimizing}
        />
      )}
      {windowState.note.isOpen && (
        <Note
          onClose={() => closeWindow("note")}
          onMinimize={() => minimizeWindow("note")}
          isClosing={windowState.note.isClosing}
          isMinimizing={windowState.note.isMinimizing}
        />
      )}
      {windowState.resume.isOpen && (
        <Resume
          onClose={() => closeWindow("resume")}
          onMinimize={() => minimizeWindow("resume")}
          isClosing={windowState.resume.isClosing}
          isMinimizing={windowState.resume.isMinimizing}
        />
      )}
      {windowState.spotify.isOpen && (
        <Spotify
          onClose={() => closeWindow("spotify")}
          onMinimize={() => minimizeWindow("spotify")}
          isClosing={windowState.spotify.isClosing}
          isMinimizing={windowState.spotify.isMinimizing}
        />
      )}
      {windowState.cli.isOpen && (
        <CLI
          onClose={() => closeWindow("cli")}
          onMinimize={() => minimizeWindow("cli")}
          isClosing={windowState.cli.isClosing}
          isMinimizing={windowState.cli.isMinimizing}
        />
      )}
    </main>
  );
}

export default App
