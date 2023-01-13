import React, { useEffect, useState } from 'react'
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from '@coreui/react'
import { useSelector, useDispatch} from 'react-redux'
import { findchildrenbyid } from 'src/store/features/HabitantSlice'
import { Link ,useParams} from 'react-router-dom'

import {
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CContainer,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cilPeople,
  cilUserFollow,
} from '@coreui/icons'

const MyChildrenList = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const list = useSelector((state) => state.habitant.habitantChildrenList)

  useEffect(() => {
    dispatch(findchildrenbyid(id))
  }, [list.size])

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <CContainer>
                <CRow>
                  <CCol xs="auto" className="me-auto">
                    <h5 className="card-title fs-4 fw-semibold m-2">Habitant List</h5>
                  </CCol>
                  <CCol xs="auto" className="justify-content-end">
                  ( Children Size = {list.length} )
                    </CCol>
                </CRow>
              </CContainer>
              <CRow>
                <CCol></CCol>
              </CRow>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">Identity Number</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Name Surname</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Is Citizen</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Has Driving License</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {list.map((type, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                        <CTableDataCell className="text-center">
                        <div>
                          {type?.id}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>
                          {type?.nameSurname}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{type?.isCitizen?"citizen": "non-citizen"}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{type?.hasDrivingLicense?"licensed":"unlicensed"}</div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default MyChildrenList
