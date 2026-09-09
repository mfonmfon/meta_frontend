import React from 'react'

export default function ResultsSection({ 
  dateRangeText = "Last 30 days: Aug 9 - Sep 7",
  onOpenDateFilter,
  data = {
    postEngagements: 189,
    costPerEngagement: "NGN157.13",
    amountSpent: "NGN8,956.20",
    amountSpentTruncated: "NGN8,956....",
    reach: 347,
    impressions: 382,
    amountFunded: "NGN15,000.00",
    remainingBalance: "NGN6,043.80"
  }
}) {
  return (
    <section className="app-section results-section">
      <h3 className="section-heading">Results</h3>

      <div className="date-filter-row">
        <span className="date-range-text">{dateRangeText}</span>
        <button 
          className="calendar-icon-btn" 
          onClick={onOpenDateFilter} 
          aria-label="Select Date Range"
          title="Filter date range"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1c1e21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="3" ry="3"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
            <line x1="8" y1="14" x2="8" y2="18"></line>
            <line x1="12" y1="14" x2="12" y2="18"></line>
            <line x1="16" y1="14" x2="16" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className="card-container metrics-card">
        {/* Top 3-Column Metrics Row */}
        <div className="metrics-row top-row">
          <div className="metric-col">
            <span className="metric-primary-val">{data.postEngagements}</span>
            <span className="metric-sublabel">Post<br />engagements</span>
          </div>

          <div className="col-divider"></div>

          <div className="metric-col">
            <span className="metric-primary-val">{data.costPerEngagement}</span>
            <span className="metric-sublabel">Cost per Post<br />Engagement</span>
          </div>

          <div className="col-divider"></div>

          <div className="metric-col">
            <span className="metric-primary-val truncated-amount" title={data.amountSpent}>
              {data.amountSpentTruncated || data.amountSpent}
            </span>
            <span className="metric-sublabel">Amount spent</span>
          </div>
        </div>

        {/* Bottom 2-Column Metrics Row */}
        <div className="metrics-row bottom-row">
          <div className="metric-col">
            <span className="metric-primary-val">{data.reach}</span>
            <span className="metric-sublabel">Reach</span>
          </div>

          <div className="col-divider"></div>

          <div className="metric-col">
            <span className="metric-primary-val">{data.impressions}</span>
            <span className="metric-sublabel">Impressions</span>
          </div>

          {/* Empty spacer for grid alignment */}
          <div className="metric-col placeholder"></div>
        </div>

        {/* Optional Account Funding summary bar if present */}
        {data.amountFunded && (
          <div className="funding-summary-bar">
            <div className="funding-item">
              <span className="funding-lbl">Prepaid Funded</span>
              <span className="funding-val">{data.amountFunded}</span>
            </div>
            <div className="funding-divider"></div>
            <div className="funding-item">
              <span className="funding-lbl">Available Balance</span>
              <span className="funding-val green">{data.remainingBalance}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
