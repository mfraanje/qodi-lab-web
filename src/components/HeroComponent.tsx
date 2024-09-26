import {
  Image,
  Container,
  Title,
  Button,
  Text,
  rem,
  TextInput,
  Grid,
  Paper,
  Transition,
  Stack,
  Box,
} from '@mantine/core';
import classes from './Components.module.css';
import { IconAt } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { sendInterestEmail } from '@/services/mail.service';
import { Dots } from './Dots';

export function HeroComponent() {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  const [emailSent, setEmailSent] = useState(false);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Geen valide email'),
    },
  });

  const handleSubmit = async (email: string) => {
    console.log(email);
    await sendInterestEmail(email);
    setEmailSent(true);
  };

  return (
    <>
      <Container size='lg' pos={'relative'} mb={100}>
        <div className={classes.inner}>
          {/* <Text c='violet.9' mt='md' fw={700} size='xs'>
              Qodi Lab - Development
            </Text> */}
          <Stack>
            <Title className={classes.title}>
              Software, <span className={classes.highlight}>simpel</span> en op
              maat
            </Title>
            <div className={classes.content}>
              <Text c='#3F3D56' my='xl' size='sm'>
                Software oplossingen hoeven niet ontoegankelijk te zijn. Of je
                nu een gebruiksvriendelijke applicatie nodig hebt of een
                volledig geïntegreerd platform, wij helpen je om jouw ideeën in
                krachtige, schaalbare tools te transformeren die het verschil
                maken. <br />
                <br />
                <strong className={classes.highlight}>Geïnteresseerd? </strong>
                Laat je e-mail achter om volledig gratis en vrijblijvend over je
                idee of probleem te sparren!
              </Text>
            </div>
            <Box>
              <Transition
                mounted={emailSent}
                transition='fade-left'
                duration={400}
                timingFunction='ease'
              >
                {(styles) => (
                  <Paper
                    style={styles}
                    p={'xs'}
                    px={'lg'}
                    mt={'xl'}
                    bg={'#51A3A3'}
                    radius={'md'}
                  >
                    <Text size='xs' fw={700} mb={1} c={'white'}>
                      Bedankt voor je interesse!
                    </Text>
                    <Text size={'xs'} c={'white'}>
                      We hebben je e-mailadres ontvangen en we zullen snel
                      contact met je opnemen om je vraag te bespreken en de
                      mogelijkheden door te nemen.
                    </Text>
                  </Paper>
                )}
              </Transition>
              {!emailSent && (
                <>
                  <form
                    onSubmit={form.onSubmit((values) =>
                      handleSubmit(values.email)
                    )}
                  >
                    <Grid mt={'1rem'}>
                      <Grid.Col span={{ base: 12, md: 8 }}>
                        <TextInput
                          leftSectionPointerEvents='none'
                          leftSection={icon}
                          placeholder='Email'
                          size='sm'
                          type='email'
                          name='email'
                          id='email'
                          required
                          autoComplete='email'
                          key={form.key('email')}
                          {...form.getInputProps('email')}
                        />
                      </Grid.Col>
                      <Grid.Col span={2}>
                        <Button
                          radius='sm'
                          size='sm'
                          className={classes.control}
                          type='submit'
                        >
                          Vraag aan
                        </Button>
                      </Grid.Col>
                    </Grid>
                  </form>
                </>
              )}
            </Box>
          </Stack>
        </div>
      </Container>
      <Box pos={'absolute'} right={-40} top={0}>
        <Image
          src='./image.svg'
          pos='absolute'
          right={80}
          top={157}
          className={classes.image}
        />
        <Box pos={'absolute'} right={80} top={220}>
          <Dots className={classes.heroDots}></Dots>
        </Box>
        <svg
          viewBox='0 0 200 200'
          xmlns='http://www.w3.org/2000/svg'
          className={classes.backgroundBlob}
        >
          {/* /#EF767A */}
          <path
            fill='#51A3A3'
            d='M33.8,-43.4C45.5,-30.5,57.8,-21.4,62.9,-8.7C67.9,3.9,65.6,20.3,57.5,32.1C49.4,44,35.4,51.5,19.2,60.9C3,70.3,-15.4,81.6,-33,79.9C-50.5,78.1,-67.2,63.3,-75.9,45.3C-84.6,27.2,-85.3,6,-80.2,-12.6C-75,-31.2,-64,-47.1,-49.7,-59.6C-35.3,-72,-17.7,-80.9,-3.3,-76.9C11.1,-73,22.1,-56.3,33.8,-43.4Z'
            transform='translate(100 100)'
          />
        </svg>
      </Box>
    </>
  );
}
