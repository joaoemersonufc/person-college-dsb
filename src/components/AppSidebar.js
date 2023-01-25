import { cilAccountLogout, cilMediaPlay, cilNewspaper } from '@coreui/icons'
import { CNavLink } from '@coreui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CIcon from '@coreui/icons-react'
import { CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react'

import { AppSidebarNav } from './AppSidebarNav'

import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import logo from '../assets/brand/logo.svg'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/" style={{ color: '#000' }}>
        <img src={logo} alt="logo" width={125} height={125} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
        <div
          className="sidebar-info"
          style={{ background: '#fff', margin: 24, border: '1px solid #ddd' }}
        >
          <div style={{ color: '#000', fontSize: 20, marginTop: 8, fontWeight: 'bold' }}>
            Information
          </div>
          <div style={{ color: '#504f4f', fontSize: 16, padding: 5 }}>
            Watch our short videos to find out how you can help.
          </div>
          <div
            style={{
              padding: 2,
              display: 'flex',
              flexFlow: 'column',
              marginTop: 8,
              borderTop: '1px solid #ddd',
            }}
          >
            <CNavLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" active>
              <CIcon
                icon={cilMediaPlay}
                className="me-2"
                style={{ border: '1px solid #000', display: 'flex' }}
              />
              Maybe something
            </CNavLink>
            <CNavLink
              href="https://www.ucsusa.org/resources/cars-trucks-buses-and-air-pollution"
              target="_blank"
              active
            >
              <CIcon
                icon={cilNewspaper}
                className="me-2"
                style={{ border: '1px solid #000', display: 'flex' }}
              />
              Road pollution
            </CNavLink>
            <CNavLink href="https://www.youtube.com/watch?v=yx1edbQBDOs" target="_blank" active>
              <CIcon
                icon={cilMediaPlay}
                className="me-2"
                style={{ border: '1px solid #000', display: 'flex' }}
              />
              Air pollution info
            </CNavLink>
            <CNavLink href="/login" active onClick={() => localStorage.setItem('adm', false)}>
              <CIcon
                icon={cilAccountLogout}
                className="me-2"
                style={{ border: '1px solid #000', display: 'flex' }}
              />
              Logout
            </CNavLink>
          </div>
        </div>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
