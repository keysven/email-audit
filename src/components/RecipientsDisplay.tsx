import React, { useState, useEffect } from 'react'

export interface RecipientsDisplay {
  recipients: string[]
}

const RecipientsDisplay = ({ recipients }: RecipientsDisplay) => {
  const [visibleRecipients, setVisibleRecipients] = useState(recipients)
  const [trimmedCount, setTrimmedCount] = useState(0)

  

  useEffect(() => {
    checkRecipients()
    // Add resize listener
    window.addEventListener('resize', checkRecipients)
    // Clean up listener
    return () => window.removeEventListener('resize', checkRecipients)
  }, [recipients])

  const checkRecipients = () => {
    const containerWidth = document.getElementById('recipient-container')
      ?.offsetWidth
    let totalWidth = 0
    let tempVisibleRecipients: React.SetStateAction<string[]> = []
    let tempTrimmedCount = 0

    const context = document.createElement('canvas').getContext('2d')

    if (context) {
      context.font = '16px Arial'

      if (typeof containerWidth === 'number') {
        recipients.forEach((recipient, index) => {
          const textWidth = context.measureText(
            index === 0 ? recipient : `, ${recipient}`,
          ).width
          if (
            totalWidth + textWidth + 30 < containerWidth ||
            (index === 0 && textWidth < containerWidth)
          ) {
            tempVisibleRecipients.push(recipient)
            totalWidth += textWidth
          } else {
            tempTrimmedCount += 1
          }
        })
      }
    }

    setVisibleRecipients(tempVisibleRecipients)
    setTrimmedCount(tempTrimmedCount)
  }

  return (
    <div
      id="recipient-container"
      style={{ fontSize: '16px', color: '#333', display:'flex', justifyContent:'space-between'}}
    >
      {visibleRecipients.join(', ')}
      {trimmedCount > 0 && (
        <React.Fragment>
          , ...
          <span
            style={{
              background: '#666',
              color: '#f0f0f0',
              borderRadius: '3px',
              padding: '2px 5px',
              fontSize: '16px'
            }}
          >
            +{trimmedCount}
          </span>
        </React.Fragment>
      )}
    </div>
  )
}

export default RecipientsDisplay
