import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  isNowLogin,
  formPasswordRegis,
  formRePasswordRegis,
} from "../../app/actions/index";
import "../../assets/css/register.css";
import "../../assets/css/index.css";

function Register() {
  const eyeRef = useRef();
  const eyeReRef = useRef();
  const formPasswordRegister = useSelector((state) => state.formPasswordRegis);
  const formRePasswordRegister = useSelector(
    (state) => state.formRePasswordRegis
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isNowLogin(true));
  }, []);
  useEffect(() => {
    console.log(eyeRef.current.value);
    if (
      formPasswordRegister.password !== "" &&
      !formPasswordRegister.toggleEye
    ) {
      dispatch(formPasswordRegis({ isEye: 1 }));
    } else if (
      formPasswordRegister.password !== "" &&
      formPasswordRegister.toggleEye
    ) {
      dispatch(formPasswordRegis({ isEye: 2 }));
    } else {
      dispatch(formPasswordRegis({ isEye: 0 }));
    }
  }, [formPasswordRegister.password, formPasswordRegister.toggleEye]);
  useEffect(() => {
    console.log(eyeReRef.current.value);
    if (
      formRePasswordRegister.password !== "" &&
      !formRePasswordRegister.toggleEye
    ) {
      dispatch(formRePasswordRegis({ isEye: 1 }));
    } else if (
      formRePasswordRegister.password !== "" &&
      formRePasswordRegister.toggleEye
    ) {
      dispatch(formRePasswordRegis({ isEye: 2 }));
    } else {
      dispatch(formRePasswordRegis({ isEye: 0 }));
    }
  }, [formRePasswordRegister.password, formRePasswordRegister.toggleEye]);
  const handleEye = () => {
    dispatch(formPasswordRegis({ toggleEye: !formPasswordRegister.toggleEye }));

    dispatch(
      formPasswordRegis({ typePassword: !formPasswordRegister.typePassword })
    );
  };
  const handleEyeRe = () => {
    dispatch(
      formRePasswordRegis({ toggleEye: !formRePasswordRegister.toggleEye })
    );

    dispatch(
      formRePasswordRegis({
        typePassword: !formRePasswordRegister.typePassword,
      })
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="register_container">
      <h1>Create Account</h1>
      <form className="form-register">
        <div className="form-register--item">
          <label htmlFor="formSelectMarket">
            <span> Select Market</span>
          </label>
          <select
            className="select-form"
            name="selectMarket"
            id="formSelectMarket"
            autoComplete="off"
            disabled
          >
            <optgroup label="North America">
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="MX">México</option>
              <option value="PR">Puerto Rico</option>
            </optgroup>
          </select>
          {/* <i className="fa-solid fa-angle-down icon--down" /> */}
        </div>
        <div className="form-register--item">
          <label htmlFor="formSelectLanguage">
            <span> Select Language</span>
            {/* <i className="fa-sharp fa-solid fa-circle-exclamation icon-note" /> */}
          </label>
          <select
            disabled
            name="selectLanguage"
            id="formSelectLanguage"
            autoComplete="off"
            className="select-form"
          >
            <option value="en-US">English</option>
          </select>
          {/* <i className="fa-solid fa-angle-down icon--down" /> */}
        </div>
        <div className="form-register--item">
          <label htmlFor="formFirstName">
            <span> First Name</span>
          </label>
          <input type="text" id="formFirstName" name="formFirstName" />
        </div>
        <div className="form-register--item">
          <label htmlFor="formLastName">
            <span> Last Name</span>
          </label>
          <input type="text" id="formLastName" name="formLastName" />
        </div>
        <div className="form-register--item">
          <label htmlFor="formEmail">
            <span> Email Address</span>
          </label>
          <input type="email" name="email" id="formEmail" />
        </div>
        <div className="form-register--item">
          <label htmlFor="formPassWord">
            <span> Password</span>
            <i className="fa-sharp fa-solid fa-circle-exclamation icon-note" />
          </label>
          <input
            ref={eyeRef}
            type={formPasswordRegister.typePassword ? "password" : "text"}
            name="password"
            id="formPassWord"
            maxLength={10}
            onChange={(e) =>
              dispatch(formPasswordRegis({ password: e.target.value }))
            }
            value={formPasswordRegister.password}
          />
          <IconEye
            eye={formPasswordRegister.isEye}
            className="fa-regular fa-eye"
            onClick={handleEye}
          />
          <IconEyeSlash
            eye={formPasswordRegister.isEye}
            className="fa-regular fa-eye-slash"
            onClick={handleEye}
          />
        </div>
        <div className="form-register--item">
          <label htmlFor="formRePassWord">
            <span>Confirm Password</span>
            <i className="fa-sharp fa-solid fa-circle-exclamation icon-note" />
          </label>
          <input
            ref={eyeReRef}
            type={formRePasswordRegister.typePassword ? "password" : "text"}
            name="password"
            id="formRePassWord"
            maxLength={10}
            onChange={(e) =>
              dispatch(formRePasswordRegis({ password: e.target.value }))
            }
            value={formRePasswordRegister.password}
          />
          <IconEye
            eye={formRePasswordRegister.isEye}
            className="fa-regular fa-eye"
            onClick={handleEyeRe}
          />
          <IconEyeSlash
            eye={formRePasswordRegister.isEye}
            className="fa-regular fa-eye-slash"
            onClick={handleEyeRe}
          />
        </div>
        <p
          className="tds-text--caption"
          data-i18n-key="register:formConsentText"
          style={{ "margin-left": "16px", color: "#" }}
        >
          By continuing, I understand and agree to Tesla’s Privacy Notice and
          Terms of Use for creating a Tesla Account
        </p>
        <input
          type="submit"
          value="NEXT"
          className="submit"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default Register;
const IconEye = styled.i`
  position: absolute;
  top: 41px;
  display: ${(props) => (props.eye === 1 ? "flex" : "none")};
  right: 5px;
  z-index: 11;
  cursor: pointer;
`;
const IconEyeSlash = styled.i`
  position: absolute;
  display: ${(props) => (props.eye === 2 ? "flex" : "none")};
  top: 41px;
  right: 5px;
  z-index: 11;
  cursor: pointer;
`;
