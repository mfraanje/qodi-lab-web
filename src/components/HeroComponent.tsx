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
} from '@mantine/core';
import classes from './Components.module.css';
import { IconAt } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { sendInterestEmail } from '@/services/mail.service';

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
          <div className={classes.content}>
            {/* <Text c='violet.9' mt='md' fw={700} size='xs'>
              Qodi Lab - Development
            </Text> */}
            <Title className={classes.title}>
              Software <span className={classes.highlight}>oplossingen</span> op
              maat
            </Title>
            <Text c='#3F3D56' mt='xl' size='sm'>
              Of je nu een gebruiksvriendelijke applicatie nodig hebt of een
              volledig geïntegreerd platform, wij ontwikkelen
              maatwerkoplossingen die bij jouw bedrijf passen. Transformeer jouw
              ideeën in krachtige, schaalbare tools die het verschil maken.{' '}
              <br />
              <br />
              <strong style={{ color: '#FAB007' }}>Geïnteresseerd? </strong>Laat
              je e-mail achter en we bespreken je idee!
            </Text>
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
                  bg={'#7B886F'}
                  radius={'md'}
                >
                  <Text size='xs' fw={700} mb={1} c={'white'}>
                    Bedankt voor je interesse!
                  </Text>
                  <Text size={'xs'} c={'white'}>
                    We hebben je e-mailadres ontvangen en we zullen snel contact
                    met je opnemen om je vraag te bespreken en de mogelijkheden
                    door te nemen.
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
                  <Grid mt={'3rem'}>
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
                        Zet de eerste stap
                      </Button>
                    </Grid.Col>
                  </Grid>
                </form>
              </>
            )}
            <Image
              src='./image.svg'
              pos='absolute'
              right={-25}
              top={-12}
              className={classes.image}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
