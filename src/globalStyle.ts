import { createGlobalStyle } from 'styled-components'

export const cores = {
  container: '#1e1e1e',
  sidebar: '#181818',
  background: '#121212',
  titleColor: '#e0e0e0',
  textColor: '#b0b0b0',
  buttonColor: '#4fc3f7',
}

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: roboto, sans-serif;
    list-style: none;
    text-decoration: none;
    color: ${cores.titleColor};

    body {
        background-color: ${cores.background};
    }
}



.container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
}
`
