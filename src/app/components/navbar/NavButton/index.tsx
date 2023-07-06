import React from 'react';

import { Button } from './styled';
import { LinkProps } from '../../../../interfaces/props';

export default function NavButton({ href, children }: LinkProps): JSX.Element{
    return(
        <Button href={href} className='link-style'>
            {children}
        </Button>
    );
}