import React, { useState } from 'react'

export default function EditBudgetModal({ 
  isOpen, 
  onClose, 
  currentAmount = 4000, 
  onSave 
}) {
  const [amount, setAmount] = useState(currentAmount)
  const [strategy, setStrategy] = useState('Highest Volume')

  if (!isOpen) return null

  const handleSave = () => {
    onSave({
      amount: Number(amount),
      strategy
    })
    onClose()
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="bottom-sheet-modal" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-handle"></div>

        <div className="sheet-header">
          <button className="sheet-cancel-btn" onClick={onClose}>Cancel</button>
          <h3 className="sheet-title">Edit Budget</h3>
          <button className="sheet-save-btn" onClick={handleSave}>Save</button>
        </div>

        <div className="sheet-body">
          <div className="sheet-field-group">
            <label className="sheet-label">Daily Budget</label>
            <div className="currency-input-wrap">
              <span className="currency-prefix">NGN</span>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="currency-input"
                step="500"
                min="500"
              />
            </div>
            <span className="sheet-helper-text">You'll spend an average of NGN {Number(amount).toLocaleString()} per day.</span>
          </div>

          <div className="sheet-field-group">
            <label className="sheet-label">Bidding Strategy</label>
            <div className="strategy-options">
              {['Highest Volume', 'Cost Per Result Goal', 'Bid Cap'].map((opt) => (
                <button
                  key={opt}
                  className={`strategy-btn ${strategy === opt ? 'active' : ''}`}
                  onClick={() => setStrategy(opt)}
                >
                  <span>{opt}</span>
                  {strategy === opt && <span className="checkmark">✓</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
