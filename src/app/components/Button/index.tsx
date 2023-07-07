import React from "react";
import { ButtonWrapper } from "./styled";
import { LinkProps } from "@/interfaces/props";

export default function Button({ href, children }:LinkProps): JSX.Element{
    return(
        <ButtonWrapper href={href}>
            {children}
        </ButtonWrapper>
    )
}