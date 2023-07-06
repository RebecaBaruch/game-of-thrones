import React from "react";

import { HeroSectionProps } from "@/interfaces/props";
import { Main, MainContent } from './styled';

export default function HeroSection({ imgUrl, children }: HeroSectionProps): JSX.Element{
    return(
        <Main imgUrl={imgUrl}>
            <MainContent>
                {children}
            </MainContent>
        </Main>
    )
} 