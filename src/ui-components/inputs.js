import styled from "styled-components";
import colors from "./colors";

export const Input = styled.input`
  font-size: 1.4375rem;
  line-height: 1.75rem;
  letter-spacing: -3;
  font-weight: 400;
  padding-right: 3.125rem;
  padding-top: 1.8125rem;
  padding-bottom: 1.8125rem;
  padding-left: 2.1875rem;
  border-style: solid;
  border-width: 0.125rem;
  border-color: ${colors.black};
  border-radius: 0.6875rem;
  width: 100%;
  margin-bottom: ${props => props.mb};
  outline: none;
  position: relative;

  &:focus, &:active {
    border-color: ${colors.blue};
  }

`

export const InputContainer = styled.div`
  width: 100%;
  position: relative;

  & span {
    display: none;
    position: absolute;
    top: -0.7rem;
    left:3.125rem;
    font-size: 1.4375rem;
    line-height: 1.625rem;
    background-color: ${colors.withe};
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    color: ${colors.blue};
  }
  &.active span {
    display: block;
  }
  &.active input {
    border-color: ${colors.blue}
  }
`
