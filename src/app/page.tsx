'use client';
import HeroBackground from '@/components/HeroBackground';
import { HeroComponent } from '@/components/HeroComponent';
import { Box, Card, Stack, Transition } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import classes from '@/components/Components.module.css';
import { ContactSection } from '@/components/ContactSection';
import ClientListComponent from '@/components/ClientListComponent';
import { FeatureCards } from '@/components/FeatureCards';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <HeroBackground></HeroBackground>
      <HeroComponent />
      {/* <Container size={'lg'}> */}
      <Transition
        mounted={mounted}
        transition='slide-up'
        duration={800}
        enterDelay={200}
        timingFunction='ease'
      >
        {(styles) => (
          <div style={styles}>
            <Box
              w={'100%'}
              p='md'
              className={classes.pagecard}
              mih={300}
              style={{
                boxShadow: '0px -10px 10px 0px rgba(0, 0, 0, 0.2)',
              }}
            >
              <Card radius={'xl'} bg={'#ffffff00'}>
                <Stack gap={'xl'}>
                  <FeatureCards></FeatureCards>
                  <ClientListComponent></ClientListComponent>
                  <ContactSection></ContactSection>
                </Stack>
              </Card>
            </Box>
          </div>
        )}
      </Transition>
      {/* </Container> */}
    </>
  );
}
