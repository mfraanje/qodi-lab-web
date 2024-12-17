import { Box, Image, Transition } from '@mantine/core';
import classes from './Components.module.css';
import { Dots } from './Dots';
import { useEffect, useState } from 'react';

export default function HeroBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Box pos={'absolute'} right={0} top={0}>
        <Transition
          mounted={mounted}
          transition='fade-left'
          duration={800}
          enterDelay={800}
          timingFunction='ease'
        >
          {(styles) => (
            <div style={styles}>
              <Box pos={'absolute'} right={60} top={220}>
                <Dots className={classes.heroDots}></Dots>
              </Box>
            </div>
          )}
        </Transition>
        <Transition
          mounted={mounted}
          transition='fade-left'
          duration={800}
          enterDelay={400}
          timingFunction='ease'
        >
          {(styles) => (
            <div style={styles}>
              <Image
                visibleFrom='sm'
                src='images/innovation-animate.svg'
                right={0}
                pos={'absolute'}
                top={70}
                className={classes.heroImage}
              />
            </div>
          )}
        </Transition>
      </Box>
    </>
  );
}
