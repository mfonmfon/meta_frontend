import React, { useState } from 'react'

export default function DesktopDeviceFrame({ children }) {
  const [deviceMode, setDeviceMode] = useState('phone') // 'phone' | 'fluid'
  const [zoomLevel, setZoomLevel] = useState(100)

  return (
    <div className={`app-viewport-wrapper mode-${deviceMode}`}>
      {/* Top Floating Control Bar for Review & Testing */}
      <div className="preview-toolbar">
        <div className="toolbar-brand">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#0064e0">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          <span className="toolbar-title">Meta Ads Manager • Pixel-Perfect Replica</span>
        </div>

        <div className="toolbar-controls">
          <div className="view-mode-toggle">
            <button 
              className={`mode-btn ${deviceMode === 'phone' ? 'active' : ''}`}
              onClick={() => setDeviceMode('phone')}
            >
              📱 iPhone Frame
            </button>
            <button 
              className={`mode-btn ${deviceMode === 'fluid' ? 'active' : ''}`}
              onClick={() => setDeviceMode('fluid')}
            >
              🖥 Full View
            </button>
          </div>
        </div>
      </div>

      {/* Frame Container */}
      <div className="device-stage">
        {deviceMode === 'phone' ? (
          <div className="iphone-outer-chassis" style={{ transform: `scale(${zoomLevel / 100})` }}>
            {/* Realistic iPhone Bezel & Buttons */}
            <div className="iphone-button volume-up"></div>
            <div className="iphone-button volume-down"></div>
            <div className="iphone-button power-button"></div>

            <div className="iphone-screen">
              {children}
              {/* Home Indicator */}
              <div className="ios-home-indicator-wrap">
                <div className="ios-home-indicator"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="fluid-screen-container">
            {children}
            <div className="ios-home-indicator-wrap">
              <div className="ios-home-indicator"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
