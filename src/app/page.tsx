'use client';
import HeroBackground from '@/components/HeroBackground';
import { HeroComponent } from '@/components/HeroComponent';
import React from 'react';

export default function Home() {
  return (
    <>
      <HeroBackground></HeroBackground>
      <HeroComponent />
    </>
  );
}
