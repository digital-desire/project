import React, { ReactNode } from 'react';
import { StatystykiSzczegoly } from './Panel.styled';

export default function Modal({open, children, onClose }:{open:boolean, children:ReactNode, onClose:()=>void}) {
    if (!open) return null
  return (
    <StatystykiSzczegoly><button onClick={onClose}>close modal</button>{children}</StatystykiSzczegoly>
  )
}
