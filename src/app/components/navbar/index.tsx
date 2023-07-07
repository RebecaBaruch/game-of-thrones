'use client'
import React, { useState } from 'react';
import Image from 'next/image';

import NavButton from "./NavButton"
import { NavWrapper, LinkContainer } from "./styled"
import NavLink from './NavLink';

import HboLogo from '../../../../public/images/hboLogo.svg';
import MenuButton from './MenuButton';
import HiddenMenu from './HiddenMenu';
import CloseButton from './HiddenMenu/CloseButton';

export default function Navbar(): JSX.Element{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return(
        <NavWrapper>
            <NavLink href='https://www.hbomax.com/br/pt/series/urn:hbo:series:GVU2cggagzYNJjhsJATwo'>
                <Image src={HboLogo} alt='hbo-link' className='hbo-logo'/>
            </NavLink>
            <LinkContainer  className='navbarBtn'>
                <NavLink href='#'>
                    Registre-se
                </NavLink>
                <NavButton href='#'>
                    Login
                </NavButton>
            </LinkContainer>
            <MenuButton onClick={toggleMenu} className='menuButton' />
            {isMenuOpen && 
                <HiddenMenu className={`hiddenMenu ${isMenuOpen ? 'open' : ''}`} isOpen={isMenuOpen}>
                    <CloseButton onClick={toggleMenu} />
                </HiddenMenu>
            }
        </NavWrapper>
    )
}