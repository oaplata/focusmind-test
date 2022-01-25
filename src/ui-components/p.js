import styled from "styled-components";
import colors from "./colors";

export const P = styled.p`
  font-size: ${props => props.size || '1.5625rem'};
  font-weight: ${props => props.weight || '400'};
  line-height: 1.9375rem;
  color: ${props => props.color || colors.black};
  margin-top: ${props => props.mt};

  & span {
    font-size: 1.5625rem;
    font-weight: 700;
    line-height: 1.9375rem;
    color: ${colors.blue};
    cursor: pointer;
  }
`