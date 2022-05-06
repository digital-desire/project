import React from 'react';
import { StatystykiSzczegoly } from './Panel.styled';

export default function Modal({open, children, onClose }) {
    if (!open) return null
  return (
    <StatystykiSzczegoly><button onClick={onClose}>close modal</button>{children}</StatystykiSzczegoly>
  )
}
