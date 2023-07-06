'use client'
import React from 'react';

import Image from 'next/image';
import styles from './page.module.css';

import HomeBg from '../../public/images/homeBg.png';
import GotLogo from '../../public/images/gotLogo.svg';

import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection imgUrl={HomeBg}>
        <Image src={GotLogo} alt='got-logo' width={333} />
        <p>teste</p>
      </HeroSection>
    </main>
  )
}
