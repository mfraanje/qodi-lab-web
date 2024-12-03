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
    <Box pos={'absolute'} right={0} top={0}>
      <div>
        <Transition
          mounted={mounted}
          transition='fade-left'
          duration={800}
          timingFunction='ease'
        >
          {(styles) => (
            <div style={styles}>
              <svg
                viewBox='-15 40 120 120'
                xmlns='http://www.w3.org/2000/svg'
                className={classes.backgroundBlob}
              >
                <path
                  fill='#51A3A3'
                  width={'100%'}
                  height={'100%'}
                  d='M33.8,-43.4C45.5,-30.5,57.8,-21.4,62.9,-8.7C67.9,3.9,65.6,20.3,57.5,32.1C49.4,44,35.4,51.5,19.2,60.9C3,70.3,-15.4,81.6,-33,79.9C-50.5,78.1,-67.2,63.3,-75.9,45.3C-84.6,27.2,-85.3,6,-80.2,-12.6C-75,-31.2,-64,-47.1,-49.7,-59.6C-35.3,-72,-17.7,-80.9,-3.3,-76.9C11.1,-73,22.1,-56.3,33.8,-43.4Z'
                  transform='translate(100 100)'
                  z={-1}
                />
              </svg>
            </div>
          )}
        </Transition>
      </div>
      <Transition
        mounted={mounted}
        transition='fade-left'
        duration={800}
        enterDelay={400}
        timingFunction='ease'
      >
        {(styles) => (
          <div style={styles}>
            <Box pos={'absolute'} right={80} top={220}>
              <Dots className={classes.heroDots}></Dots>
            </Box>
          </div>
        )}
      </Transition>
      <Transition
        mounted={mounted}
        transition='fade-left'
        duration={800}
        enterDelay={200}
        timingFunction='ease'
      >
        {(styles) => (
          <div style={styles}>
            <Image
              src='./images/image.svg'
              pos='absolute'
              right={80}
              top={207}
              className={classes.image}
            />
          </div>
        )}
      </Transition>
    </Box>
  );
}
