import React from 'react';

import { LinkProps } from '../../../../interfaces/props';
import { LinkWrapper } from "./styled";

export default function NavLink({ href, children }: LinkProps): JSX.Element{
    return(
        <LinkWrapper href={href}  className='link-style'>
            { children }
        </LinkWrapper>
    );
}