import React from 'react'
import StatusBar from './StatusBar'
import CampaignHeader from './CampaignHeader'
import CampaignHeroCard from './CampaignHeroCard'
import ResultsSection from './ResultsSection'
import SetupSection from './SetupSection'
import AdSetsSection from './AdSetsSection'

export default function MobileAdsManager({
  metrics,
  dailyBudget,
  dateRangeText,
  onOpenBudgetModal,
  onOpenDateModal,
  onCopyId,
  onBack
}) {
  return (
    <div className="native-mobile-container">
      {/* iOS Native Status Bar */}
      <StatusBar time="11:23" />

      {/* Header with "< Ads" and "Campaign" */}
      <CampaignHeader onBack={onBack} />

      {/* Scrollable Main Content Container */}
      <main className="mobile-scroll-content">
        {/* Campaign Product Card */}
        <CampaignHeroCard 
          title="Imole Atelier"
          status="Not delivering"
          objective="Engagement"
        />

        {/* Results Section */}
        <ResultsSection 
          dateRangeText={dateRangeText}
          onOpenDateFilter={onOpenDateModal}
          data={metrics}
        />

        {/* Setup Section */}
        <SetupSection 
          budget={dailyBudget}
          schedule="Aug 30 - ongoing"
          campaignId="52670230394310"
          adAccount="1436050481903275"
          onEditBudget={onOpenBudgetModal}
          onCopyId={onCopyId}
        />

        {/* Ad Sets Section */}
        <AdSetsSection 
          adSetName="Imole Atelier"
          status="Not Delivering"
        />

        {/* Bottom spacer for home bar */}
        <div className="bottom-scroll-spacer"></div>
      </main>

      {/* iOS Home Indicator Bar */}
      <div className="ios-home-indicator-wrap">
        <div className="ios-home-indicator"></div>
      </div>
    </div>
  )
}
