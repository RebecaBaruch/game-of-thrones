'use client'
import React from 'react';
import Image from 'next/image';

import NavButton from "./NavButton"
import { NavWrapper, LinkContainer } from "./styled"
import NavLink from './NavLink';

import HboLogo from '../../../../public/images/hboLogo.svg';

export default function Navbar(): JSX.Element{
    return(
        <NavWrapper>
            <NavLink href='#'>
                <Image src={HboLogo} alt='hbo-link' className='hbo-logo'/>
            </NavLink>
            <LinkContainer>
                <NavLink href='#'>
                    Registre-se
                </NavLink>
                <NavButton href='#'>
                    Login
                </NavButton>
            </LinkContainer>
        </NavWrapper>
    )
}