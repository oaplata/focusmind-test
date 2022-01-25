import styled from "styled-components";

export const H1 = styled.h1`
  font-weight: 700;
  font-size: ${props => props.size || '2.8125rem'};
  line-height: 3.5625rem;
  letter-spacing: -1;
  color: ${props => props.color}
`

export const H3 = styled.h3`
  font-weight: 500;
  font-size: 2.125rem;
  line-height: 3.375rem;
  letter-spacing: -1;
  margin-bottom: ${props => props.mb};
`
