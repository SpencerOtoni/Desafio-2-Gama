import styled from 'styled-components'

export const div = styled.div`
 width: 100vh;
 height: 100vh;
`

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 1.5rem;
  padding: 0 .5rem;
  border-radius: .25rem 0 0 .25rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`

export const Button = styled.button`
  border: 1px solid #000;
  height: 1.5rem;
  background: #000;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`