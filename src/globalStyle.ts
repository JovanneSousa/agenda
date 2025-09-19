import { createGlobalStyle } from 'styled-components'

export const cores = {
  container: '#1e1e1e',
  sidebar: '#181818',
  background: '#121212',
  titleColor: '#e0e0e0',
  textColor: '#b0b0b0',
  buttonColor: '#4fc3f7',
  buttonColorGradient: '#4fc3f733',
  gradient: 'linear-gradient(135deg, #0d47a1, #0288d1)',
  gradient2: 'linear-gradient(135deg, #0288d1, #4fc3f7)',
  white: '#fff',
  darkgray: '#a9a9a9',
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
        background: ${cores.gradient};
    }
}



.container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
}
`
