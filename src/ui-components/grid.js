import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  width: 100%;
  gap: 3.25rem;
  row-gap: 2.6875rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 7.0625rem;
`

export const Card = styled.div`
  width: calc(50% - 1.625rem);
  height: 12.5rem;
  background-color: white;
  background-color: rgba(255, 255, 255, .5);
  border-radius: 0.6875rem;
  padding-top: 2.75rem;
  padding-bottom: 2.75rem;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  height: inherit;

  &.active {
    background-color: rgba(255, 255, 255, 1);
  }
`