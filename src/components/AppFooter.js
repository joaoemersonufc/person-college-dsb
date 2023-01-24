import { CFooter } from '@coreui/react'
import React from 'react'

const AppFooter = () => {
  return (
    <CFooter>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="/" target="_blank" rel="noopener noreferrer" style={{ color: '#E89028' }}>
          Londata and made with love for DSB :)
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
