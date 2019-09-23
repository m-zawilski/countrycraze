import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 1px 1px 2px #000;
  margin: 10px 0;

  h2, h3 {
    padding: 20px;
    width: 100%;
    background: lightgray;
    margin: 0;
    text-align: center;
  }

  p {
    border-top: 1px solid #aaa;
    padding: 10px;
    margin: 0;
    display: flex;
    justify-content: space-between;
  }

  .left {
    max-width: 40%;
    font-weight: bold;
  }

  .right {
    max-width: 55%;
    align-self: center;
    text-align: right;
  }

  div.right > p {
    border-top: none;
    padding: 3px;
  }

  .center {
    display: flex;
    justify-content: center;
  }
`

export default Card
