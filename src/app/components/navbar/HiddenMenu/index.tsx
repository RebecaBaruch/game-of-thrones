'use client'
import React from "react";

import Image from 'next/image';

import { LiItem, MenuContainer } from "./styled";
import NavLink from "../NavLink";
import SocialLinks from "../../SocialLink";

import Underline from '../../../../../public/images/medievalUnderline.svg';
import { HiddenMenuProps } from "@/interfaces/props";

export default function HiddenMenu({ isOpen , className, children }: HiddenMenuProps): JSX.Element{

    return(
        <MenuContainer className={className} isOpen={isOpen }>
            {children}

            <LiItem>
                <NavLink href="#">
                    Home
                </NavLink>
                <Image src={Underline} alt="underline" />
            </LiItem>
            <LiItem>
                <NavLink href="#">
                    Login
                </NavLink>
                <Image src={Underline} alt="underline" />
            </LiItem>
            <LiItem>
                <NavLink href="#">
                    Registre-se
                </NavLink>
                <Image src={Underline} alt="underline" />
            </LiItem>
            <SocialLinks />
        </MenuContainer>
    )
}