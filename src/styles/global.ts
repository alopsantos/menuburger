import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  
  body {
    background-image: linear-gradient(to right bottom, ${props =>
      props.theme.colors.gradienteA}, ${props =>
  props.theme.colors.gradienteB} );
    color: ${props => props.theme.colors.black300};
  }

  body, input, button {
    font-size: 16px;
  }

  body::-webkit-scrollbar {
    display: none
  }

  button{
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
`
