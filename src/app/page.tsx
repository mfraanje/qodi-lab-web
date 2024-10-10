'use client';
import ClientListComponent from '@/components/ClientListComponent';
import { FeatureCards } from '@/components/FeatureCards';
import HeroBackground from '@/components/HeroBackground';
import { HeroComponent } from '@/components/HeroComponent';
import React from 'react';

export default function Home() {
  return (
    <>
      <HeroBackground></HeroBackground>
      <HeroComponent />
      <FeatureCards></FeatureCards>
      <ClientListComponent />
    </>
  );
}
