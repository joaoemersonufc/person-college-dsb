/* eslint-disable react/react-in-jsx-scope */
import { cilSpeedometer } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'DASHBOARD',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
]

export default _nav
