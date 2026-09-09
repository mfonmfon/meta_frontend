import React, { useState, useEffect } from 'react'
import MobileAdsManager from './components/MobileAdsManager'
import DesktopAdsManager from './components/DesktopAdsManager'
import EditBudgetModal from './components/EditBudgetModal'
import DateRangeModal from './components/DateRangeModal'
import Toast from './components/Toast'
import './App.css'

function App() {
  // View mode: 'auto', 'desktop', 'mobile'
  const [viewOverride, setViewOverride] = useState('auto')
  const [isMobileScreen, setIsMobileScreen] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 850 : false
  )

  // Campaign configuration parameters
  const [dailyBudget, setDailyBudget] = useState('NGN4,000.00 NGN per day, Highest Volume')
  const [budgetAmount, setBudgetAmount] = useState(4000)
  const [dateRangeText, setDateRangeText] = useState('Last 30 days: Aug 9 - Sep 7')
  const [selectedDateId, setSelectedDateId] = useState('last_30')

  // Modals & Toast State
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false)
  const [isDateModalOpen, setIsDateModalOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastVisible, setToastVisible] = useState(false)

  // Metrics Data updated with exact user values
  const [metrics, setMetrics] = useState({
    postEngagements: 189,
    costPerEngagement: "NGN157.13",
    amountSpent: "NGN8,956.20",
    amountSpentTruncated: "NGN8,956....",
    reach: 347,
    impressions: 382,
    amountFunded: "NGN15,000.00",
    remainingBalance: "NGN6,043.80"
  })

  // Listen to screen resize for responsive detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 850)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const currentView = viewOverride === 'auto' 
    ? (isMobileScreen ? 'mobile' : 'desktop') 
    : viewOverride

  const showToast = (msg) => {
    setToastMessage(msg)
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 2400)
  }

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text)
    showToast(`Copied ${label}: ${text}`)
  }

  const handleSaveBudget = ({ amount, strategy }) => {
    setBudgetAmount(amount)
    setDailyBudget(`NGN${Number(amount).toLocaleString('en-US', { minimumFractionDigits: 2 })} NGN per day, ${strategy}`)
    showToast(`Budget updated to NGN ${Number(amount).toLocaleString()}/day`)
  }

  const handleSelectDate = (item) => {
    setSelectedDateId(item.id)
    setDateRangeText(`${item.label}: ${item.sub}`)
    showToast(`Filtered by ${item.label}`)
  }

  const handleBack = () => {
    showToast('Navigating back to Ads list...')
  }

  return (
    <div className={`meta-app-wrapper current-view-${currentView}`}>
      {/* Top Floating View Switcher Bar */}
      <header className="global-meta-topbar">
        <div className="meta-brand-left">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#0064e0">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          <span className="brand-name-text">Meta Ads Manager</span>
          <span className="campaign-crumb-badge">Imole Atelier</span>
        </div>

        <div className="view-mode-selector">
          <button 
            className={`view-selector-btn ${viewOverride === 'auto' ? 'active' : ''}`}
            onClick={() => setViewOverride('auto')}
            title="Auto-switch based on screen width / mobile inspect"
          >
            <span>🔄 Auto ({isMobileScreen ? 'Mobile' : 'Desktop'})</span>
          </button>
          <button 
            className={`view-selector-btn ${viewOverride === 'desktop' ? 'active' : ''}`}
            onClick={() => setViewOverride('desktop')}
          >
            <span>🖥️ Desktop</span>
          </button>
          <button 
            className={`view-selector-btn ${viewOverride === 'mobile' ? 'active' : ''}`}
            onClick={() => setViewOverride('mobile')}
          >
            <span>📱 Mobile</span>
          </button>
        </div>
      </header>

      {/* Main Full-Width Application View */}
      <div className="meta-main-body-stage">
        {currentView === 'desktop' ? (
          <DesktopAdsManager 
            metrics={metrics}
            dailyBudget={dailyBudget}
            budgetAmount={budgetAmount}
            dateRangeText={dateRangeText}
            onOpenBudgetModal={() => setIsBudgetModalOpen(true)}
            onOpenDateModal={() => setIsDateModalOpen(true)}
            onCopyId={handleCopy}
          />
        ) : (
          <MobileAdsManager 
            metrics={metrics}
            dailyBudget={dailyBudget}
            dateRangeText={dateRangeText}
            onOpenBudgetModal={() => setIsBudgetModalOpen(true)}
            onOpenDateModal={() => setIsDateModalOpen(true)}
            onCopyId={handleCopy}
            onBack={handleBack}
          />
        )}
      </div>

      {/* Interactive Modals */}
      <EditBudgetModal 
        isOpen={isBudgetModalOpen}
        onClose={() => setIsBudgetModalOpen(false)}
        currentAmount={budgetAmount}
        onSave={handleSaveBudget}
      />

      <DateRangeModal 
        isOpen={isDateModalOpen}
        onClose={() => setIsDateModalOpen(false)}
        selectedId={selectedDateId}
        onSelect={handleSelectDate}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} visible={toastVisible} />
    </div>
  )
}

export default App
