import React from 'react'

export default function Toast({ message, visible }) {
  if (!visible) return null

  return (
    <div className="ios-toast-container">
      <div className="ios-toast-content">
        <span className="toast-icon">✓</span>
        <span>{message}</span>
      </div>
    </div>
  )
}
