import {
  Title,
  Image,
  Stack,
  Box,
  Grid,
  BackgroundImage,
  Center,
} from '@mantine/core';
import classes from './Components.module.css';
import { ContactSection } from './ContactSection';
// TODO Check if animations affect SEO
export function ServiceComponent() {
  return (
    <>
      <Box className={classes.articleContainer}>
        <BackgroundImage
          src='images/laptops.jpg'
          className={classes.titleCard}
          bg={'#D2E0EC'}
        >
          <Center p='md'>
            <Title c='white'>Van idee naar maatwerk software</Title>
          </Center>
        </BackgroundImage>

        {/* TODO make into component */}
        <Box className={classes.articleContent}>
          <span>
            Bij het ontwikkelen van maatwerksoftware draait alles om
            samenwerking. Jouw idee staat centraal, en wij helpen om dit stap
            voor stap te vertalen naar een functionele, toekomstbestendige
            oplossing. Van brainstorm tot onderhoud: wij begeleiden je gedurende
            het hele traject.
          </span>
          <br /> <br />
          <br />
          <Title order={3} className={classes.articleTitle}>
            Stap 1: Samen jouw idee scherpstellen
          </Title>
          <span>
            Alles begint met een goed gesprek. In deze eerste fase bespreken we
            jouw visie, doelen en uitdagingen. We stellen vragen zoals:
          </span>
          <ul>
            <li>Wat wil je bereiken met de software?</li>
            <li>Welke problemen moet de software oplossen?</li>
            <li>Wie zijn de gebruikers, en wat hebben zij nodig?</li>
          </ul>
          <span>
            Deze inzichten vertalen we naar een helder plan. Een belangrijk
            onderdeel van deze fase is het prioriteren van functionaliteiten.
            Vaak werken we eerst naar een Minimal Viable Product (MVP): een
            basisversie van de software die snel inzetbaar is en de
            kernfunctionaliteiten bevat. Met een MVP kun je direct waarde
            leveren, feedback verzamelen en gerichte verbeteringen doorvoeren.
          </span>
          <br />
          <br />
          <br />
          <Grid align='center'>
            <Grid.Col span={{ base: 12, xs: 6 }}>
              <Stack gap={0}>
                <Title order={3} className={classes.articleTitle}>
                  Stap 2: Ontwikkeling van de MVP
                </Title>
                <span>
                  Als de doelen en het MVP-plan zijn vastgesteld, begint het
                  ontwikkelproces. Bij het bouwen staan gebruiksvriendelijkheid,
                  prestaties en schaalbaarheid centraal. Het werk wordt gedaan
                  in korte sprints, een methode uit de agile
                  softwareontwikkeling. Dit betekent dat we regelmatig opleveren
                  en samen met jou evalueren. Hierdoor blijft het proces
                  flexibel, en kun je tussentijds aanpassingen doorvoeren op
                  basis van nieuwe inzichten of veranderende behoeften.
                </span>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 6 }}>
              <Image src={'images/project-stages-animate.svg'}></Image>
            </Grid.Col>
          </Grid>{' '}
          <br />
          <br />
          <br />
          <Title order={3} className={classes.articleTitle}>
            Stap 3: Van MVP naar de eindproduct lancering
          </Title>
          Met de feedback en inzichten uit de MVP-fase werken we verder aan de
          ontwikkeling van het complete eindproduct. Hier breiden we de software
          uit met aanvullende functionaliteiten, integraties en verfijningen op
          basis van jouw wensen en de feedback van gebruikers. Onze focus ligt
          op het creëren van een schaalbare en toekomstbestendige oplossing. We
          zorgen ervoor dat de software naadloos aansluit op jouw bestaande
          processen en eenvoudig kan meegroeien met jouw organisatie. Dit
          eindproduct is volledig geoptimaliseerd en klaar om op grote schaal
          gebruikt te worden.
          <br />
          <br />
          Voordat de software wordt gelanceerd, testen we deze grondig. Dit doen
          we samen met jou om te zorgen dat alles werkt zoals bedoeld. Van
          functionaliteit tot veiligheid: elk detail wordt gecontroleerd. Na
          jouw goedkeuring zetten we de software live en begeleiden we je bij de
          implementatie.
          <br />
          <br />
          <br />
          <Title order={3} className={classes.articleTitle}>
            Stap 4: Onderhoud en doorontwikkeling
          </Title>
          <span>
            De lancering is niet het einde, maar juist het begin van een nieuwe
            fase. Software vereist onderhoud om up-to-date te blijven en soepel
            te functioneren. Denk aan:
          </span>
          <ul>
            <li>
              Technische updates: Nieuwe technologieën of beveiligingspatches.
            </li>
            <li>
              Aanpassingen en uitbreidingen: Functionaliteiten toevoegen op
              basis van gebruikersfeedback of nieuwe wensen.
            </li>
            <li>
              Ondersteuning: Wij staan klaar om je te helpen met vragen of
              problemen.
            </li>
          </ul>
          <span>
            Door continu te monitoren en verbeteren, zorgen we ervoor dat jouw
            maatwerksoftware relevant blijft en met jouw organisatie meegroeit.
          </span>
        </Box>
      </Box>
      <ContactSection></ContactSection>
    </>
  );
}
