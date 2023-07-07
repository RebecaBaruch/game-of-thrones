import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export interface LinkProps{
    clasName?: string,
    href: string,
    children: ReactNode
}

export interface HeroSectionProps{
    imgUrl: StaticImageData,
    children: ReactNode
}

export interface ButtonProps{
    onClick?: React.MouseEventHandler<HTMLElement>,
    className?: string,
    children?: React.ReactNode
}

export interface HiddenMenuProps{
    isOpen?: boolean,
    className?: string,
    children: React.ReactNode
}