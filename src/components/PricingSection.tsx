import {
  Text,
  Container,
  Title,
  Image,
  Group,
  Stack,
  Box,
  Paper,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import classes from './Components.module.css';

export function PricingSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {/* <Container size={'xl'} mt={'10vh'}></Container>

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
              h={'100vh'}
              p='md'
              mt={'xl'}
              className={classes.pricingCard}
              mih={300}
              style={{
                boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.2)',
              }}
            >
              <Card radius={'xl'} bg={'#ffffff00'}> */}
      <Box className={classes.page} pos={'relative'} c={'#0F66A0'} w={'100%'}>
        <Container size={'lg'}>
          <Paper className={classes.titleCard}>
            <Title py={'xl'} my={'1rem'} c={'white'}>
              Wat kost een web app?
            </Title>
          </Paper>
          <Text c={'black'}>
            De kosten van maatwerksoftware lopen sterk uiteen en hangen af van
            verschillende factoren, zoals de complexiteit van de applicatie, de
            gewenste functionaliteiten en de integraties met bestaande systemen.
            Eén ding is zeker: maatwerksoftware wordt speciaal ontwikkeld om
            perfect aan te sluiten bij de unieke behoeften van jouw organisatie.
          </Text>
          <br /> <br />
          <Title order={3}>Hoe bepalen we samen de kosten?</Title>
          <br />
          <Text c={'black'}>
            Bij het ontwikkelen van maatwerksoftware geloven we in een nauwe
            samenwerking met onze klanten. Vanaf het eerste gesprek nemen we de
            tijd om jouw ideeën en doelen goed te begrijpen. Samen vertalen we
            jouw visie naar een concreet plan en stellen we prioriteiten. In
            veel gevallen werken we in eerste instantie toe naar een Minimal
            Viable Product (MVP): een basisversie van de software waarin de
            belangrijkste functies zitten. Dit zorgt ervoor dat je snel waarde
            uit je investering haalt en direct feedback kunt verzamelen voor
            verdere ontwikkeling.
          </Text>
          <br />
          <br />
          <Group>
            <Image src={'/images/processing-pana.svg'} w={'40%'}></Image>

            <Stack w={'50%'} gap={0}>
              <Title order={3}>Wat beïnvloedt de kosten?</Title>
              <br />{' '}
              <Text c={'black'}>
                De omvang van het project: Hoe meer functies en complexiteit,
                hoe hoger de ontwikkelkosten. Technologische keuzes: Soms zijn
                er specifieke frameworks of technologieën nodig die de prijs
                kunnen verhogen. Doorlopend onderhoud: Na oplevering zijn
                updates, aanpassingen en support belangrijk om de software
                optimaal te houden. Expertise: Het werken met een ervaren team
                kan de investering vergroten, maar bespaart tijd en levert een
                kwalitatief beter resultaat.{' '}
              </Text>
            </Stack>
          </Group>
          <br />
          <br />
          <Title order={3}>Wat kun je verwachten?</Title>
          <br />
          <Text c={'black'}>
            Kleine, eenvoudige applicaties starten vaak rond de €5.000 tot
            €15.000. Voor middelgrote projecten ligt het budget meestal tussen
            de €20.000 en €50.000. Bij uitgebreide, complexe systemen met
            meerdere integraties kan de investering oplopen tot boven de
            €50.000. Een slimme investering in de toekomst Maatwerksoftware is
            een investering die zich dubbel en dwars kan terugverdienen. Het
            stroomlijnt processen, verhoogt de efficiëntie en biedt jouw
            organisatie een solide basis om te groeien. Wil je weten wat
            maatwerksoftware voor jouw bedrijf zou kosten? Neem gerust contact
            met ons op. Samen brengen we jouw ideeën tot leven!
          </Text>
        </Container>
        {/* </Card>
            </Box>
          </div>
        )}
      </Transition> */}
      </Box>
    </>
  );
}
