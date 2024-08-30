import {
  Image,
  Container,
  Title,
  Button,
  Group,
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

export function HeroComponent() {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;

  return (
    <Container size='md' pos={'relative'}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Software<span className={classes.highlight}>oplossingen</span>op
            maat
          </Title>
          <Text c='black' mt='md'>
            Of je nu een gebruiksvriendelijke applicatie nodig hebt of een
            volledig geïntegreerd platform, wij ontwikkelen maatwerkoplossingen
            die jouw bedrijf efficiënter laten werken. Transformeer jouw ideeën
            in krachtige, schaalbare tools die het verschil maken.
          </Text>

          <List
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
          >
            <List.Item>
              <b>Web Apps</b> – Applicaties of websites maken om jouw bedrijf
              naar een nieuw niveau te tillen
            </List.Item>
            <List.Item>
              <b>Cloud Oplossingen</b> – Migreer naar de cloud. Bescherm en
              beveilig je data en verbeter je productiviteit
            </List.Item>
            <List.Item>
              <b>IT Advies</b> – Adviezen en hulp op maat om je IT-systemen te
              verbeteren of verder te ontwikkelen
            </List.Item>
          </List>

          <Grid mt={'xl'}>
            <Grid.Col span={10}>
              <TextInput
                leftSectionPointerEvents='none'
                leftSection={icon}
                placeholder='Email'
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <Button radius='xl' size='md' className={classes.control}>
                Verstuur
              </Button>
            </Grid.Col>
          </Grid>
        </div>
        <Image
          src='./image.svg'
          pos='absolute'
          right={-100}
          className={classes.image}
        />
      </div>
    </Container>
  );
}
