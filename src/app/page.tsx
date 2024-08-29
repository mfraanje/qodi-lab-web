'use client';
import React from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function Home() {
  return (
    <div className='h-dvh w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased'>
      <div className='max-w-3xl mx-auto p-4'>
        <h1 className='relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold'>
          Software oplossingen op maat
        </h1>
        <p></p>
        <p className='text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10'>
          Welkom bij Kodikas Labs
        </p>
        <input
          type='text'
          placeholder='naam@domein.com'
          className='p-2 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700'
        />
        <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
          <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
          <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
            Verstuur
          </span>
        </button>
      </div>
      <BackgroundBeams className='h-dvh' />
    </div>
  );
}
