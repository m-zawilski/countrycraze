import React from 'react';
import styled from "styled-components";
import 'typeface-roboto';
import { Route, Switch } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import CountryPage from "./CountryPage/CountryPage";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Roboto;
  color: #333;
  background: linear-gradient(#222, #333);

  button { 
    user-select: none;
  }

  * {
    box-sizing: border-box;
  }
`

function App() {
  return (
    <Div>
      <Switch>
        <Route exact path="/countrycraze" component={MainPage}/>
        <Route path="/countrycraze/country/:alpha3Code" component={CountryPage}/>
        <Route path="*" component={MainPage}/>
      </Switch>
    </Div>
  );
}

export default App;
