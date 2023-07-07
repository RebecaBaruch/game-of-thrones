'use client'
import React from 'react';
import  style from './page.module.css';

import Image from 'next/image';

import HomeBg from '../../public/images/homeBg.png';
import GotLogo from '../../public/images/gotLogo.svg';

import HeroSection from './components/HeroSection';
import Button from './components/Button';
import SocialLink from './components/SocialLink';
import VerticalLine from './components/VerticalLine';

export default function Home() {
  return (
    <main className={style.homeWrapper}>
      <HeroSection imgUrl={HomeBg}>
        <div className={style.mainContent}>
          <Image src={GotLogo} alt='got-logo' width={333} />
          <h2 className={style.subtitle}>The winter is coming</h2>
          <Button href='#'>
            Explore the world
          </Button>

          <SocialLink className={style.socialLinks} />
        </div>
      </HeroSection>

      <VerticalLine />

      <span className={style.sloganText}>
        Na guerra pelo trono, há duas opções: <span>ganhar</span> ou <span>morrer</span>.
      </span>

      <VerticalLine />
    </main>
  )
}
