import {
  Text,
  SimpleGrid,
  Container,
  rem,
  Card,
  Box,
  Transition,
} from '@mantine/core';
import { IconCloud, IconDatabase, IconCode } from '@tabler/icons-react';
import classes from './Components.module.css';
import { useEffect, useState } from 'react';

const mockdata = [
  {
    icon: IconCode,
    title: 'Productontwikkeling | E2E',
    description:
      'Van idee tot eindproduct: wij helpen je om innovatieve software-oplossingen te ontwikkelen die naadloos aansluiten op jouw unieke behoeften. Ons team zorgt voor een gebruiksvriendelijke en schaalbare applicatie die jouw bedrijf vooruit helpt.',
  },
  {
    icon: IconDatabase,
    title:
      '                             Data-infrastructuur                             ',
    description:
      'Betrouwbare en efficiënte data-oplossingen zijn essentieel voor jouw bedrijf. Wij ontwerpen en bouwen robuuste infrastructuren waarmee je gegevens veilig en gestructureerd kunt opslaan, verwerken en analyseren.',
  },
  {
    icon: IconCloud,
    title: 'Cloud Omgevingen',
    description:
      'Zet je bedrijf in de cloud met onze op maat gemaakte cloud-oplossingen. Of je nu je huidige systemen wilt migreren of een volledig nieuw platform wilt opzetten, wij bieden flexibele, veilige en schaalbare cloud-diensten.',
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
