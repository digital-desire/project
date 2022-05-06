import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #ffffff;
    box-shadow: 0px 4px 30px -8px rgba(40, 40, 40, 0.24);
    


`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height:8vh;
    font-family: 'Montserrat', sans-serif;
    

@media(max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
}

`
export const NavButton = styled.a `
padding: 7px 7px 5px 5px;
border-radius: 0px 0px 10px 10px ;
font-family: Montserrat;
font-style: normal;
text-decoration-line:none ;
font-weight: 500;
font-size: 14px;
width: 100px;
height: 100%;
text-align:center;
display: flex;
align-items: center;
justify-content: center;
color: rgba(0, 0, 0, 0.6);

&:hover {
   
    background: linear-gradient(100.82deg, #2B5CF6 0%, #9269F6 100%);
box-shadow: inset 0px 0px 13px 4px rgba(0, 0, 0, 0.25);
border-radius: 0px 0px 10px 10px ;
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 14px;
text-align:center;
color: #ffffff;
text-decoration-line:none ;


    
}


`
export const Account = styled.nav`
padding:5px;
width: 45px;
height:45px;
background: #C4C4C4;
border-radius: 72px;
margin-left: auto;

&:hover {
    background: linear-gradient(100.82deg, #2B5CF6 0%, #9269F6 100%), #C4C4C4;
    box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.25);
}

`

export const AccountMenu = styled.div `

display: flex;
flex-direction:column;
width: 90px;
position: absolute;
transition: all 0.5s ease;
background: #ffffff;

`

export const Logo = styled.img`
width: 200px;

@media(max-width: ${({theme}) => theme.mobile}) {
    margin-bottom: 40px;}`

export const Image = styled.img`
width: 375px;
margin-left: 40px;

@media(max-width: ${({theme}) => theme.mobile}) {
    margin: 40px 0 30px;
}
`
export const Szukajka = styled.input`
border: 2px solid #DEDEDE;
margin-left:auto;
box-shadow: inset 3px 3px 10px 1px rgba(0, 0, 0, 0.13);
border-radius: 10px 10px 10px 10px;
height:30px;
width: 25%;
padding-left:15px;
flex-grow: 0.3;
font-family: 'Montserrat', sans-serif ;
`;