import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

function Section(props) {
  const {
    title,
    description,
    backgroundImg,
    leftButton,
    rightButton,
    shopNow,
    handleScroll,
    isDownArrow,
  } = props;

  return (
    <Wrap top={400} bgImg={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          {leftButton && <LeftButton>{leftButton}</LeftButton>}
          {rightButton && <RightButton>{rightButton}</RightButton>}
          {shopNow && <LeftButton>{shopNow}</LeftButton>}
        </ButtonGroup>
        {isDownArrow ? (
          <DownArrow
            src="/images/images/down-arrow.svg"
            onClick={(e) => handleScroll(e)}
          />
        ) : (
          <DownArrow />
        )}
      </Buttons>
    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical
  align-items: center;
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/images/${props.bgImg}")`};
`;
const ItemText = styled.div`
  padding-top: 12vh;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(44, 43, 43, 0.8);
  color: white;
  display: flex;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  height: 40px;
  width: 256px;
  font-size: 13px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.7;
  color: black;
  font-weight: 600;
`;
const DownArrow = styled.img`
  margin-top: 25px;
  height: 40px;
  cursor: pointer;
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div``;
