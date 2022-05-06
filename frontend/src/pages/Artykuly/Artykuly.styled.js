import styled from "styled-components";

export const TytulStyled = styled.p `
font-family: Montserrat, sans-serif;
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #000000;
margin-top: 20px;
background-color: none;
display: flex;
justify-content: center;
`

export const Divider = styled.div`
    width: inherit;
height: 0.5px;

opacity: 0.2;
background: #000000;
box-shadow: 110px 4px 4px rgba(0, 0, 0, 0.25);


`
export const Margines = styled.div`
    background: none;
    height:10px;
    margin-bottom:20px;
`

export const NazwaFiltra = styled.p`
    font-family: 'Montserrat', sans-serif ;
    font-style: normal;
font-weight: 600;
font-size: 15px;
`

export const FiltryStyled = styled.div `
    font-family: 'Montserrat', sans-serif ;
    font-style: normal;
font-weight: normal;
font-size: 14px;
`
export const PoleTekstowe = styled.input`
border: 2px solid #DEDEDE;

box-shadow: inset 3px 3px 10px 1px rgba(0, 0, 0, 0.13);
border-radius: 10px 10px 10px 10px;
height:35px;
width:100%;

flex-grow: 0.4;
`;

export const PrzedzialDat = styled.div`
    display: flex;
    
    justify-content:space-between ;
    padding-right:40px ;
    margin-bottom:30px ;
`
export const ButtonFiltry = styled.div`
    width: 151px;
height: 45px;
margin-top:20px ;
margin-bottom:20px;
margin-left:auto ;
margin-right:auto ;
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(100.82deg, #2B5CF6 0%, #9269F6 100%);
box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.25), inset 4px 4px 22px rgba(255, 255, 255, 0.12);
border-radius: 10px;
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 15px;

/* or 160% */

display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;

`