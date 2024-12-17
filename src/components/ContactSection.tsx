import { Container, Group, Image } from '@mantine/core';
import { ContactComponent } from './ContactComponent';

export function ContactSection() {
  return (
    <Container size={'xl'} w={'100%'} my={'xl'}>
      <Group justify='space-between'>
        <Image src={'/images/launching-animate.svg'} w={'50%'}></Image>
        <ContactComponent></ContactComponent>
      </Group>
    </Container>
  );
}
