import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
  --green: #4FD62B;
  --darkgreen: #22A101;
  --red: #E42828;
  --darkred: #A00202;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #E1E1E6;
  }

  button {
    cursor: pointer;
  }
`
