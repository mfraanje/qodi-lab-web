import { Container, Group, Title } from '@mantine/core';
import classes from './Components.module.css';

export default function Header() {
  return (
    <div className={classes.headerBackground}>
      <Container size='lg' pos={'relative'} mb={100}>
        <Group py={'0.5rem'}>
          <Title className={classes.logoText} order={2}>
            <span className={classes.qodi}>Qodi</span> Lab
          </Title>
        </Group>
      </Container>
    </div>
  );
}
