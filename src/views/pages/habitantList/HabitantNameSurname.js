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
import { useSelector, useDispatch } from 'react-redux'
import { getAllHabitant,findallbyname } from 'src/store/features/HabitantSlice'
import { Link } from 'react-router-dom'

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
  CFormInput,
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
  cilMagnifyingGlass,
} from '@coreui/icons'

const HabitantList = () => {
  const habitantList = useSelector((state) => state.habitant.habitantList)
const [keyword,setKeyword]= useState("")
  const dispatch = useDispatch()

  const getHabitant = () => {
    dispatch(getAllHabitant())
  }
  
  const getHabitantName = () => {
    console.log("tıklandı")
    dispatch(findallbyname(keyword))
  }
  

  useEffect(() => {
    getHabitant()
  }, [habitantList.size])

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
            <CContainer>
                <CRow>
                  <CCol xs="auto" className="me-auto">
                    <h5 className="card-title fs-4 fw-semibold m-2">
                      Habitant List 
                    </h5>
                  </CCol>
                  <CCol xs="auto">
                  <CFormInput
                    type="text"
                    id="name"
                    placeholder="Name Surname"
                    onChange={(event) => {
                      setKeyword(event.target.value)
                    }}
                  />
                </CCol>
                  <CCol xs="auto">
                      <CButton className="buttonColor btn btn-secondary mb-3" type="button" onClick={getHabitantName}>
                        <CIcon icon={cilMagnifyingGlass} /> Search Habitant
                      </CButton>
                  </CCol>
                  <CCol xs="auto" >
                    ( Citizen Size : {habitantList.length} )
                  </CCol>
                </CRow>
              </CContainer>
              <CRow>
                <CCol></CCol>
              </CRow>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                  <CTableHeaderCell className="text-center">Index</CTableHeaderCell>

                    <CTableHeaderCell className="text-center">Identity Number</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Name Surname</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Is Citizen</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Has Driving License</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {habitantList.map((type, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                       <CTableDataCell className="text-center">
                        <div>
                          {index+1}
                        </div>
                      </CTableDataCell>
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

export default HabitantList
