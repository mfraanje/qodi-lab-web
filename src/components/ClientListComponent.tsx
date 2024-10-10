'use client';
import { Box, Text, Container, rem, Divider } from '@mantine/core';
import ClientCard from './ClientCard';
import { useTranslations } from 'next-intl';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import embla from './Embla.module.css';

export default function ClientListComponent() {
  const t = useTranslations('ClientList');

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
      name: 'BC Education Consultancy',
      logo: '/logos/bceducation-logo.svg',
      height: 40,
    },

    // {
    //   name: 'PGGM',
    //   logo: '/logos/pggm-logo.svg',
    //   height: 40,
    // },
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

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, direction: 'backward', speed: 0.5 }),
  ]);

  return (
    <Container size={'lg'} pos={'relative'} pb={100}>
      <div className={embla.embla}>
        <div className={embla.embla__viewport} ref={emblaRef}>
          <div className={embla.embla__container}>
            {/* <Group
                  m={'lg'}
                  justify={'center'}
                  gap={20}
                  c={'white'}
                  w={'100%'}
                > */}
            {clientList.map((client) => (
              <div className={embla.embla__slide} key={client.name}>
                <div className={embla.embla__slide__number}>
                  <ClientCard
                    key={client.name}
                    name={client.name}
                    logo={client.logo}
                    height={client.height}
                  />
                </div>
              </div>
            ))}
            {/* </Group> */}
          </div>
        </div>
      </div>
      <Box w={'100%'} pos={'absolute'} top={110}>
        <Divider color='#47445F'></Divider>
        <Text c={'#595577'} size={rem(10)} mt={'md'} ta={'center'}>
          {t('description')}
        </Text>
      </Box>
    </Container>
  );
}
