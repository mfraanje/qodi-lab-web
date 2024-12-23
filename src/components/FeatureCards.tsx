import {
  Text,
  SimpleGrid,
  Container,
  rem,
  Card,
  Box,
  Transition,
  Group,
} from '@mantine/core';
import { IconBulb, IconCode, IconWriting } from '@tabler/icons-react';
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
      icon: IconBulb,
      title: t('prototypeTitle'),
      description: t('prototypeDevelopment'),
    },
    {
      icon: IconCode,
      title: t('productTitle'),
      description: t('productDevelopment'),
    },
    {
      icon: IconWriting,
      title: t('maintananceTitle'),
      description: t('maintanance'),
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
          <Card shadow='xl' radius='md' className={classes.card} padding='xl'>
            <Group h={100}>
              <feature.icon
                style={{
                  width: rem(50),
                  height: rem(50),
                  position: 'absolute',
                }}
                stroke={2}
                color={'#43B4FF'}
              />
              <Text
                ml={70}
                fz='lg'
                fw={500}
                className={classes.cardTitle}
                mt='md'
                c={'#D2E0EC'}
              >
                {feature.title}
              </Text>
            </Group>
            <Text fz='sm' c='#9896B9' mt='sm'>
              {feature.description}
            </Text>
          </Card>
        </div>
      )}
    </Transition>
  ));

  return (
    <Box mih={300} w={'100%'} p='md' pt={0} pb={100}>
      <Container size='xl' py='xl'>
        <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing='xl' mt={0}>
          {features}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
