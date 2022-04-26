import React from 'react';

import Button from './Kurs.styled';
import GlobalStyle from './GlobalStyle';

export default function Kurs() {
  return (
    <div>
        <GlobalStyle />
        <div>hello roman</div>
        <Button width="200px">Close / save</Button>
        <Button secondary>Close / save</Button>
    
    </div>
  )
}
