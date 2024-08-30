import { Title, Text, Button, Container } from '@mantine/core';
import { Dots } from './Dots';
import classes from './Components.module.css';

export function HeroComponent() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Software{' '}
          <Text component='span' className={classes.highlight} inherit>
            oplossingen
          </Text>{' '}
          op maat
        </Title>

        <Container p={0} size={800}>
          <Text size='lg' c='dimmed' className={classes.description}>
            Of je nu een gebruiksvriendelijke applicatie nodig hebt of een
            volledig geïntegreerd platform, wij ontwikkelen maatwerkoplossingen
            die jouw bedrijf efficiënter laten werken. Transformeer jouw ideeën
            in krachtige, schaalbare tools die het verschil maken.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            size='lg'
            variant='default'
            color='gray'
          >
            Book a demo
          </Button>
          <Button className={classes.control} size='lg'>
            Purchase a license
          </Button>
        </div>
      </div>
    </Container>
  );
}
