'use client';
import ClientListComponent from '@/components/ClientListComponent';
import { FeatureCards } from '@/components/FeatureCards';
import HeroBackground from '@/components/HeroBackground';
import { HeroComponent } from '@/components/HeroComponent';
import { Box, Card, Container, Transition } from '@mantine/core';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <HeroBackground></HeroBackground>
      <HeroComponent />
      <Container size={'lg'}>
        <Transition
          mounted={mounted}
          transition='slide-up'
          duration={800}
          enterDelay={200}
          timingFunction='ease'
        >
          {(styles) => (
            <div style={styles}>
              {/* <Box
                w={'100%'}
                p='md'
                bg={'#3F3D56'}
                mih={300}
                style={{
                  boxShadow: '0px -10px 10px 0px rgba(0, 0, 0, 0.2)',
                }}
              > */}
              <Card radius={'xl'} bg={'#3F3D56'}>
                {/* <FeatureCards></FeatureCards> */}
                <ClientListComponent />
              </Card>
              {/* </Box> */}
            </div>
          )}
        </Transition>
      </Container>
    </>
  );
}
