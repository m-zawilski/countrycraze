import styled from 'styled-components';

export default styled.select`
  width: 180px;
  text-align-last: center;
  margin: 0 3px;
  cursor: pointer;
  background: ${props => props.isActive ? "#262" : "#ddd"};
  color: ${props => props.isActive ? "#ddd" : "#333"};
  appearance: none;
  height: 25px;
  outline: none;
  border: 2px solid #000;
`