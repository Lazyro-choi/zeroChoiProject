import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  padding: 1rem 1rem 2rem 0;
  font-weight: bold;
  font-family: "Noto Serif KR", serif;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-left: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

const RightLink = styled.div`
  display: flex;
  color: #097629;
  padding-right: 2rem;

  & > ${StyledLink} {
    color: inherit; // RightLink의 색상을 상속받음
  }
  & > ${StyledLink}:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const Header = () => {
  return (
    <Nav>
      <StyledLink to="/">홈페이지</StyledLink>
      <RightLink>
        <StyledLink to="/intro">소개</StyledLink>
        <StyledLink to="/news">소식</StyledLink>
        <StyledLink to="/message">말씀</StyledLink>
      </RightLink>
    </Nav>
  );
};

export default Header;
