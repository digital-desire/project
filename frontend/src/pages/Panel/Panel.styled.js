import styled from "styled-components";

export const Statystyka = styled.div `
background: #FFFFFF;
box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
border-radius: 20px;
display: flex;
flex-direction: row;
padding-top: 15px;
padding-bottom: 15px;
border: none;
width: 100%;

`
export const StatystykaButton = styled.button`
border:none;
background: none;
display:flex;
justify-content: center;
width:100%;
`

export const StatystykiSzczegoly = styled.div`
background: #FFFFFF;
box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
border-radius: 20px;

`

export const Wykres = styled.div`
background: #FFFFFF;
box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
border-radius: 20px;
height: 150%;
`


export const StatystykaIkona = styled.div`
color: #D5DEFD;
display: flex;
justify-content: flex-end;
margin-right: 25px;


`

export const StatystykaNapis = styled.div`
display: flex;
flex-direction: column;
align-content: space-around;
align-items: flex-start;
`

export const StatystykaLiczba = styled.div`
font-family: Montserrat, sans-serif ;
font-style: normal;
font-weight: 500;
font-size: 18px;
`

export const StatystykaNazwa = styled.div`
font-family: 'Montserrat', sans-serif ;
font-style: normal;
font-weight: 400;
font-size: 14px;
`



export const WykresKolowy = styled.div`
background: url(/images/wykreskolowy.png);
background-size: contain;
background-repeat: no-repeat;
background-position: left;
height: 150%;
margin-top:5px;

`

export const Legenda = styled.div`
display:flex;
flex-direction: row;

`

export const LegendaNazwa = styled.div`

margin-left:5px;
font-size: 13px;
`

export const CalaLegenda = styled.div`
display:flex;
flex-direction:row;
align-content: flex-end;

margin-right:5px;
margin-top:auto;
padding-top:20px;
height:150%;
`