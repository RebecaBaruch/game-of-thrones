import React from "react";

import Link from 'next/link';
import Image from "next/image";

import { LinksContainer } from "./styled";

import Facebook from '../../../../public/images/facebook.svg';
import Twitter from '../../../../public/images/twitter.svg';
import Instagram from '../../../../public/images/instagram.svg';

export default function SocialLink(): JSX.Element{
    return(
        <LinksContainer>
            <Link href='#'>
                <Image src={Facebook} alt="facebookIcon" width={30} />
            </Link>
            <Link href='#'>
                <Image src={Twitter} alt="twitterIcon" width={23} />
            </Link>
            <Link href='#'>
                <Image src={Instagram} alt="instagramIcon" width={23} />
            </Link>
        </LinksContainer>
    )
}