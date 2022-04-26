import styled from "styled-components";

export const ProfilUserStyl = styled.div`
background: #FFFFFF;
box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
border-radius: 15px;
padding:20px;
width:85%;

`

export const NazwaUzytkownikaStyl = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 19px;

display: flex;
align-items: center;
margin-left:30px;
color: #000000;
`

export const RankingAutorowStyl = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 18px;
display: flex;
align-items: center;
display: flex;
justify-content: center;
letter-spacing: 0.03em;
padding-top:4.5px;
color: #000000;
`

export const StatystykiUzytkownikaStyl = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin-bottom: 5px;
`
export const StatystykiLiczbaStyl = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
display: flex;
align-items: center;
text-align: center;

color: #000000;

`
export const StatystykiNazwaStyl = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
display: flex;
align-items: center;
text-align: center;

color: #000000;

`



export const UzytkownikDaneStyl = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;

display: flex;
align-content: center;
letter-spacing: 0.005em;
margin-left: 5px;
color: #000000;

`

export const UzytkownikInfoStyl = styled.div`

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
display: flex;
align-content: center;

color: #000000;
`

export const LiniaUserStyl = styled.div`
height: 1px;

border: 1px solid #CCCCCF;

width:100%;
display: flex;
align-items: center;
margin-top:5px;
margin-left:15px;
opacity: 0.5;

`

export const UzytkownikOpis = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;


display: flex;
align-items: center;
text-align: justify;

color: #000000;
`

export const DodajZnajomego = styled.button`
background: linear-gradient(100.82deg, #2B5CF6 0%, #9269F6 100%);
box-shadow: inset 4px 4px 22px rgba(255, 255, 255, 0.12);
border-radius: 5px;
color: #FFFFFF;
width:100%;
height:100%;
padding:7px;
border: none;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 24px;
/* or 185% */



`
export const WyslijWiadomosc = styled.button`
background: #DEDEDE;
box-shadow: inset 4px 4px 22px rgba(255, 255, 255, 0.12);
border-radius: 5px;
border: none;
width:100%;
padding-left:5px;
padding-right:7px;
height: 100%;
cursor: pointer;

`

export const UzytkownikZdjęcie = styled.div`
position: absolute;
top:110px;
left:210px;
border: 6px solid #FFFFFF;
box-shadow: 1px -4px 5px -2px rgba(0, 0, 0, 0.25);
border-radius: 100px;
background: url(/images/profilowe.jpeg);
background-size: cover;
background-repeat: no-repeat;
background-position: center;
width:130px;
height:130px;

`

export const UlubioneTematyStyl = styled.div`
background: #FFFFFF;
box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
border-radius: 15px;
padding:20px;
width:85%;
display:flex;
flex-direction: column;
align-content:space-around;
`

export const UlubionaBanka = styled.div`
background: url(/images/banka1.jpeg);
border-radius: 10px;
width:100%;
padding:15px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 25px;
/* or 156% */

text-align: center;
color: #FFFFFF;
margin-top:7px;
margin-bottom: 7px;;
`

export const ProfilAktywnoscKontener = styled.div`
background: #FFFFFF;
box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
border-radius: 10px;
width:100%;

padding: 20px;
padding-right: 25px;
display:flex;
flex-direction: row;
margin-bottom:30px;

`

export const AktywnoscUsera = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 18px;
display: flex;
align-items: center;

color: #000000;


`

export const LewyButton = styled.button`
background:none;
border:none;
cursor: pointer;
`
export const PrawyButton = styled.button`
background:none;
border:none;
cursor:pointer;
`

export const PunktyAktywnosc = styled.div`
display:flex;
flex-direction: row;
align-items: center;
`

export const ZdjecieArtykulu = styled.div`
background: url(/images/banka5.jpeg);
border-radius: 5px;
width:90px;
height:90px;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`

export const TytulArtykulu = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;

color: #000000;
margin-left: 5px;
`

export const LeadArtykulu = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 30px;
margin-left: 5px;
margin-top: 10px;
/* or 173% */

display:flex;
align-content: space-around;

color: #000000;
`

export const LiniaDluga = styled.div`
border: 1px solid #CCCCCF;
width: 100%;
margin-top: 10px;
margin-bottom: 10px;
`

export const Miniprofilowe = styled.div`
background: url(/images/profilowe.jpeg);
width:40px;
height: 40px;
background-size: cover;
background-repeat: no-repeat;
background-position: center;

`

export const NickUzytkownika = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 19px;
line-height: 21px;
display: flex;
align-items: center;

color: #000000;

padding-top:7px;
`

export const KomentarzUzytkownika = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 26px;
/* or 217% */

text-align: justify;

color: #000000;
`

export const ModalBackground = styled.div`
width:100vw;
height:100vh;
left:0px;
top:0px;
position: fixed;
display: flex;
justify-content: center;
align-items:center;
background: rgba(0, 0, 0, 0.45);
backdrop-filter: blur(1px);
`

export const ModalContainer = styled.div`
width:40vw;
height:50vh;
background: #FFFFFF;
box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
border-radius: 15px;

`

export const ModalCloseButton = styled.button`
background: linear-gradient(100.82deg, #2B5CF6 0%, #9269F6 100%);
color: #ffffff;
border: none;
border-radius: 10px;
font-size: 25px;
display: flex;
justify-content: center;
align-items: center;
z-index: 10;
margin-left: 92%;
margin-top: 2%;
cursor: pointer;

`
