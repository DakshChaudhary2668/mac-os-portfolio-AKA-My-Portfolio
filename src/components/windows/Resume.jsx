import React from 'react'
import MacWindow from './MacWindow'
import "../Resume.scss"

const Resume = ({ onClose, onMinimize, isClosing, isMinimizing }) => {
  return (
    <MacWindow width="54vw" height="76vh" onClose={onClose} isClosing={isClosing} isMinimizing={isMinimizing} onMinimize={onMinimize}>
        <div className="resume">
            <embed
              src="/Daksh_ChaudharyResume.pdf"
              type="application/pdf"
              title="Resume PDF"
              width="100%"
              height="100%"
            />
        </div>
    </MacWindow>
  )
}

export default Resume
