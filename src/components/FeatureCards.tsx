import {
  Text,
  SimpleGrid,
  Container,
  rem,
  Card,
  Box,
  Transition,
} from '@mantine/core';
import { IconTruck, IconCertificate, IconCoin } from '@tabler/icons-react';
import classes from './Components.module.css';
import { useEffect, useState } from 'react';

const mockdata = [
  {
    icon: IconTruck,
    title: 'Product ontwikkeling',
    description:
      'As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.',
  },
  {
    icon: IconCertificate,
    title: 'Data Infrastructuur',
    description:
      'Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.',
  },
  {
    icon: IconCoin,
    title: 'Cloud Ontwikkeling',
    description:
      'Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.',
  },
];
export function FeatureCards() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
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
            mih={300}
          >
            <feature.icon
              style={{ width: rem(50), height: rem(50) }}
              stroke={2}
              color={'#EF6F6C'}
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
    <Box mih={300}>
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
                boxShadow: '0px -10px 20px 0px rgba(0, 0, 0, 0.2)',
              }}
            >
              <Container size='lg' py='xl'>
                <SimpleGrid cols={{ base: 1, md: 3 }} spacing='xl' mt={0}>
                  {features}
                </SimpleGrid>
              </Container>
            </Box>
          </div>
        )}
      </Transition>
    </Box>
  );
}
