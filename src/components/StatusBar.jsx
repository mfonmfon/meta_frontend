import React from 'react'

export default function StatusBar({ time = '11:23' }) {
  return (
    <div className="ios-status-bar">
      <div className="status-time">{time}</div>
      <div className="status-icons">
        {/* Signal Bars (4 bars) */}
        <div className="signal-bars" title="Cellular Signal">
          <span className="bar bar-1"></span>
          <span className="bar bar-2"></span>
          <span className="bar bar-3"></span>
          <span className="bar bar-4"></span>
        </div>

        {/* LTE Text */}
        <span className="lte-text">LTE</span>

        {/* Battery Icon */}
        <div className="battery-icon" title="Battery 85%">
          <div className="battery-body">
            <div className="battery-level" style={{ width: '85%' }}></div>
          </div>
          <div className="battery-cap"></div>
        </div>
      </div>
    </div>
  )
}
