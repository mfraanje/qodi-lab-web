import {
  Image,
  Container,
  Title,
  Button,
  Text,
  List,
  ThemeIcon,
  rem,
  TextInput,
  Grid,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './Components.module.css';
import { IconAt } from '@tabler/icons-react';

export function HeroImageComponent() {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;

  return (
    <Container size='lg' pos={'relative'}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Text c='violet.9' mt='md' fw={700} size='xs'>
            Kodikas Labs
          </Text>
          <Title className={classes.title}>
            Software <span className={classes.highlight}>oplossingen</span> op
            maat
          </Title>
          <Text c='black' mt='md'>
            Of je nu een gebruiksvriendelijke applicatie nodig hebt of een
            volledig geïntegreerd platform, wij ontwikkelen maatwerkoplossingen
            die jouw bedrijf efficiënter laten werken. Transformeer jouw ideeën
            in krachtige, schaalbare tools die het verschil maken.
          </Text>

          {/* <List
            mt={30}
            spacing='sm'
            size='sm'
            icon={
              <ThemeIcon size={20} radius='xl'>
                <IconCheck
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          > */}
          {/* <List.Item>
              <b>Web Apps</b> – Of je nu een gebruiksvriendelijke applicatie
              nodig hebt of een volledig geïntegreerd platform, wij ontwikkelen
              maatwerkoplossingen die jouw bedrijf efficiënter laten werken.
            </List.Item>
            <List.Item>
              <b>Cloud Oplossingen</b> – Stap over naar de cloud en ervaar de
              toekomst van IT. Wij helpen je bij elke stap van de migratie,
              zodat je data altijd veilig en beschikbaar is.
            </List.Item>
            <List.Item>
              <b>IT Advies</b> – Of je nu je huidige IT-infrastructuur wilt
              optimaliseren of nieuwe technologieën wilt implementeren, wij
              bieden de inzichten en begeleiding die je nodig hebt om succesvol
              te zijn.
            </List.Item>
          </List> */}

          <Grid mt={60}>
            <Grid.Col span={10}>
              <TextInput
                leftSectionPointerEvents='none'
                leftSection={icon}
                placeholder='Email'
                size='md'
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <Button radius='sm' size='md' className={classes.control}>
                Verstuur
              </Button>
            </Grid.Col>
          </Grid>
        </div>
        <Image
          src='./image.svg'
          pos='absolute'
          right={-25}
          top={75}
          className={classes.image}
        />
      </div>
    </Container>
  );
}
