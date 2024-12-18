import { Container, Box } from '@mantine/core';
import classes from './Components.module.css';
import { PricingComponent } from './PricingComponent';

export function PricingSection() {
  return (
    <>
      <Box className={classes.page} pos={'relative'} w={'100%'}>
        <Container size={'lg'}>
          <PricingComponent></PricingComponent>
        </Container>
      </Box>
    </>
  );
}
