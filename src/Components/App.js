import React from 'react';
import styled from "styled-components";
import 'typeface-roboto';
import { Route } from "react-router-dom";
import MainPage from "./MainPage";
import CountryPage from "./CountryPage";

const Div = styled.div`
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
    <Div>
      <Route exact path="/countrycraze" component={MainPage}/>
      <Route path="/countrycraze/page/:apiName" component={CountryPage}/>
    </Div>
  );
}

export default App;
