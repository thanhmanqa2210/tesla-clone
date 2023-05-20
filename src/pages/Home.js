import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Section from "../components/Section";
import { useDispatch } from "react-redux";
import { actionScrollEr, isNowLogin } from "../app/actions/index";
function Home() {
  const myRef = useRef();
  const dispatch = useDispatch();
  const [isDownArrow] = useState(true);
  const handleScroll = (e) => {
    myRef.current.scrollTo({
      top: e.target.offsetTop,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    myRef.current.addEventListener("scroll", function () {
      dispatch(actionScrollEr(myRef.current.scrollTop));
    });
    document.title = "Tesla Clone";
    dispatch(isNowLogin(false));
  });
  return (
    <Container ref={myRef} className="home">
      <Section
        title="Solar panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        leftButton="Custom Order"
        rightButton="existing inventory"
        handleScroll={handleScroll}
        isDownArrow={isDownArrow}
      />
      <Section
        title="Solar roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftButton="Custom Order"
        rightButton="existing inventory"
        handleScroll={handleScroll}
        isDownArrow={isDownArrow}
      />
      <Section
        title="Modal S"
        description={
          <>
            Order Online for&nbsp;
            <a href="https://www.tesla.com/support/taking-delivery?redirect=no">
              Touchless Delivery
            </a>
          </>
        }
        backgroundImg="model-s.jpg"
        leftButton="Custom Order"
        rightButton="existing inventory"
        handleScroll={handleScroll}
        isDownArrow={true}
      />
      <Section
        title="Modal 3"
        description={
          <>
            Order Online for&nbsp;
            <a href="https://www.tesla.com/support/taking-delivery?redirect=no">
              Touchless Delivery
            </a>
          </>
        }
        backgroundImg="model-3.jpg"
        leftButton="Custom Order"
        rightButton="existing inventory"
        handleScroll={handleScroll}
        isDownArrow={true}
      />
      <Section
        title="Modal X"
        description={
          <>
            Order Online for&nbsp;
            <a href="https://www.tesla.com/support/taking-delivery?redirect=no">
              Touchless Delivery
            </a>
          </>
        }
        backgroundImg="model-x.jpg"
        leftButton="Custom Order"
        rightButton="existing inventory"
        handleScroll={handleScroll}
        isDownArrow={true}
      />
      <Section
        title="Modal Y"
        description={
          <>
            Order Online for&nbsp;
            <a href="https://www.tesla.com/support/taking-delivery?redirect=no">
              Touchless Delivery
            </a>
          </>
        }
        backgroundImg="model-y.jpg"
        leftButton="Custom Order"
        rightButton="existing inventory"
        handleScroll={handleScroll}
        isDownArrow={true}
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        shopNow={
          <>
            <h3 className="shop-now">Shop Now</h3>
          </>
        }
        handleScroll={handleScroll}
        isDownArrow={false}
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  transition: all 0.2s ease-in;
`;
