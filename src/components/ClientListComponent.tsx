'use client';
import { Box, Text, Container, Transition, Group, rem } from '@mantine/core';
import { useEffect, useState } from 'react';
import ClientCard from './ClientCard';

export default function ClientListComponent() {
  const [mounted, setMounted] = useState(false);
  const clientList = [
    {
      name: 'KLM',
      logo: '/logos/klm-logo.svg',
    },
    {
      name: 'Alliander',
      logo: '/logos/logo-alliander.png',
    },

    {
      name: 'Wageningen University & Research',
      logo: '/logos/wageningen-logo.svg',
    },
    {
      name: 'CM.com',
      logo: '/logos/cm-logo.svg',
    },
    { name: 'De Zorgkeuze', logo: '/logos/zorgkeuze-logo.png' },
    {
      name: 'Royal Boskalis Westminister N.V. ',
      logo: '/logos/boskalis-logo.svg',
    },

    {
      name: 'JWPlayer',
      logo: '/logos/JWP-logo.svg',
    },
  ];
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Transition
      mounted={mounted}
      transition='slide-up'
      duration={800}
      enterDelay={200}
      timingFunction='ease'
    >
      {(styles) => (
        <div style={styles}>
          <Box w={'100%'} p='md' pos={'relative'} bg={'#3F3D56'} mih={150}>
            <Container size={'lg'}>
              <Group m={'lg'} justify={'space-between'} c={'white'} w={'100%'}>
                {clientList.map((client) => (
                  <ClientCard
                    key={client.name}
                    name={client.name}
                    logo={client.logo}
                  />
                ))}
              </Group>
              <Text c={'#585577'} size={rem(10)}>
                Organisaties waar onze developers projecten voor hebben
                uitgevoerd
              </Text>
            </Container>
          </Box>
        </div>
      )}
    </Transition>
  );
}
