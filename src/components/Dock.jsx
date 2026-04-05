import "./Dock.scss"; 

const Dock = ({ windowState, onToggleWindow }) => {
  const iconStateClass = (windowName) => {
    if (windowState[windowName].isOpen) return "active";
    if (windowState[windowName].isMinimized) return "minimized";
    return "";
  };

  return (
    <footer className="dock">
      <div
        className={`icon github ${iconStateClass("github")}`}
        onClick={() => onToggleWindow("github")}
      >
        <img src="/doc-icons/github.svg" alt="github" />
      </div>

      <div
        className={`icon cli ${iconStateClass("cli")}`}
        onClick={() => onToggleWindow("cli")}
      >
        <img src="/doc-icons/cli.svg" alt="cli" />
      </div>

      <div className="icon link"
      onClick={()=>{window.open('https://www.linkedin.com/in/daksh-chaudhary-2668-meerut/', '_blank')}}>
        <img src="/doc-icons/link.svg" alt="link" />
      </div>

      <div className="icon mail"
      onClick={()=>{window.open('mailto:dakshchaudhary2668@gmail.com', '_blank')}}>
        <img src="/doc-icons/mail.svg" alt="mail" />
      </div>

      <div
        className={`icon note ${iconStateClass("note")}`}
        onClick={() => onToggleWindow("note")}
      >
        <img src="/doc-icons/note.svg" alt="note" />
      </div>
      <div
        className={`icon spotify ${iconStateClass("spotify")}`}
        onClick={() => onToggleWindow("spotify")}
      >
        <img src="/doc-icons/spotify.svg" alt="spotify" />
      </div>

      <div className="icon calendar"
      onClick={()=>{window.open('https://calendar.google.com/calendar/u/0/r?tab=mc&pli=1', '_blank')}}>
        <img src="/doc-icons/calender.svg" alt="calendar" />
      </div>

      <div
        className={`icon pdf ${iconStateClass("resume")}`}
        onClick={() => onToggleWindow("resume")}
      >
        <img src="/doc-icons/pdf.svg" alt="pdf" />
      </div>

    </footer>
  );
};

export default Dock;
