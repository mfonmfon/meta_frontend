import React from 'react'

export default function SetupSection({ 
  budget = "NGN4,000.00 NGN per day, Highest Volume",
  schedule = "Aug 30 - ongoing",
  campaignId = "52670230394310",
  adAccount = "1436050481903275",
  onEditBudget,
  onCopyId
}) {
  return (
    <section className="app-section setup-section">
      <h3 className="section-heading">Setup</h3>

      <div className="card-container setup-card">
        {/* Row 1: Budget */}
        <div className="setup-row" onClick={onEditBudget} role="button" tabIndex={0}>
          <div className="setup-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1c1e21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="5" width="20" height="14" rx="2"></rect>
              <line x1="2" y1="10" x2="22" y2="10"></line>
            </svg>
          </div>
          <div className="setup-text-wrap">
            <h4 className="setup-item-title">Budget</h4>
            <p className="setup-item-subtitle">{budget}</p>
          </div>
          <button 
            className="setup-edit-btn" 
            onClick={(e) => { e.stopPropagation(); onEditBudget(); }}
            aria-label="Edit Budget"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1c1e21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
            </svg>
          </button>
        </div>

        <div className="row-divider"></div>

        {/* Row 2: Schedule */}
        <div className="setup-row">
          <div className="setup-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1c1e21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
              <line x1="8" y1="14" x2="8" y2="18"></line>
              <line x1="12" y1="14" x2="12" y2="18"></line>
              <line x1="16" y1="14" x2="16" y2="18"></line>
            </svg>
          </div>
          <div className="setup-text-wrap">
            <h4 className="setup-item-title">Schedule</h4>
            <p className="setup-item-subtitle">{schedule}</p>
          </div>
        </div>

        <div className="row-divider"></div>

        {/* Row 3: Campaign ID */}
        <div 
          className="setup-row clickable-row" 
          onClick={() => onCopyId(campaignId, 'Campaign ID')}
          title="Click to copy Campaign ID"
        >
          <div className="setup-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1c1e21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="9" x2="20" y2="9"></line>
              <line x1="4" y1="15" x2="20" y2="15"></line>
              <line x1="10" y1="3" x2="8" y2="21"></line>
              <line x1="16" y1="3" x2="14" y2="21"></line>
            </svg>
          </div>
          <div className="setup-text-wrap">
            <h4 className="setup-item-title">Campaign ID</h4>
            <p className="setup-item-subtitle font-mono">{campaignId}</p>
          </div>
        </div>

        <div className="row-divider"></div>

        {/* Row 4: Ad account */}
        <div 
          className="setup-row clickable-row" 
          onClick={() => onCopyId(adAccount, 'Ad account ID')}
          title="Click to copy Ad Account ID"
        >
          <div className="setup-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1c1e21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </div>
          <div className="setup-text-wrap">
            <h4 className="setup-item-title">Ad account</h4>
            <p className="setup-item-subtitle font-mono">{adAccount}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
