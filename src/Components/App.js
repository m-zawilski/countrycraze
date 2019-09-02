import React from 'react';
import styled from "styled-components";
import 'typeface-roboto';
import { Route } from "react-router-dom";
import MainPage from "./MainPage";
import CountryPage from "./CountryPage";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Roboto;

  * {
    box-sizing: border-box;
  }
`

function App() {
  return (
    <AppContainer>
      <Route exact path="/" component={MainPage}/>
      <Route path="/page/:apiName" component={CountryPage}/>
    </AppContainer>
  );
}

export default App;
