import React, { useEffect, useState } from "react";
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import { useSelector, useDispatch } from "react-redux";
import {findallnumberbychildren,findbyid } from "src/store/features/HabitantSlice";
import { Link } from "react-router-dom";

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
  CFormLabel,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
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
} from "@coreui/icons";

const HabitantNumberOfChildren = () => {
  const type = useSelector((state) => state.habitant.habitant);
  const numberOfChildren = useSelector((state) => state.habitant.numberOfChildren);
  const [keyId, setKeyId] = useState(0);
  const dispatch = useDispatch();

  const getHabitantId = () => {
    dispatch(findbyid(keyId));
  };
  const getChildrenNumber = () => {
    dispatch(findallnumberbychildren(keyId));
  };

  useEffect(() => {getHabitantId()}, [keyId]);

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4 ">
            <CCardBody>
              <CContainer>
                <CRow>
                  <CCol xs="auto" className="me-auto">
                    <h5 className="card-title fs-4 fw-semibold m-2">
                      Habitant
                    </h5>
                  </CCol>
                  <CCol xs="auto">
                    <CFormInput
                      type="text"
                      id="inputPassword2"
                      placeholder="Identity Number"
                      onChange={(event) => {
                        setKeyId(event.target.value);
                      }}
                    />
                  </CCol>
                  <CCol xs="auto">
                      <CButton
                        className="buttonColor btn btn-secondary mb-3"
                        type="button"
                        onClick={getChildrenNumber}
                      >
                        <CIcon icon={cilMagnifyingGlass} /> Search Habitant
                      </CButton>
                  </CCol>
                </CRow>
              </CContainer>
              <CRow></CRow>
              <div className="row flex flex-wrap  ">
        <CCard className="m-4" style={{ width: '22rem' }}>
        <CCardImage
                    className=" recPhotodetail mt-3 p-2"
                    orientation="top"
                    src={
                         require("../../../assets/person/user.webp")
                    }
                  />
          <CCardBody>
          <CCardText className="text-center">
              ID : {type?.id === null ? '---' : type.id}
            </CCardText>
            <CCardText className="text-center"> Name Surname : {type?.nameSurname}</CCardText>
            <CCardTitle className="text-center">
            Children Size : {numberOfChildren}
            </CCardTitle>
          </CCardBody>
        </CCard>
    </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default HabitantNumberOfChildren;
