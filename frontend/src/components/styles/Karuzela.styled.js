import styled from "styled-components";



export const GlownyKontener = styled.div `
    
    height: 40vh;
    display: flex;
    flex-direction:row ;
    flex-wrap: wrap ;


`
export const GlownyKontenerBanki = styled.div `
    
    height: 60vh;
    display: flex;
    flex-direction:row ;
    flex-wrap: wrap ;

`

export const LewyKontener = styled.a `
    
    height: 40vh;
    
`
export const PrawyKontener = styled.div `
    
    height: 41vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap ;

   align-items:stretch ;
    justify-content:space-between ;
    
`
export const MalaKarta = styled.a `
    
    background: #ff8907;
    margin-bottom: 20px;
            font-family: Montserrat, sans-serif;
                    font-style: normal;
                    font-weight: 600;
                    font-Size: 20px;
                    color: #ffffff;
    height: 95%;
    max-height:30vh ;
    width:95%;
    text-decoration: none;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 16.46%, rgba(0, 0, 0, 0.75) 84.78%), url(/images/karuzela2.jpeg);
    background-size:cover ;
    background-position:center ;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    border-radius:10px ;
    box-shadow: 3px 3px 12px 1px rgba(0, 0, 0, 0.3);

    &:hover {
        box-shadow: inset 776px 3px 12px 1px rgba(0, 0, 0, 0.4), 3px 3px 12px 1px rgba(0, 0, 0, 0.6);
        
        transition: all 0.20s ease-out;
    }

`
export const DuzaKarta = styled.div `
    height:inherit;
    /* background-image:url(/images/karuzela.jpeg) ; */
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 32.84%, rgba(0, 0, 0, 0.6) 69.79%), url(/images/karuzela.jpeg);
    background-size:cover ;
    background-position:center ;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    border-radius:20px;
    margin-right:10px ;
    box-shadow: 4px 4px 12px 1px rgba(0, 0, 0, 0.3);

    &:hover {
        box-shadow: inset 676px 3px 12px 1px rgba(0, 0, 0, 0.4), 4px 4px 12px 1px rgba(0, 0, 0, 0.6);
        
        transition: all 0.20s ease-out;
    }
    
`
export const KartaTytul = styled.text`
    
    margin-left: 30px;
            margin-bottom: 20px;
            font-family: Montserrat, sans-serif;
                    font-style: normal;
                    font-weight: 600;
                    font-Size: 20px;
                    color: #ffffff;
                    
`
