import {
  Text,
  SimpleGrid,
  Container,
  rem,
  Card,
  Box,
  Transition,
} from '@mantine/core';
import { IconDatabase, IconCode, IconWorld } from '@tabler/icons-react';
import classes from './Components.module.css';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export function FeatureCards() {
  const t = useTranslations('FeatureCards');
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const mockdata = [
    {
      icon: IconCode,
      title: t('productTitle'),
      description: t('productDevelopment'),
    },
    {
      icon: IconDatabase,
      title: t('dataTitle'),
      description: t('dataInfra'),
    },
    {
      icon: IconWorld,
      title: t('websitesTitle'),
      description: t('websitesPlatforms'),
    },
  ];

  const features = mockdata.map((feature, index) => (
    <Transition
      key={feature.title}
      mounted={mounted}
      transition='slide-right'
      duration={800}
      enterDelay={index * 200 + 1000}
      timingFunction='ease'
    >
      {(styles) => (
        <div style={styles}>
          <Card
            shadow='xl'
            radius='md'
            className={classes.card}
            padding='xl'
            mih={400}
          >
            <feature.icon
              style={{ width: rem(50), height: rem(50) }}
              stroke={2}
              color={'#525067'}
            />
            <Text
              fz='lg'
              fw={500}
              className={classes.cardTitle}
              mt='md'
              c={'white'}
            >
              {feature.title}
            </Text>
            <Text fz='sm' c='dimmed' mt='sm'>
              {feature.description}
            </Text>
          </Card>
        </div>
      )}
    </Transition>
  ));

  return (
    <Box mih={300} w={'100%'} p='md' bg={'#3F3D56'} pb={100}>
      <Container size='lg' py='xl'>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing='xl' mt={0}>
          {features}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
