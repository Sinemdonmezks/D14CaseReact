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
import { findbyid } from "src/store/features/HabitantSlice";
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

const HabitantSearchID = () => {
  const type = useSelector((state) => state.habitant.habitant);
  const [keyId, setKeyId] = useState(0);
  const dispatch = useDispatch();

  const getHabitantId = () => {
    dispatch(findbyid(keyId));
  };

  useEffect(() => {}, [type]);

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
                    <Link to={``} className="col align-self-end">
                      <CButton
                        className="buttonColor btn btn-secondary mb-3"
                        type="button"
                        onClick={getHabitantId}
                      >
                        <CIcon icon={cilMagnifyingGlass} /> Search Habitant
                      </CButton>
                    </Link>
                  </CCol>
                </CRow>
              </CContainer>
              <CRow></CRow>
              <div className="row flex flex-wrap  ">
                <CCard className="m-4" style={{ width: "22rem" }}>
                  <CCardImage
                    className=" recPhotodetail mt-3 p-2"
                    orientation="top"
                    src={
                         require("../../../assets/person/user.webp")
                    }
                  />
                  <CCardBody>
                    <CCardTitle className="text-center">
                      ID : {type?.id === null ? "---" : type.id}
                    </CCardTitle>
                    <CCardText className="text-center">
                      {" "}
                      Name Surname : {type?.nameSurname}
                    </CCardText>
                    <CCardText className="text-center">
                      Is Citizen : {type?.isCitizen ? "citizen" : "non-citizen"}
                    </CCardText>
                    <CCardText className="text-center">
                      Driving License :
                      {type?.hasDrivingLicense ? "licensed" : "unlicensed"}
                    </CCardText>
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

export default HabitantSearchID;
