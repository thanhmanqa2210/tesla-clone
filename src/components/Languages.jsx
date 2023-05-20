import React from "react";
import "../assets/css/index.css";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import { unShowLangs } from "../app/actions";

function Languages({ showLgs }) {
  console.log("show", showLgs);
  
  const dispatch = useDispatch();
  return (
    <>
      <Langs show={showLgs} className="langs">
        languages
        <div className="close_lang">
        <CustomClose
          onClick={() => dispatch(unShowLangs())}
        ></CustomClose>
        </div>
      </Langs>
      <Fixed show={showLgs} className="fixed--filter"></Fixed>
    </>
  );
}
export default Languages;
const Fixed = styled.div`
  transform: ${(props) =>
    props.show ? "translateX(0px)" : "translateX(100%)"};
`;
const Langs = styled.div`
  transform: ${(props) =>
    props.show ? "translateX(0px)" : "translateX(300px)"};
`;
const CustomClose = styled(CloseIcon)`
  position: absolute;
  cursor: pointer;
  right:0px;
`;
