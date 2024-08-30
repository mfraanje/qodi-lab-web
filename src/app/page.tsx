'use client';
import { HeroImageComponent } from '@/components/HeroImageComponent';
import React from 'react';

export default function Home() {
  return (
    <>
      <HeroImageComponent />
      <div
        style={{ width: '100vw', height: '200px', background: '#3F3D56' }}
      ></div>
    </>
  );
}
