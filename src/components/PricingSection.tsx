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
        <Container size={'md'}>
          <Paper className={classes.titleCard}>
            <Title py={'xl'} my={'1rem'} c={'white'}>
              Wat kost maatwerksoftware?
            </Title>
            {/* TODO make into component */}
          </Paper>
          <Text c={'black'}>
            De kosten van maatwerksoftware variëren sterk en hangen af van
            factoren zoals complexiteit, gewenste functies en integraties met
            bestaande systemen. Wat je kunt verwachten? Maatwerksoftware is
            speciaal ontworpen om aan te sluiten bij de unieke behoeften van
            jouw organisatie en levert vaak direct meerwaarde op.
          </Text>
          <br /> <br />
          <Title order={3}>
            Hoe bepalen we samen de kosten van software op maat?
          </Title>
          <br />
          <Text c={'black'}>
            Bij het ontwikkelen van software op maat werken we nauw samen met
            jou als klant. We starten met een persoonlijk gesprek waarin we jouw
            ideeën en doelen bespreken. Ons doel? Jouw visie helder krijgen en
            deze vertalen naar een concreet en haalbaar plan. In veel gevallen
            ontwikkelen we eerst een Minimal Viable Product (MVP). Een MVP is
            een basisversie van de software waarin alleen de belangrijkste
            functies zijn opgenomen. Hiermee kun je snel starten, waarde
            genereren en feedback verzamelen voor verdere doorontwikkeling. Zo
            hou je grip op het proces en op de kosten.
          </Text>
          <br />
          <br />
          <Group>
            <Image src={'/images/processing-pana.svg'} w={'40%'}></Image>

            <Stack w={'50%'} gap={0}>
              <Title order={3}>
                Wat beïnvloedt de kosten van maatwerksoftware?
              </Title>
              <br />{' '}
              <Text c={'black'}>
                De prijs van softwareontwikkeling is afhankelijk van:
                <ul>
                  <li>
                    De omvang van het project – Meer functies en complexiteit
                    betekent meer ontwikkeltijd.
                  </li>
                  <li>
                    {' '}
                    Technologische keuzes – Soms zijn specifieke frameworks of
                    technologieën nodig, wat invloed heeft op de kosten.
                  </li>{' '}
                  <li>
                    {' '}
                    Onderhoud en support – Na oplevering houden wij je software
                    up-to-date en helpen we bij eventuele aanpassingen. Houd
                    rekening met gemiddeld minstens 10% van de initiele kosten
                    per jaar voor onderhoud.
                  </li>{' '}
                  <li>
                    Team van experts – Ervaren ontwikkelaars leveren sneller een
                    hoogwaardig product, wat uiteindelijk vaak kosten bespaart.
                  </li>
                </ul>
              </Text>
            </Stack>
          </Group>
          <br />
          <br />
          <Title order={3}>Wat kost maatwerksoftware gemiddeld?</Title>
          <br />
          <Text c={'black'}>
            <ol>
              <li>
                Kleine projecten (eenvoudige applicaties): €5.000 - €15.000
              </li>
              <li>
                Middelgrote projecten (gemiddelde complexiteit): €20.000 -
                €50.000{' '}
              </li>
              <li>
                Grote projecten (complexe systemen en integraties): €50.000+
              </li>
            </ol>
            Elke organisatie is anders en daarom leveren wij altijd een
            oplossing op maat.
          </Text>
          <br />
          <br />
          <Title order={3}>Waarom investeren in maatwerksoftware?</Title>
          <Text c={'black'}>
            Software op maat is een slimme investering die processen
            stroomlijnt, fouten minimaliseert en jouw organisatie helpt groeien.
            Het geeft je flexibiliteit en schaalbaarheid die standaardsoftware
            vaak niet kan bieden. <br /> Wil je weten wat maatwerksoftware voor
            jouw organisatie kost? Neem contact met ons op voor een
            vrijblijvende offerte en ontdek hoe wij jouw ideeën kunnen omzetten
            in slimme, toekomstbestendige software.
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
