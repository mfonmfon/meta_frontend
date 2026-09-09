import React from 'react'

const DATE_OPTIONS = [
  { id: 'today', label: 'Today', sub: 'Sep 9' },
  { id: 'yesterday', label: 'Yesterday', sub: 'Sep 8' },
  { id: 'last_7', label: 'Last 7 days', sub: 'Sep 1 - Sep 7' },
  { id: 'last_14', label: 'Last 14 days', sub: 'Aug 25 - Sep 7' },
  { id: 'last_30', label: 'Last 30 days', sub: 'Aug 9 - Sep 7' },
  { id: 'this_month', label: 'This month', sub: 'Sep 1 - Sep 9' },
  { id: 'lifetime', label: 'Lifetime', sub: 'Aug 30 - Sep 9' }
]

export default function DateRangeModal({ isOpen, onClose, selectedId, onSelect }) {
  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="bottom-sheet-modal" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-handle"></div>

        <div className="sheet-header">
          <button className="sheet-cancel-btn" onClick={onClose}>Done</button>
          <h3 className="sheet-title">Select Date Range</h3>
          <div style={{ width: 44 }}></div>
        </div>

        <div className="sheet-body date-options-list">
          {DATE_OPTIONS.map((item) => (
            <button
              key={item.id}
              className={`date-option-row ${selectedId === item.id ? 'active' : ''}`}
              onClick={() => {
                onSelect(item)
                onClose()
              }}
            >
              <div className="date-option-text">
                <span className="date-option-label">{item.label}</span>
                <span className="date-option-sub">{item.sub}</span>
              </div>
              {selectedId === item.id && (
                <span className="date-option-check">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
