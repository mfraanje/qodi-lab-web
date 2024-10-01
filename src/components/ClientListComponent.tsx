'use client';
import {
  Box,
  Text,
  Container,
  Transition,
  Group,
  rem,
  Divider,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import ClientCard from './ClientCard';
import { useTranslations } from 'next-intl';

export default function ClientListComponent() {
  const t = useTranslations('ClientList');
  const [mounted, setMounted] = useState(false);
  const clientList = [
    {
      name: 'JWPlayer',
      logo: '/logos/JWP-logo.svg',
      height: 50,
    },
    {
      name: 'Royal Boskalis Westminister N.V. ',
      logo: '/logos/boskalis-logo.svg',
      height: 50,
    },
    {
      name: 'KLM',
      logo: '/logos/klm-logo.svg',
      height: 40,
    },

    {
      name: 'PGGM',
      logo: '/logos/pggm-logo.svg',
      height: 40,
    },
    {
      name: 'CM.com',
      logo: '/logos/cm-logo.svg',
      height: 50,
    },
    {
      name: 'Alliander',
      logo: '/logos/logo-alliander.png',
      height: 40,
    },
    {
      name: 'Wageningen University & Research',
      logo: '/logos/wageningen-logo.svg',
      height: 45,
    },
    { name: 'De Zorgkeuze', logo: '/logos/zorgkeuze-logo.png', height: 75 },
  ];
  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    setMounted(true);
  };

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
          <Box
            w={'100%'}
            p='md'
            bg={'#3F3D56'}
            mih={300}
            style={{
              boxShadow:
                '0px 4px 8px 10px rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.19)',
            }}
          >
            <Container size={'lg'} pos={'relative'}>
              <Group m={'lg'} justify={'center'} c={'white'} w={'100%'}>
                {clientList.map((client) => (
                  <ClientCard
                    key={client.name}
                    name={client.name}
                    logo={client.logo}
                    height={client.height}
                  />
                ))}
              </Group>
              <Box w={'100%'} pos={'absolute'} top={110}>
                <Divider color='#47445F'></Divider>
                <Text c={'#595577'} size={rem(10)} mt={'md'} ta={'center'}>
                  {t('description')}
                </Text>
              </Box>
            </Container>
          </Box>
        </div>
      )}
    </Transition>
  );
}
