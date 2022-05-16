import React from 'react'
import { ModalBackground, ModalContainer, ModalCloseButton } from './Profil.styled'
import CloseIcon from '@mui/icons-material/Close';

function MessageModal({ closeModal }:{closeModal:(value:boolean)=>void}) {
  return (
    <div>
<ModalBackground>

<ModalContainer>
<ModalCloseButton onClick={() => closeModal(false)}>
<CloseIcon fontSize='medium'/>
</ModalCloseButton>
Tutaj się wyświetli coś co dopiero zaprojektuje
</ModalContainer>
</ModalBackground>

    </div>
  )
}

export default MessageModal