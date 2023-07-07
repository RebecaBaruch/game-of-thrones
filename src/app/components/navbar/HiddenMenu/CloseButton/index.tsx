import React from "react";

import Image from 'next/image';

import { CloseBtn } from "./styled";
import { ButtonProps } from "@/interfaces/props";

import CloseIcon from '../../../../../../public/images/x.svg';

export default function CloseButton({ onClick }: ButtonProps): JSX.Element{
    return(
        <CloseBtn  onClick={onClick}>
            <Image src={CloseIcon} alt='closeButttonIcon' />
        </CloseBtn>
    );
}