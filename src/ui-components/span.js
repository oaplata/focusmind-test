import styled from 'styled-components'

export const Span = styled.span`
  font-size: 1.4375rem;
  font-weight: 400;
  line-height: 1.75rem;
  letter-spacing: -0.0625rem;
  align-self: ${props => props.aling};
  color: ${props => props.color};
  margin-bottom: ${props => props.mb};
`