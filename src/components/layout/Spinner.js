import React, {Fragment} from 'react'
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  margin: 100px auto;
  border: 0.2em solid rgba(0, 0, 0, 0.1);
  border-top: 0.2em solid #767676;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 0.6s linear infinite;
`;

export default Spinner