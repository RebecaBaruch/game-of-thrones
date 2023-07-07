import React from "react";

import Image from 'next/image';

import { Button } from './styled';
import ButtonIcon from '../../../../../public/images/sideMenuBtn.svg';
import { ButtonProps } from "@/interfaces/props";

export default function MenuButton({ onClick, className }: ButtonProps): JSX.Element{
    return(
        <Button type="button" onClick={onClick} className={className}>
            <Image src={ButtonIcon} alt="button-icon" />
        </Button>
    )
}