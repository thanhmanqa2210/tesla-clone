import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Footer() {
  const [isFooterDisplay, setIsFooterDisplay] = useState(false);
  const isScroll = useSelector((state) => state.scrollEr);
  const footerRef = useRef();
  const handleScroll = () => {
    if (isScroll >= 6 * window.innerHeight - 100 ) {
      setIsFooterDisplay(true);
    } else {
      setIsFooterDisplay(false);
    }
  };
  useEffect(() => {
    handleScroll();
  }, [isScroll]);
  useEffect(() => {
  });
  return (
    <FooterContainer ref={footerRef} isFooterDisplay={isFooterDisplay}>
      <ul>
        <li>
          <Link className="footer_link" to={"about"}>
            Tesla © 2022
          </Link>
        </li>
        <li>
          <Link className="footer_link" to={"legal"}>
            Privacy&Legal
          </Link>
        </li>
        <li>
          <Link className="footer_link" to={"vin-recall-search"}>
            Vehicle Recalls
          </Link>
        </li>
        <li>
          <Link className="footer_link" to={"contact"}>
            Contact
          </Link>
        </li>
        <li>
          <Link className="footer_link" to={"careers"}>
            Careers
          </Link>
        </li>
        <li>
          <Link className="footer_link" to={"legal"}>
            News
          </Link>
        </li>
        <li>
          <Link className="footer_link" to={"legal"}>
            Engage
          </Link>
        </li>
        <li>
          <Link className="footer_link" to={"legal"}>
            Locations
          </Link>
        </li>
      </ul>
    </FooterContainer>
  );
}

export default Footer;
const FooterContainer = styled.div`
  display: ${(props) => {
    return props.isFooterDisplay ? "flex" : "none";
  }};
  transition: all 0.3s ease-in;
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10px;
  color: rgb(121 119 119);
  ul {
    justify-content: center;
    display: flex;
    font-family: "Gotham SSm", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 600;
    li {
      list-style: none;
      font-size: 13px;
      width: fit-content;
      min-height: 40px;
      line-height: 20px;
      padding: 4px;
      margin: 2.5px;
    }
  }
  .footer_link {
    color: rgb(121 119 119);
    text-decoration: none;
  }
`;
