import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { selectCars } from "../features/car/carSlice";
import Languages from "./Languages";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import { showLangs } from "../app/actions";
function Header() {
  const isLogin = useSelector((state) => state.isLogin);
  const showLanguage = useSelector((state) => state.showLanguages);
  const dispatch = useDispatch();
  const [burgerStatus, setBurgerStatus] = useState(false);
  const showLgs = () => {
    dispatch(showLangs());
  };
  console.log(showLanguage);
  return (
    <Container isLogin={isLogin}>
      <Link className="link" to="/">
        <img src="/images/images/logo.svg" alt="Tesla" />
      </Link>
      <Menu isLogin={isLogin}>
        <Link className="link" to="/model-s">
          Model S
        </Link>
        <Link className="link" to="/model-3">
          Model 3
        </Link>
        <Link className="link" to="/model-x">
          Model X
        </Link>
        <Link className="link" to="/model-y">
          Model Y
        </Link>
        <Link className="link" to="/solar-roof">
          SOLAR ROOF
        </Link>
        <Link className="link" to="/solar-panel">
          Solar panels
        </Link>
      </Menu>
      <Lang isLogin={isLogin}>
        <button onClick={showLgs}>
          <i className="fa-sharp fa-solid fa-globe" />
          <span>Languages</span>
        </button>
      </Lang>
        <Languages showLgs={showLanguage}></Languages>
      <RightMenu isLogin={isLogin}>
        <Link to="/" className="link">
          Shop
        </Link>
        <Link to="/teslaAccount" className="link">
          account
        </Link>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <DisplayMenu
        show={burgerStatus}
        className="display_opacity"
      ></DisplayMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>

        <li>
          <Link to="/" className="link">
            Existing Inventory
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            Use Inventory
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            Trade In
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            Cyber truck
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            Roadster
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            Item
          </Link>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  position: fixed;
  ${(props) =>
    props.isLogin &&
    `background-color:#fff;
    box-shadow: 0px 8px 20px 8px rgb(255 255 255);`}
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 20px;
  z-index: 10;
`;
const Menu = styled.div`
  display: ${(props) => (props.isLogin ? "none" : "flex")};
  flex: 1;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: ${(props) => (props.isLogin ? "none" : "flex")};
  padding: 0 10px;
  align-items: center;
`;
const Lang = styled.div`
  display: ${(props) => (props.isLogin ? "flex" : "none")};
  button {
    border: none;
    padding: 10px;
    border-radius: 7px;
    background-color: #fff;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.1s ease-in;
    &:hover {
      background-color: #f2f2f2;
    }
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  background: white;
  width: 300px;
  z-index: 100;
  padding: 20px;
  text-align: start;
  right: 0;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-out;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  li {
    list-style: none;
    padding: 15px;
  }
  li:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const DisplayMenu = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  backdrop-filter: ${(props) => (props.show ? "blur(3px)" : "none")};
  transition: all 0.2s ease-out;
`;
