import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CLink,
  CRow,
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { create } from '../../../store/features/HabitantSlice'

const SaveHabitant = () => {
  const [nameSurname, setNameSurname] = useState('')
  const [isCitizen, setIsCitizen] = useState('')
  const [hasDrivingLicense, setHasDrivingLicense] = useState('')
const habitantisCitizen= ['TRUE','FALSE']
const habitanthasDrivingLicense= ['TRUE','FALSE']
  const data = useSelector((state) => state.habitant.habitant)
  const dispatch = useDispatch()

  console.log(data)

  const createHabitant = async () => {
    if (nameSurname === '') {
      alert('Please enter name surname!')
    } else if (isCitizen === '') {
      alert('Please select true or false!')
    } else if (hasDrivingLicense === '') {
      alert('Please select true or false!')
    } else {
      dispatch(
        create({
          nameSurname: nameSurname,
          isCitizen: isCitizen,
          hasDrivingLicense: hasDrivingLicense,
        }),
      )
    }
  }
  useEffect(() => {
    
  }, [])

  return (
    <>
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center ">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={5}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm>
                    <h1>Create New Habitant</h1>
                    <p className="text-medium-emphasis">Please fill in the information...</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        id="floatingInputInvalid"
                        floatingLabel="NameSurname"
                        placeholder="NameSurname"
                        autoComplete="NameSurname"
                        onChange={(event) => {
                          setNameSurname(event.target.value)
                        }}
                      />
                    </CInputGroup>
                    
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>

                      <CFormSelect
                        aria-label="Default select example"
                        onChange={(event) => {
                          setIsCitizen(event.target.value)
                        }}
                      >
                        <option>Is Citizen true/false</option>
                        {habitantisCitizen.map((type, index) => (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        ))}
                      </CFormSelect>
                    </CInputGroup>

                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>

                      <CFormSelect
                        aria-label="Default select example"
                        onChange={(event) => {
                          setHasDrivingLicense(event.target.value)
                        }}
                      >
                        <option>Has Driving License true/false</option>
                        {habitanthasDrivingLicense.map((type, index) => (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        ))}
                      </CFormSelect>
                    </CInputGroup>
                    <CRow className="d-grid gap-3 d-md-block ">
                      <Link to={'/home'}>
                        <CButton size="lg" className='buttonColor' onClick={createHabitant}>
                          Create Habitant
                        </CButton>
                      </Link>

                      <Link to={'/home'}>
                        <CButton size="lg" color="secondary" variant="outline">
                          Go back to home
                        </CButton>
                      </Link>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  )
}

export default SaveHabitant
