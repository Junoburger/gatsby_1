import React from "react";
import { Layout } from "../components/layout";
import styled from "styled-components";

const Nav = styled.nav`
  position: relative;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledHeader = styled.div`
  font-size: 21pt;
  display: grid;
  grid-template-columns: 2fr 2fr;
  padding: 10px;
  align-items: center;
  ${Nav} ul {
    display: grid;
    grid-template-columns: 2fr 2fr;
  }
  li {
    list-style: none;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      A Gatsby tryout
      <Nav>
        <ul>
          <li>
            <a href="/">Link to</a>
          </li>
          <li>
            <a href="/">Open</a>
          </li>
        </ul>
      </Nav>
    </StyledHeader>
  );
};

const App = () => (
  <>
    <Layout>
      <Header />
    </Layout>
  </>
);

export default App;
