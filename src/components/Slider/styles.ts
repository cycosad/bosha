import styled from "styled-components";

const Input = styled.input`
  -webkit-appearance: none;
  outline: none;
  border-radius: 15px;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
  ::-webkit-slider-runnable-track {
    width: 100%;
    cursor: pointer;
    height: 10px;
    box-shadow: none;
  }
  ::-moz-range-track {
    width: 100%;
    cursor: pointer;
    height: 10px;
    box-shadow: none;
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(to right bottom, #e9a08c, #ff96b7);
    cursor: pointer;
    margin-top: -5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3),
      -3px 9px 9px rgba(255, 255, 255, 0.33) inset, -1px 3px 2px #e9a08c inset;
  }
  ::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(to right bottom, #e9a08c, #ff96b7);
    cursor: pointer;
    margin-top: -5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3),
      -3px 9px 9px rgba(255, 255, 255, 0.33) inset, -1px 3px 2px #e9a08c inset;
  }
`;

export { Input };
