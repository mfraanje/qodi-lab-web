import { Tooltip, Image, Transition } from '@mantine/core';
import { useEffect, useState } from 'react';

function ClientCard({ name, logo, height = 50 }: any) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <Transition
        mounted={mounted}
        transition='slide-right'
        duration={800}
        enterDelay={1000}
        timingFunction='ease'
      >
        {(styles) => (
          <div style={styles}>
            <Tooltip label={name}>
              <Image
                fit='contain'
                w={70}
                h={height}
                mr='lg'
                src={logo}
                alt=''
              />
            </Tooltip>
          </div>
        )}
      </Transition>
    </>
  );
}
export default ClientCard;
