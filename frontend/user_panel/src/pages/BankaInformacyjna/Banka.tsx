import React from 'react'
import { TytulStyled } from '../Artykuly/Artykuly.styled'
import { NaglowekStyled } from '../../components/styles/Body.styled'
import BankaKarty from './BankaKarty'
import { Divider } from '../Artykuly/Artykuly.styled'
import { Margines } from '../Artykuly/Artykuly.styled'
import PodobneBanki from './PodobneBanki'

function Banka() {
  return (
   <>
   <TytulStyled
            >Bańka Informacyjna</TytulStyled>
   <NaglowekStyled>Tematy z bańki</NaglowekStyled>
   <BankaKarty/>
   <Margines></Margines>
   <Divider />
   <NaglowekStyled>Podobne bańki
   </NaglowekStyled>
   <PodobneBanki/>
   </>
  );
}

export default Banka