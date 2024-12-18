import {
  Text,
  Title,
  Image,
  Stack,
  Box,
  Paper,
  Transition,
  Grid,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import classes from './Components.module.css';
import { ContactSection } from './ContactSection';
// TODO Check if animations affect SEO
export function PricingComponent() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <Transition
        mounted={mounted}
        transition='slide-up'
        duration={800}
        enterDelay={0}
        timingFunction='ease'
      >
        {(styles) => (
          <div style={styles}>
            <Box className={classes.articleContainer}>
              <Paper className={classes.titleCard} shadow='xl'>
                <Title py={'xl'} my={'1rem'} c={'white'}>
                  Wat kost maatwerk software?
                </Title>
                {/* TODO make into component */}
              </Paper>
              <Box className={classes.articleContent}>
                <Text c={'black'}>
                  De kosten van maatwerk software variëren sterk en hangen af
                  van factoren zoals complexiteit, gewenste functies en
                  integraties met bestaande systemen. Wat je kunt verwachten?
                  Maatwerk software is speciaal ontworpen om aan te sluiten bij
                  de unieke behoeften van jouw organisatie en levert vaak direct
                  meerwaarde op.
                </Text>
                <br /> <br />
                <Title order={3} className={classes.articleTitle}>
                  Hoe bepalen we samen de kosten van software op maat?
                </Title>
                <Text c={'black'}>
                  Bij het ontwikkelen van software op maat werken we nauw samen
                  met jou als klant. We starten met een persoonlijk gesprek
                  waarin we jouw ideeën en doelen bespreken. Ons doel? Jouw
                  visie helder krijgen en deze vertalen naar een concreet en
                  haalbaar plan. In veel gevallen ontwikkelen we eerst een
                  Minimal Viable Product (MVP). Een MVP is een basisversie van
                  de software waarin alleen de belangrijkste functies zijn
                  opgenomen. Hiermee kun je snel starten, waarde genereren en
                  feedback verzamelen voor verdere doorontwikkeling. Zo hou je
                  grip op het proces en op de kosten.
                </Text>
                <br />
                <br />
                <Grid align='center'>
                  <Grid.Col span={{ base: 12, xs: 6 }}>
                    <Image src={'/images/processing-pana.svg'}></Image>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, xs: 6 }}>
                    <Stack gap={0}>
                      <Title order={3} className={classes.articleTitle}>
                        Wat beïnvloedt de kosten van maatwerk software?
                      </Title>
                      De prijs van softwareontwikkeling is afhankelijk van:
                      <ul>
                        <li>
                          De omvang van het project – Meer functies en
                          complexiteit betekent meer ontwikkeltijd.
                        </li>
                        <li>
                          {' '}
                          Technologische keuzes – Soms zijn specifieke
                          frameworks of technologieën nodig, wat invloed heeft
                          op de kosten.
                        </li>{' '}
                        <li>
                          {' '}
                          Onderhoud en support – Na oplevering houden wij je
                          software up-to-date en helpen we bij eventuele
                          aanpassingen. Houd rekening met gemiddeld minstens 10%
                          van de initiele kosten per jaar voor onderhoud.
                        </li>{' '}
                        <li>
                          Team van experts – Ervaren ontwikkelaars leveren
                          sneller een hoogwaardig product, wat uiteindelijk vaak
                          kosten bespaart.
                        </li>
                      </ul>
                      {/* TODO make container left with contact form right */}
                    </Stack>
                  </Grid.Col>
                </Grid>{' '}
                <br />
                <br />
                <Title order={3} className={classes.articleTitle}>
                  Wat kost maatwerk software gemiddeld?
                </Title>
                Elke organisatie is anders en daarom leveren wij altijd een
                oplossing op maat. Echter zijn hier wat gemiddelden voor de
                beeldvorming.
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
                <br />
                <Title order={3} className={classes.articleTitle}>
                  Waarom investeren in maatwerk software?
                </Title>
                <Text>
                  Software op maat is een slimme investering die processen
                  stroomlijnt, fouten minimaliseert en jouw organisatie helpt
                  groeien. Het geeft je flexibiliteit en schaalbaarheid die
                  standaardsoftware vaak niet kan bieden. <br /> Wil je weten
                  wat maatwerk software voor jouw organisatie kost? Neem contact
                  met ons op voor een vrijblijvende offerte en ontdek hoe wij
                  jouw ideeën kunnen omzetten in slimme, toekomstbestendige
                  software.
                </Text>
              </Box>
            </Box>
            <ContactSection></ContactSection>
          </div>
        )}
      </Transition>
    </>
  );
}
