/* eslint-disable react/react-in-jsx-scope */
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'

import Gif1 from '../../assets/gifs/air-quality.gif'
import Gif2 from '../../assets/gifs/tubes.gif'

const DashboardAdm = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <div
            className="body-linear"
            style={{
              display: 'flex',
              flexFlow: 'row wrap',
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={Gif1}
              alt=""
              style={{ objectFit: 'cover', width: '-webkit-fill-available', maxWidth: '50%' }}
            />
            <img
              src={Gif2}
              alt=""
              style={{ objectFit: 'cover', width: '-webkit-fill-available', maxWidth: '50%' }}
            />
          </div>
          <CRow>
            <CCol xs={12}>
              <h4 id="traffic" className="card-title mb-0">
                Linear Regression about relationship from tubes and air quality
              </h4>
              <div className="small text-medium-emphasis">December - July 2019</div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default DashboardAdm
