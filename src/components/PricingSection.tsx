import { Container, Box, Transition } from '@mantine/core';
import { useEffect, useState } from 'react';
import classes from './Components.module.css';
import { PricingComponent } from './PricingComponent';

export function PricingSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <Transition
        mounted={mounted}
        transition='slide-down'
        duration={200}
        enterDelay={0}
        timingFunction='ease'
      >
        {(styles) => (
          <div style={styles}>
            <Box className={classes.page} pos={'relative'} w={'100%'}>
              <Container size={'lg'}>
                <PricingComponent></PricingComponent>
              </Container>
            </Box>
          </div>
        )}
      </Transition>
    </>
  );
}
