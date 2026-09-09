import React from 'react'

export default function AdSetsSection({ 
  adSetName = "Imole Atelier",
  status = "Not Delivering"
}) {
  return (
    <section className="app-section adsets-section">
      <h3 className="section-heading">Ad sets</h3>

      <div className="card-container adset-card">
        <div className="adset-card-content">
          <div className="adset-badge-wrap">
            <span className="status-pill not-delivering">
              {status}
            </span>
          </div>
          <h4 className="adset-title">{adSetName}</h4>
        </div>
      </div>
    </section>
  )
}
