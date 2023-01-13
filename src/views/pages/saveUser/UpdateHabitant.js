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
import { updateHabitant } from '../../../store/features/HabitantSlice'

const UpdateHabitant = () => {
  const [parentid, setParentid] = useState(0)
  const [childrenid, setChildrenid] = useState(0)
  const data = useSelector((state) => state.habitant.habitant)
  const dispatch = useDispatch()

  console.log(data)

  const Habitantupdate = async () => {
    if (parentid === '') {
      alert('Please enter name surname!')
    } else if (childrenid === '') {
      alert('Please select true or false!')
    } else {
      dispatch(
        updateHabitant({
          parentid: parentid,
          childrenid: childrenid,
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
                    <h1>Save New Children Habitant</h1>
                    <p className="text-medium-emphasis">Please fill in the information...</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        id="floatingInputInvalid"
                        floatingLabel="Parent ID"
                        placeholder="Parent ID"
                        autoComplete="Parent ID"
                        onChange={(event) => {
                          setParentid(event.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        id="floatingInputInvalid"
                        floatingLabel="Children ID"
                        placeholder="Children ID"
                        autoComplete="Children ID"
                        onChange={(event) => {
                          setChildrenid(event.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CRow className="d-grid gap-3 d-md-block ">
                      <Link to={'/home'}>
                        <CButton size="lg" className='buttonColor' onClick={Habitantupdate}>
                        Add child to parent
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

export default UpdateHabitant
