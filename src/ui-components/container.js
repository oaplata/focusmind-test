import styled, { css } from "styled-components";
import colors from "./colors";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color || colors.black};
  background-color: ${({ background }) => background || colors.withe};
`

export const HomeContainer = styled.div`
  width: 64rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 7rem;
  padding-right: 7rem;
  padding-top: 7rem;
  ${ props => props['background-url'] && css`
    background-image: url(${props['background-url']})
  `}
`