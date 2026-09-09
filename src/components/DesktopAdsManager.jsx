import React, { useState } from 'react'
import bangleImg from '../assets/imole_bangle.jpg'

export default function DesktopAdsManager({
  metrics,
  dailyBudget,
  budgetAmount,
  dateRangeText,
  onOpenBudgetModal,
  onOpenDateModal,
  onCopyId
}) {
  const [activeTab, setActiveTab] = useState('campaigns')
  const [campaignActive, setCampaignActive] = useState(false)
  const [selectedChartMetric, setSelectedChartMetric] = useState('impressions')

  return (
    <div className="desktop-ads-manager-container">
      {/* Left Icon Rail Navigation */}
      <aside className="desktop-left-rail">
        <div className="rail-top">
          {/* Meta Brand Icon */}
          <div className="rail-brand-icon" title="Meta Business Suite">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#0064e0">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </div>

          <nav className="rail-nav">
            <button className="rail-btn" title="All Tools">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            </button>
            <button className="rail-btn active" title="Ads Manager (Campaigns)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
            </button>
            <button className="rail-btn" title="Audiences">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </button>
            <button className="rail-btn" title="Billing & Payments">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
            </button>
            <button className="rail-btn" title="Events Manager">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </button>
          </nav>
        </div>

        <div className="rail-bottom">
          <button className="rail-btn" title="Settings">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          </button>
          <div className="user-avatar" title="Account User">IA</div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="desktop-main-wrapper">
        {/* Top App Bar */}
        <header className="desktop-top-bar">
          <div className="top-bar-left">
            <div className="account-selector-dropdown">
              <div className="account-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              </div>
              <div className="account-name-info">
                <span className="account-title">Imole Atelier</span>
                <span className="account-num font-mono">1436050481903275</span>
              </div>
              <span className="dropdown-arrow">▼</span>
            </div>

            <div className="search-filter-box">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#65676b" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" placeholder="Search and filter campaigns..." />
            </div>
          </div>

          <div className="top-bar-right">
            {/* Date Range Selector */}
            <button className="desktop-date-selector-btn" onClick={onOpenDateModal}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span>{dateRangeText}</span>
              <span className="dropdown-arrow">▼</span>
            </button>

            <button className="btn-secondary-desktop">
              <span>Discard drafts</span>
            </button>
            <button className="btn-primary-desktop">
              <span>Review and publish (1)</span>
            </button>
          </div>
        </header>

        {/* Breadcrumbs & Campaign Header Banner */}
        <div className="desktop-campaign-header-banner">
          <div className="campaign-banner-top">
            <div className="breadcrumb-trail">
              <span>Campaigns</span>
              <span className="crumb-separator">/</span>
              <span className="crumb-active">Imole Atelier</span>
            </div>

            <div className="header-action-buttons">
              <button className="action-pill-btn" onClick={onOpenBudgetModal}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                <span>Edit</span>
              </button>
              <button className="action-pill-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                <span>Duplicate</span>
              </button>
              <button className="action-pill-btn" onClick={() => onCopyId('52670230394310', 'Campaign ID')}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>
                <span>Copy ID</span>
              </button>
            </div>
          </div>

          <div className="campaign-banner-main">
            <div className="banner-left-info">
              {/* Campaign On/Off Toggle */}
              <label className="desktop-switch" title="Toggle Campaign Active Status">
                <input 
                  type="checkbox" 
                  checked={campaignActive} 
                  onChange={() => setCampaignActive(!campaignActive)} 
                />
                <span className="slider"></span>
              </label>

              <div className="banner-thumbnail-box">
                <img src={bangleImg} alt="Imole Atelier" />
              </div>

              <div className="banner-title-column">
                <div className="banner-title-row">
                  <h1 className="banner-campaign-name">Imole Atelier</h1>
                  <span className="status-pill not-delivering">Not delivering</span>
                </div>
                <div className="banner-meta-subrow">
                  <span>Objective: <strong>Engagement</strong></span>
                  <span className="bullet-dot">•</span>
                  <span>Campaign ID: <strong className="font-mono">52670230394310</strong></span>
                  <span className="bullet-dot">•</span>
                  <span>Prepaid Funded: <strong>{metrics.amountFunded}</strong></span>
                </div>
              </div>
            </div>

            <div className="banner-quick-budget-badge" onClick={onOpenBudgetModal}>
              <span className="budget-label">Daily Budget</span>
              <span className="budget-amount">NGN {Number(budgetAmount).toLocaleString()}.00</span>
              <span className="budget-strategy">Highest Volume ✎</span>
            </div>
          </div>
        </div>

        {/* Tabs Bar: Campaigns | Ad sets | Ads */}
        <div className="desktop-tabs-bar">
          <button 
            className={`tab-btn ${activeTab === 'campaigns' ? 'active' : ''}`}
            onClick={() => setActiveTab('campaigns')}
          >
            <span>Campaigns</span>
            <span className="tab-count">1</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'adsets' ? 'active' : ''}`}
            onClick={() => setActiveTab('adsets')}
          >
            <span>Ad sets</span>
            <span className="tab-count">1</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'ads' ? 'active' : ''}`}
            onClick={() => setActiveTab('ads')}
          >
            <span>Ads</span>
            <span className="tab-count">1</span>
          </button>
        </div>

        {/* Dashboard 2-Column Content Grid */}
        <div className="desktop-dashboard-grid">
          {/* Main Left Column */}
          <div className="dashboard-left-col">
            {/* KPI Cards Row (from user updated values) */}
            <div className="desktop-kpi-grid">
              <div className="kpi-card">
                <div className="kpi-header">
                  <span className="kpi-title">Post engagements</span>
                  <span className="kpi-info-icon" title="Total actions taken on your ad post">ⓘ</span>
                </div>
                <div className="kpi-value-large">{metrics.postEngagements}</div>
                <div className="kpi-subtext">Verified engagements</div>
              </div>

              <div className="kpi-card">
                <div className="kpi-header">
                  <span className="kpi-title">Cost per Post Engagement</span>
                  <span className="kpi-info-icon" title="Average cost per engagement">ⓘ</span>
                </div>
                <div className="kpi-value-large">{metrics.costPerEngagement}</div>
                <div className="kpi-subtext">Target achieved</div>
              </div>

              <div className="kpi-card">
                <div className="kpi-header">
                  <span className="kpi-title">Amount spent</span>
                  <span className="kpi-info-icon" title="Total spent during date range">ⓘ</span>
                </div>
                <div className="kpi-value-large">{metrics.amountSpent}</div>
                <div className="kpi-subtext">Prepaid Fund: {metrics.amountFunded}</div>
              </div>

              <div className="kpi-card">
                <div className="kpi-header">
                  <span className="kpi-title">Reach</span>
                  <span className="kpi-info-icon" title="Number of unique accounts reached">ⓘ</span>
                </div>
                <div className="kpi-value-large">{metrics.reach}</div>
                <div className="kpi-subtext">Unique accounts</div>
              </div>

              <div className="kpi-card">
                <div className="kpi-header">
                  <span className="kpi-title">Impressions</span>
                  <span className="kpi-info-icon" title="Number of times your ads were on screen">ⓘ</span>
                </div>
                <div className="kpi-value-large">{metrics.impressions}</div>
                <div className="kpi-subtext">1.10 frequency</div>
              </div>
            </div>

            {/* Performance Visualizer Chart */}
            <div className="desktop-chart-card">
              <div className="chart-card-header">
                <div>
                  <h3 className="chart-heading">Performance Over Time</h3>
                  <span className="chart-sub">Showing results for {dateRangeText}</span>
                </div>
                <div className="chart-metric-selector">
                  <button 
                    className={`chart-pill ${selectedChartMetric === 'impressions' ? 'active' : ''}`}
                    onClick={() => setSelectedChartMetric('impressions')}
                  >
                    Impressions ({metrics.impressions})
                  </button>
                  <button 
                    className={`chart-pill ${selectedChartMetric === 'reach' ? 'active' : ''}`}
                    onClick={() => setSelectedChartMetric('reach')}
                  >
                    Reach ({metrics.reach})
                  </button>
                  <button 
                    className={`chart-pill ${selectedChartMetric === 'spend' ? 'active' : ''}`}
                    onClick={() => setSelectedChartMetric('spend')}
                  >
                    Amount Spent ({metrics.amountSpent})
                  </button>
                </div>
              </div>

              {/* Interactive Performance Graph SVG */}
              <div className="desktop-chart-graph-wrap">
                <svg className="performance-svg" viewBox="0 0 700 160" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0064e0" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#0064e0" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Grid Lines */}
                  <line x1="0" y1="30" x2="700" y2="30" stroke="#f0f2f5" strokeDasharray="3 3"/>
                  <line x1="0" y1="75" x2="700" y2="75" stroke="#f0f2f5" strokeDasharray="3 3"/>
                  <line x1="0" y1="120" x2="700" y2="120" stroke="#f0f2f5" strokeDasharray="3 3"/>
                  
                  {/* Area fill */}
                  <path d="M0,130 Q120,110 200,60 T350,70 T500,30 T700,40 L700,160 L0,160 Z" fill="url(#chartGrad)" />
                  {/* Line */}
                  <path d="M0,130 Q120,110 200,60 T350,70 T500,30 T700,40" fill="none" stroke="#0064e0" strokeWidth="3" />
                  
                  {/* Data Points */}
                  <circle cx="200" cy="60" r="5" fill="#0064e0" stroke="#fff" strokeWidth="2" />
                  <circle cx="500" cy="30" r="5" fill="#0064e0" stroke="#fff" strokeWidth="2" />
                  <circle cx="700" cy="40" r="5" fill="#0064e0" stroke="#fff" strokeWidth="2" />
                </svg>
                <div className="chart-x-axis">
                  <span>Aug 9</span>
                  <span>Aug 16</span>
                  <span>Aug 23</span>
                  <span>Aug 30</span>
                  <span>Sep 7</span>
                </div>
              </div>
            </div>

            {/* Ad Sets Data Table */}
            <div className="desktop-table-card">
              <div className="table-header-row">
                <div className="table-search-left">
                  <span className="table-title">1 Ad set in this campaign</span>
                </div>
                <button className="table-columns-btn">
                  <span>Columns: Performance</span>
                  <span>⚙</span>
                </button>
              </div>

              <div className="table-container">
                <table className="meta-desktop-table">
                  <thead>
                    <tr>
                      <th style={{ width: 40 }}><input type="checkbox" /></th>
                      <th>Ad Set Name</th>
                      <th>Delivery</th>
                      <th>Results</th>
                      <th>Reach</th>
                      <th>Impressions</th>
                      <th>Cost per Result</th>
                      <th>Budget</th>
                      <th>Amount Spent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><input type="checkbox" defaultChecked /></td>
                      <td>
                        <div className="table-adset-name">
                          <span className="item-name">Imole Atelier</span>
                          <span className="item-sub">ID: 52670230394310</span>
                        </div>
                      </td>
                      <td>
                        <span className="status-pill not-delivering">Not Delivering</span>
                      </td>
                      <td><strong>{metrics.postEngagements}</strong> <small>Engagements</small></td>
                      <td>{metrics.reach}</td>
                      <td>{metrics.impressions}</td>
                      <td>{metrics.costPerEngagement}</td>
                      <td>
                        <span className="clickable-budget" onClick={onOpenBudgetModal}>
                          NGN {Number(budgetAmount).toLocaleString()}/day ✎
                        </span>
                      </td>
                      <td><strong>{metrics.amountSpent}</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column: Setup & Inspector */}
          <div className="dashboard-right-col">
            {/* Account Funds Card */}
            <div className="inspector-card account-funds-card">
              <h4 className="inspector-card-title">Prepaid Funds & Billing</h4>
              <div className="funds-balance-display">
                <div className="fund-row">
                  <span className="fund-lbl">Total Funded:</span>
                  <span className="fund-amt">{metrics.amountFunded}</span>
                </div>
                <div className="fund-row">
                  <span className="fund-lbl">Amount Spent:</span>
                  <span className="fund-amt red">-{metrics.amountSpent}</span>
                </div>
                <div className="fund-divider"></div>
                <div className="fund-row remaining">
                  <span className="fund-lbl">Available Balance:</span>
                  <span className="fund-amt green">{metrics.remainingBalance}</span>
                </div>
              </div>
            </div>

            {/* Ad Preview Card */}
            <div className="inspector-card">
              <h4 className="inspector-card-title">Ad Creative Preview</h4>
              <div className="desktop-ad-preview-box">
                <div className="preview-header">
                  <div className="preview-avatar">IA</div>
                  <div className="preview-meta">
                    <span className="preview-page-name">Imole Atelier</span>
                    <span className="preview-sponsored">Sponsored • 🌐</span>
                  </div>
                </div>
                <p className="preview-caption">
                  Exquisite craftsmanship. Discover our new expandable gold bangle collection at Imole Atelier.
                </p>
                <div className="preview-media-frame">
                  <img src={bangleImg} alt="Jewelry showcase" />
                </div>
                <div className="preview-cta-bar">
                  <div className="cta-text">
                    <span className="cta-domain">IMOLEATELIER.COM</span>
                    <span className="cta-headline">Luxury Handcrafted Bangles</span>
                  </div>
                  <button className="preview-learn-more-btn">Shop Now</button>
                </div>
              </div>
            </div>

            {/* Campaign Setup Inspector */}
            <div className="inspector-card">
              <div className="inspector-header-row">
                <h4 className="inspector-card-title">Campaign Configuration</h4>
                <button className="inspector-edit-link" onClick={onOpenBudgetModal}>Edit Setup</button>
              </div>

              <div className="inspector-details-list">
                <div className="inspector-item">
                  <span className="item-lbl">Daily Budget</span>
                  <span className="item-val">NGN {Number(budgetAmount).toLocaleString()}.00 NGN / day</span>
                </div>
                <div className="inspector-item">
                  <span className="item-lbl">Bidding Strategy</span>
                  <span className="item-val">Highest Volume</span>
                </div>
                <div className="inspector-item">
                  <span className="item-lbl">Schedule</span>
                  <span className="item-val">Aug 30 - ongoing</span>
                </div>
                <div className="inspector-item">
                  <span className="item-lbl">Campaign ID</span>
                  <span className="item-val font-mono clickable-val" onClick={() => onCopyId('52670230394310', 'Campaign ID')}>
                    52670230394310 📋
                  </span>
                </div>
                <div className="inspector-item">
                  <span className="item-lbl">Ad Account ID</span>
                  <span className="item-val font-mono clickable-val" onClick={() => onCopyId('1436050481903275', 'Ad Account ID')}>
                    1436050481903275 📋
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
