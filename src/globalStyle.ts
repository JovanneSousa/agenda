import { createGlobalStyle } from 'styled-components'

export const cores = {
  lightGray: 'lightgray',
}

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: roboto, sans-serif;
    list-style: none;
    text-decoration: none;

    body {
        background-color: darkblue;
    }
}



.container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
}
`
