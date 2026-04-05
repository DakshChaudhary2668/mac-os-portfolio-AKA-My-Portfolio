import React, { useState, useEffect } from 'react'
import MacWindow from './windows/MacWindow'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import "./note.scss"

const Note = ({ onClose, onMinimize, isClosing, isMinimizing }) => {

    const [ markdown, setMarkdown ] = useState(null)

    useEffect(() => {
        let isCancelled = false
        fetch('/note.txt')
            .then(res => res.text())
            .then(text => {
              if (!isCancelled) setMarkdown(text)
            })
            .catch(() => {
              if (!isCancelled) setMarkdown("Unable to load note.txt")
            })

        return () => {
          isCancelled = true
        }
    }, [])




  return (
    <MacWindow
      width="48vw"
      height="62vh"
      onClose={onClose}
      onMinimize={onMinimize}
      isClosing={isClosing}
      isMinimizing={isMinimizing}
    >
      <div className="note-window">
        {markdown ? <SyntaxHighlighter style={atelierDuneDark}>{markdown}</SyntaxHighlighter> : <p>Loading...</p>}
      </div>
    </MacWindow>
  )
}

export default Note
