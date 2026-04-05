import React, { useEffect, useState } from 'react'
import { Rnd } from 'react-rnd'
import "./MacWindow.scss"

const MacWindow = ({
  children,
  width = '42vw',
  height = '58vh',
  onClose,
  onMinimize,
  isClosing = false,
  isMinimizing = false,
}) => {
  const [isCompactViewport, setIsCompactViewport] = useState(false)

  useEffect(() => {
    const updateViewportMode = () => {
      setIsCompactViewport(window.innerWidth <= 900 || window.innerHeight <= 520)
    }

    updateViewportMode()
    window.addEventListener('resize', updateViewportMode)
    return () => window.removeEventListener('resize', updateViewportMode)
  }, [])

  const defaultBounds = isCompactViewport
    ? {
        x: 8,
        y: 46,
        width: '94vw',
        height: '72dvh',
      }
    : {
        x: 100,
        y: 100,
        width,
        height,
      }

  return (
    <Rnd
      default={defaultBounds}
      bounds="parent"
      className="mac-window"
      dragHandleClassName="nav"
      cancel=".dot,.window-action"
      enableResizing={
        isCompactViewport
          ? false
          : {
              top: true,
              right: true,
              bottom: true,
              left: true,
              topRight: true,
              bottomRight: true,
              bottomLeft: true,
              topLeft: true,
            }
      }
      minWidth={isCompactViewport ? 260 : 500}
      minHeight={isCompactViewport ? 180 : 300}
    >
      <div
        className={`window ${
          isMinimizing ? 'window--minimizing' : isClosing ? 'window--closing' : 'window--open'
        }`}
      >
        <div className="nav">
          <div className="dots">
            <button
              type="button"
              className="dot red window-action"
              onMouseDown={(event) => event.stopPropagation()}
              onTouchStart={(event) => event.stopPropagation()}
              onClick={() => {
                if (onClose) onClose()
              }}
              aria-label="Close window"
            ></button>
            <button
              type="button"
              className="dot yellow window-action"
              onMouseDown={(event) => event.stopPropagation()}
              onTouchStart={(event) => event.stopPropagation()}
              onClick={() => {
                if (onMinimize) onMinimize()
              }}
              aria-label="Minimize window"
            ></button>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>dakshchaudhary - -zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  )
}

export default MacWindow
