import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export interface LinkProps{
    href: string,
    children: ReactNode
}

export interface HeroSectionProps{
    imgUrl: StaticImageData,
    children: ReactNode
}