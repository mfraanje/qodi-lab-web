import { Box, Grid, Image } from '@mantine/core';
import { ContactComponent } from './ContactComponent';

export function ContactSection() {
  return (
    <Box w={'100%'} my={'xl'}>
      <Grid align='center' gutter={0}>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Image src={'/images/launching-animate.svg'}></Image>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 5 }} offset={{ base: 0, sm: 1 }}>
          <ContactComponent></ContactComponent>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
