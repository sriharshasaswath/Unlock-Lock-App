import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`

export const MainContainer = styled.div`
  background: linear-gradient(#0b0c1e, #3c2940);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  width: 200px;
`

export const NameText = styled.p`
  color: white;
  font-family: 'Roboto';
`

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 0;
  background-color: #06b6d4;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
`
