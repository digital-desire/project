import styled from "styled-components";
import { Green } from "../stories/Button.stories";

import React from "react";
import { LokalneTag } from "./styles/Lokalne.styled";
import { LokalneZbior } from "./styles/Lokalne.styled";



export default function Lokalne() {
    const tagi = ["Tag", "Smog", "Wypadki", "Protesty", "Interwencje", "Inwestycje 22", "Wybory"];
    const tagiLista = tagi.map((tag) => 
    <LokalneTag>{tag}</LokalneTag>);
    return (
        <div><LokalneZbior>
            
            {tagiLista}
            
            
            </LokalneZbior>
           
        </div>
    );
}
