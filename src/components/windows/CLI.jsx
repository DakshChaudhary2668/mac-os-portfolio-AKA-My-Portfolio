import React from 'react'
import MacWindow from './MacWindow'
import "./CLI.scss"
import Terminal from 'react-console-emulator'

const portfolioCommands = {
  about: {
    description: 'Quick intro.',
    usage: 'about',
    fn: () =>
      'Hi, I am Daksh Chaudhary, a developer focused on building polished web experiences and practical products.',
  },
  skills: {
    description: 'List core skills.',
    usage: 'skills',
    fn: () =>
      'React, JavaScript, SCSS, Node.js, Express, SQL, Git, REST APIs, UI/UX prototyping',
  },
  projects: {
    description: 'Show featured projects.',
    usage: 'projects',
    fn: () =>
      [
        'Featured Projects:',
        '1) Scheds - Course Schedule Generator',
        '2) FinTrack - Personal Finance Dashboard',
        '3) SecureAuth - Backend Identity Service',
      ].join('\n'),
  },
  contact: {
    description: 'Show contact details.',
    usage: 'contact',
    fn: () => (
      <div>
        <p>Contact:</p>
        <p>Phone: +91-9119722668</p>
        <p>
          Email:{' '}
          <a href="mailto:dakshchaudhary2668@gmail.com" target="_blank" rel="noreferrer">
            dakshchaudhary2668@gmail.com
          </a>
        </p>
        <p>
          GitHub:{' '}
          <a href="https://github.com/DakshChaudhary2668" target="_blank" rel="noreferrer">
            github.com/DakshChaudhary2668
          </a>
        </p>
        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/daksh-chaudhary-2668-meerut/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/daksh-chaudhary-2668-meerut
          </a>
        </p>
      </div>
    ),
  },
  resume: {
    description: 'Show resume location in this portfolio.',
    usage: 'resume',
    fn: () => 'Resume: /Daksh_Chaudhary_Resume.pdf',
  },
  stack: {
    description: 'Show portfolio stack.',
    usage: 'stack',
    fn: () => 'Stack: React + Vite + SCSS + react-rnd + react-console-emulator',
  },
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <text>',
    fn: (...args) => args.join(' '),
  },
  hire: {
    description: 'Try: hire daksh',
    usage: 'hire <name>',
    fn: (...args) => {
      const candidate = args.join(' ').trim().toLowerCase()
      if (candidate === 'daksh') {
        return 'Great choice. You can reach Daksh via "contact".'
      }
      if (!candidate) {
        return 'Usage: hire daksh'
      }
      return `Currently only accepting: hire daksh`
    },
  },
}

const welcomeLines = [
  'Daksh Portfolio Terminal v1.0',
  'Explore my work from the command line.',
  'Quick start: type "help" and press Enter',
  'Commands: about | skills | projects | contact | resume | stack | hire | clear',
]

const CLI = ({ onClose, onMinimize, isClosing, isMinimizing }) => {
  return (
   <MacWindow width="50vw" height="56vh" onClose={onClose} isClosing={isClosing} isMinimizing={isMinimizing} onMinimize={onMinimize}>
      <div className="cli-window">
        <Terminal 
        commands={portfolioCommands}
        welcomeMessage={welcomeLines}
        promptLabel={"dakshchaudhary:~$ "}
        promptLabelStyle={{ color: '#00ff00', fontWeight: 600 }}
        styleEchoBack="labelOnly"
        />
        </div>
    </MacWindow>

  )
}

export default CLI
