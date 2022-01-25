import styled, { css } from "styled-components";
import colors from "./colors";

export const Button = styled.button`
  margin-bottom: ${props => props.mb};
  cursor: pointer;
  background: none;
  border: none;
  ${ props => props.link && css`
  &, & a{
      color: ${colors.blue};
      align-self: flex-start;
      text-decoration: underline;
      font-weight: 400;
      font-size: 1.4375rem;
      line-height: 2.4375rem;
      text-decoration: underline;
    }
  ` }
  ${ props => !props.link && css`
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    padding-left: 3.125rem;
    padding-right: 3.125rem;
    width: ${props => props.block && '100%'};
    background-color: ${props => props.background || colors.blue};
    color: ${props => props.color || colors.withe};
    border-radius: 0.6875rem;
    font-weight: 400;
    font-size: 1.75rem;
    line-height: 2.1875rem;
  ` }
`
