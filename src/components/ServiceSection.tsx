import { Container, Box } from '@mantine/core';
import classes from './Components.module.css';
import { ServiceComponent } from './ServiceComponent';

export function ServiceSection() {
  return (
    <>
      <Box className={classes.page} pos={'relative'} w={'100%'}>
        <Container size={'lg'}>
          <ServiceComponent></ServiceComponent>
        </Container>
      </Box>
    </>
  );
}
