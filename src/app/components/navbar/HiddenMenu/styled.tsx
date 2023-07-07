import { HiddenMenuProps } from '@/interfaces/props';
import styled, { css } from 'styled-components';

export const MenuContainer = styled.ul<HiddenMenuProps>`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 43px;
    position: fixed;
    right: 0;
    top: 0;

    padding: 130px 73px;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    
    list-style: none;
    background: rgba(12, 8, 2, 0.94);
    backdrop-filter: blur(2px);

    ${({ isOpen }) => isOpen && css`
        transform: translateX(0);
    `}

    transition: transform 0.3s ease-in-out;
    transform: translateX(-100%);

    
    /* transition: 0.5s transform ease-out;
    transform: translateX(100%); */
`

export const LiItem = styled.li`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 13px;
    align-items: center;
`