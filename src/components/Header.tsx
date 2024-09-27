import { Container, Group, Title, Text } from '@mantine/core';
import classes from './Components.module.css';

export default function Header() {
  return (
    <div className={classes.header}>
      <Container size='lg' pos={'relative'}>
        <Group py={'0.5rem'} justify='space-between'>
          <Title className={classes.logoText} order={2}>
            <span className={classes.qodi}>Qodi</span> Lab
          </Title>
          <Text mt={'0.25rem'} size='sm'>
            Software Development | Consulting
          </Text>
        </Group>
      </Container>
    </div>
  );
}
