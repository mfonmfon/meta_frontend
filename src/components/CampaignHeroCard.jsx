import React from 'react'
import bangleImg from '../assets/imole_bangle.jpg'

export default function CampaignHeroCard({ 
  title = "Imole Atelier",
  status = "Not delivering",
  objective = "Engagement"
}) {
  return (
    <div className="campaign-hero-card">
      <div className="campaign-thumbnail-wrap">
        <img 
          src={bangleImg} 
          alt="Imole Atelier gold bangle" 
          className="campaign-thumbnail-img"
        />
      </div>

      <div className="campaign-info">
        <h2 className="campaign-name">{title}</h2>
        <div className="campaign-badges-row">
          <span className="status-pill not-delivering">
            {status}
          </span>
          <span className="objective-label">{objective}</span>
        </div>
      </div>
    </div>
  )
}
