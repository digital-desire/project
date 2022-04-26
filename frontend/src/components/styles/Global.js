
   
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
    
  }
  body {
    
    color: #000000;
    font-family: 'Montserrat', sans-serif !important;
    font-size: 1.15em;
    margin: 0;
    
  }
  p {
   
    line-height: 1.5;
  }
  img {
    max-width: 100%;
}
`


export default GlobalStyles