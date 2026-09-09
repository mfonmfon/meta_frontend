import React from 'react'

export default function CampaignHeader({ onBack }) {
  return (
    <header className="ios-nav-header">
      <button className="nav-back-btn" onClick={onBack} aria-label="Back to Ads">
        <svg 
          className="back-chevron" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#000000" 
          strokeWidth="2.8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        <span className="back-text">Ads</span>
      </button>

      <h1 className="nav-title">Campaign</h1>

      {/* Spacer to keep title centered */}
      <div className="nav-right-placeholder"></div>
    </header>
  )
}
